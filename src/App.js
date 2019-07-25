import React from 'react';
import {useRoutes} from 'hookrouter';
import './App.css';
import { Login } from './containers/Login';
import { Dashboard } from './containers/Dashboard';
import { NotFoundPage } from './containers/NotFoundPage';

const routes = {
  '/': () => <Login />,
  '/dashboard': () => <Dashboard />,
};

const App = () => {
  const routeResult = useRoutes(routes);
  
  return routeResult || <NotFoundPage />;
}

export default App;
