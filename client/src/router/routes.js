//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Главная',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/sign-up',
		label: 'Регистрация',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/SignUpPage' /* webpackChunkName: "sign-up-page"*/)),
	},
	{
		path: '/sign-in',
		label: 'Вход',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/SignInPage' /* webpackChunkName: "sign-in-page"*/)),
	},
];

export default routes;
