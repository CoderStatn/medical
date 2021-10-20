import React from 'react';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {
    const { user } = useAuth();
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: location}
                }}
                ></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;