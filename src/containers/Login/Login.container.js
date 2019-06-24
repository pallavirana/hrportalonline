import React from 'react';
import withStyles from 'react-jss';
import styles from './Login.styles';
import { FirebaseContext } from '../../utils/Firebase';
import {LoginForm} from './Login.component';

const Login = (props) => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <LoginForm firebase={firebase} {...props} />}
    </FirebaseContext.Consumer>
  </div>
);

export default withStyles(styles)(Login);
