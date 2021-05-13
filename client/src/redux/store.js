//Core Redux
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
//Redux middleware
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import logger from 'redux-logger';
//Redux
import { authReducers } from './auth';
import { userReducers } from './user';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducers),
		user: userReducers,
	},

	middleware: [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
		logger,
		sagaMiddleware,
	],
});

export const persistor = persistStore(store);
