//Packages
import axios from 'axios';

const getAllCoins = async () => {
	try {
		const response = await axios.get('/api/coins/');

		return response.data;
	} catch (error) {
		throw error;
	}
};

const getCoinById = async ({ coinId }) => {
	try {
		const response = await axios.get(`/api/coins/${coinId}`);

		return response.data;
	} catch (error) {
		throw error;
	}
};

const addCoin = async ({ coin }) => {
	try {
		const response = await axios.post('/api/coins/add', { coin });

		return response.data;
	} catch (error) {
		throw error;
	}
};

const removeCoin = async ({ coinId }) => {
	try {
		const response = await axios.delete(`/api/coins/remove/${coinId}`);

		return response.data;
	} catch (error) {
		throw error;
	}
};

const updateCoin = async ({ coinId }) => {
	try {
		const response = await axios.delete(`/api/coins/update/${coinId}`);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export { getAllCoins, getCoinById, addCoin, removeCoin, updateCoin };
