//Core Mongoose
const {
	Types: { ObjectId },
} = require('mongoose');
//Packages
const Joi = require('joi');
//Configs
const configs = require('./configs');

/**
 * =============== Authentication schemas =====================================
 */
const { userPassMin, userPassMax, usernameMin, usernameMax } = configs.users;

const signUpSchema = Joi.object({
	username: Joi.string().min(usernameMin).max(usernameMax).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(userPassMin).max(userPassMax).required(),
});

const signInSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(userPassMin).max(userPassMax).required(),
});

/**
 * =============== Coin schemas =====================================
 */
const coinIdSchema = Joi.object({
	coinId: Joi.string()
		.custom((value, helpers) =>
			!ObjectId.isValid(value) ? helpers.message({ message: 'Invalid coinId' }) : value,
		)
		.required(),
});

const addCoinSchema = Joi.object({});

const removeCoinSchema = Joi.object({});

const updateCoinSchema = Joi.object({});

/**
 * =============== Emperor schemas =====================================
 */
const emperorIdSchema = Joi.object({
	emperorId: Joi.string()
		.custom((value, helpers) =>
			!ObjectId.isValid(value) ? helpers.message({ message: 'Invalid emperorId' }) : value,
		)
		.required(),
});

module.exports = {
	signUpSchema,
	signInSchema,

	coinIdSchema,
	addCoinSchema,
	removeCoinSchema,
	updateCoinSchema,

	emperorIdSchema,
};
