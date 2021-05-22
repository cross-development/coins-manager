//Core Mongoose
const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');

const coinSchema = new Schema({});

module.exports = model('Coin', coinSchema);
