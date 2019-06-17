import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';

export const FormSubmitButton = ({classes, type, value}) => <>
    <button type={type} className={classes.button}>{value}</button>
</>;

export default withStyles(styles)(FormSubmitButton);