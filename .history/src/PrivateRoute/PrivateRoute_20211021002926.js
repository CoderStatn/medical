import React from 'react';
import useAuth from '../hooks/useAuth';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <div>
            <Route
                {...rest}
                render{()}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;