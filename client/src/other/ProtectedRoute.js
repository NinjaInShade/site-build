// Libraries
import React from "react";
import { Redirect, Route } from "react-router-dom";

// Context
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { authToken } = useAuth();

  return <Route {...rest} render={(props) => (authToken.token ? <Component {...rest} {...props} /> : <Redirect to="/" />)} />;
}
