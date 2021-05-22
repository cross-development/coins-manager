//Packages
import axios from 'axios';
//Services
import { accessToken } from 'services/authService';

const userSignUp = async ({ username, email, password }) => {
	try {
		await axios.post('/api/auth/sign-up', { username, email, password });
	} catch (error) {
		throw error;
	}
};

const userSignIn = async ({ email, password }) => {
	try {
		const response = await axios.post('/api/auth/sign-in', { email, password });

		accessToken.set(response.data.token);

		return response.data;
	} catch (error) {
		throw error;
	}
};

const userSighOut = async () => {
	try {
		await axios.delete('/api/auth/sign-out');

		accessToken.unset();
	} catch (error) {
		throw error;
	}
};

export { userSignUp, userSignIn, userSighOut };
