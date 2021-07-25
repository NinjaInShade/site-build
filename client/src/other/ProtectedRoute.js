import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route {...rest} render={(props) => (currentUser ? <Component {...rest} {...props} /> : <Redirect to='/' />)} />
  );
}
