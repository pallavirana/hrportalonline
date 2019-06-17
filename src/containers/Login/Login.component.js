
import React, { useState } from "react";
import withStyles from 'react-jss';
import { Formik } from "formik";
import * as yup from 'yup'
import styles from './Login.styles';
import {FormInput, FormSubmitButton, SuccessMsgBlock} from '../../components/FormElements';

const userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please Enter an valid Email")
      .required("Email is Required."),
    password: yup
      .string()
      .required("Password is Required.")
      .max(13,"Too long")
      .min(8,"Too short")
  })

const initialState = {
    email: "",
    password: ""
  };

export const Login = (props) => { 
    const { classes} = props;
    const [user, setUser] = useState(initialState);
    return (
    <div className={classes.loginWrap}>
        {user.email && <SuccessMsgBlock msg={`${user.email} loggedin succesfully`} />}
        <Formik
            initialValues={user}
            onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(true);
            setUser(values);
            setTimeout(() => {
                actions.resetForm(initialState);
                actions.setSubmitting(false);
            }, 2000);
            }}
            validationSchema={userSchema}
        >
            {props => (
                <form onSubmit={props.handleSubmit} className={classes.loginForm}>
                    <FormInput
                        name="email"
                        onChange={props.handleChange}
                        value={props.values.email}
                        type="text"
                        placeholder="Email"
                        errorStatus = {props.errors.email && props.touched.email}
                        errorMsg = {props.errors.email}
                    />
                    <FormInput
                        type="password"
                        onChange={props.handleChange}
                        name="password"
                        value={props.values.password}
                        placeholder="Password"
                        errorStatus = {props.errors.password && props.touched.password}
                        errorMsg = {props.errors.password}
                    />
                    <FormSubmitButton
                        value="Login"
                        type="submit"
                        disabled={!props.dirty && !props.isSubmitting}
                    />
                </form>
            )}
        </Formik>
    </div>
)};

export default withStyles(styles)(Login);