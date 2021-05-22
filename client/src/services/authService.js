//Core
import axios from 'axios';

//Axios defaults config
axios.defaults.baseURL = `http://localhost:8080`;

export const accessToken = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};
