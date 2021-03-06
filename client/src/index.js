//Core
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
//Components
import App from 'components/App';
//Redux
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//Styles
import GlobalStyles from 'styles/index.styles';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router>
				<App />
			</Router>

			<GlobalStyles />
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);

reportWebVitals();
