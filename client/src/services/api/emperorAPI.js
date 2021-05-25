//Packages
import axios from 'axios';

const getAllEmperors = async () => {
	try {
		const response = await axios.get('/api/emperors/');

		return response.data;
	} catch (error) {
		throw error;
	}
};

const getEmperorById = async ({ emperorId }) => {
	try {
		const response = await axios.get(`/api/emperors/${emperorId}`);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export { getAllEmperors, getEmperorById };
