import React from 'react';
import withStyles from 'react-jss';
import styles from './Login.styles';
import {FormInput, FormSubmitButton} from '../../components/FormElements'

export const Login = ({classes}) => <div className={classes.loginWrap}>
    <FormInput type="text" name="username" placeholder="Username" />
    <FormInput type="text" name="password" placeholder="Password" />
    <FormSubmitButton value="Login" type="submit" />
</div>;

export default withStyles(styles)(Login);