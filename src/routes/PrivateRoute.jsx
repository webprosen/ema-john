import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location =  useLocation();
    console.log(location);

    if(loading){
        return <div>Loading...</div>
    }
    
    if(user){
        return children;
    } else {
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
};

export default PrivateRoute;