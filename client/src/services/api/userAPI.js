//Packages
import axios from 'axios';
//Services
import { accessToken } from 'services/authService';

const getCurrentUser = async ({ token }) => {
	try {
		accessToken.set(token);

		const response = await axios.get('/api/users/current');

		return response.data;
	} catch (error) {
		throw error;
	}
};

export { getCurrentUser };
