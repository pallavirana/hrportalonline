import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';

export const FormInput = ({classes, type, name, placeholder}) => <div className={classes.FormInputWrap}>
    <input type={type} name={name} placeholder={placeholder} className={classes.FormInput} />
</div>;

export default withStyles(styles)(FormInput);