//Core
import { Suspense } from 'react';
//Packages
import { Switch } from 'react-router-dom';
//Components
import { Layout, Loader } from './Shared';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	return (
		<Layout>
			<Suspense fallback={<Loader onLoad={true} />}>
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
		</Layout>
	);
};

export default App;
