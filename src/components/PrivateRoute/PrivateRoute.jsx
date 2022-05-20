import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import React from 'react';
import User from '../../pages/User';

const PrivateRoute = () => {
  const loginStatus = useSelector((state) => state.user.status);

  if (loginStatus === 'succeeded') {
    return <User />;
  }
  return <Navigate to="/sign-in" />;
};

export default PrivateRoute;
