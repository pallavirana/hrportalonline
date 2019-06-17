import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';

export const SuccessMsgBlock = ({classes, msg}) => <div className={classes.successMsgWrap}>
    {msg}
</div>;

export default withStyles(styles)(SuccessMsgBlock);