import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  console.log(currentUser !== undefined && currentUser !== null, currentUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser !== undefined && currentUser !== null ? <Component {...rest} {...props} /> : <Redirect to='/' />
      }
    />
  );
}
