import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';

export const FormInput = ({classes, type, name, placeholder, errorStatus, errorMsg, onChange, value}) => <div className={classes.FormInputWrap}>
    <input type={type} name={name} placeholder={placeholder} className={classes.FormInput} onChange={onChange} value={value} id={name} />
    {errorStatus && <span className={classes.errorMsg}>{errorMsg}</span>}
</div>;

export default withStyles(styles)(FormInput);