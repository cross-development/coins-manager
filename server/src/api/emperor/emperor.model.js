//Core Mongoose
const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');

const emperorSchema = new Schema({});

module.exports = model('Emperor', emperorSchema);
