//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { authHooks } from 'redux/auth';
import { userHooks } from 'redux/user';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
	const { token } = authHooks.useAuth();
	const { userInfo } = userHooks.useUser();

	const isAuth = token && userInfo;

	return (
		<Route
			{...routeProps}
			render={props => (isAuth ? <Component {...props} /> : <Redirect to="/sign-up" />)}
		/>
	);
};

export default PrivateRoute;
