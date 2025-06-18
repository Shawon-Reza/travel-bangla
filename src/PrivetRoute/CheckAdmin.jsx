import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAdmin = ({children}) => {

    const {userRole}= useContext(AuthContex)
     const location = useLocation();

    if(userRole=='admin'){
        return children
    }


       return <Navigate to="/admin" state={{ from: location }} replace />;
};

export default CheckAdmin;