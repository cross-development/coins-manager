//Core Express and MongoDB
const express = require('express');
const mongoose = require('mongoose');
//Middleware
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
//Router
const authRouter = require('../api/auth/auth.router');
const userRouter = require('../api/user/user.router');

async function start() {
	const app = initServer();

	initMiddleware(app);
	initRouter(app);
	await initDatabase();
	initErrorHandling(app);
	startListening(app);
}

function initServer() {
	return express();
}

function initMiddleware(app) {
	app.use(helmet());
	app.use(express.json());
	app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
}

function initRouter(app) {
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
}

async function initDatabase() {
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});

		console.log('Database connection successful');
	} catch (error) {
		process.exit(1);
	}
}

function initErrorHandling(app) {
	app.use((err, req, res, next) => {
		let status = 500;

		if (err.response) {
			status = err.response.status;
		}

		return res.status(status).send(err.message);
	});
}

function startListening(app) {
	const PORT = process.env.PORT || 8080;

	app.listen(PORT, () => console.log('Server started listening on port', PORT));
}

module.exports = { start };
