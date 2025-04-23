import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { loginUser, userLoading } = useContext(AuthContex);
    const location = useLocation();
    if (userLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <span className="loading loading-dots loading-xs"></span>
                    <span className="loading loading-dots loading-sm"></span>
                    <span className="loading loading-dots loading-md"></span>
                    <span className="loading loading-dots loading-lg"></span>
                    <span className="loading loading-dots loading-xl"></span>
                </div>
            </div>
        )


    }

    if (loginUser) {
        return children;
    }

    return <Navigate to="/LoginRegistration" state={{ from: location }} replace />;
};

export default PrivateRoute;
