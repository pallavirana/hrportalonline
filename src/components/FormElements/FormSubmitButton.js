import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';

export const FormSubmitButton = ({classes, type, value,disabled}) => <>
    <button type={type} className={classes.button} disabled={disabled}>{value}</button>
</>;

export default withStyles(styles)(FormSubmitButton);