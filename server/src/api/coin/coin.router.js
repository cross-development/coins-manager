//Core Express
const { Router } = require('express');
//Controllers
const coinController = require('./coin.controller');
const authController = require('../auth/auth.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { validateToken } = authController;
const { getAllCoins, getCoin, addCoin, removeCoin, updateCoin } = coinController;
const { coinIdSchema, addCoinSchema, removeCoinSchema, updateCoinSchema } = validationSchemas;

const coinRouter = Router();

// @ GET /api/coins/
coinRouter.get('/', tryCatchHandler(getAllCoins));

// @ GET /api/coins/:coinId
coinRouter.get('/:coinId', validate(coinIdSchema, 'params'), tryCatchHandler(getCoin));

// @ POST /api/coins/add
coinRouter.post(
	'/add',
	tryCatchHandler(validateToken),
	validate(addCoinSchema),
	tryCatchHandler(addCoin),
);

// @ DELETE /api/coins/remove/:coinId
coinRouter.delete(
	'/remove/:coinId',
	tryCatchHandler(validateToken),
	validate(coinIdSchema, 'params'),
	validate(removeCoinSchema),
	tryCatchHandler(removeCoin),
);

// @ PATCH /api/coins/update/:coinId
coinRouter.patch(
	'/update/:coinId',
	tryCatchHandler(validateToken),
	validate(coinIdSchema, 'params'),
	validate(updateCoinSchema),
	tryCatchHandler(updateCoin),
);

module.exports = coinRouter;
