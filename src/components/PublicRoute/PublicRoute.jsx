import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, redirectTo }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;
};

export default PublicRoute;
