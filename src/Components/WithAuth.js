import React from 'react'
import { Navigate } from 'react-router-dom';

const WithAuth = (Component) => {
    return (props) => {
        const token = localStorage.getItem('token');
        if (!token) {
          return <Navigate to="/login" />;
        }
        return <Component {...props} />;
      };
}

export default WithAuth
