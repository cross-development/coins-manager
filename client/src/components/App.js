//Core
import { Suspense } from 'react';
import { Switch } from 'react-router-dom';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	return (
		<Suspense fallback={null}>
			<Switch>
				{routes.map(route =>
					route.private ? (
						<PrivateRoute key={route.path} {...route} />
					) : (
						<PublicRoute key={route.path} {...route} />
					),
				)}
			</Switch>
		</Suspense>
	);
};

export default App;
