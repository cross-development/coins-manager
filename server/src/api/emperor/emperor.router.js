//Core Express
const { Router } = require('express');
//Controllers
const { getAllEmperors, getEmperor } = require('./emperor.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const { emperorIdSchema } = require('../../helpers/validationSchemas');

const emperorRouter = Router();

// @ GET /api/emperors/
emperorRouter.get('/', tryCatchHandler(getAllEmperors));

// @ GET /api/emperors/:emperorId
emperorRouter.get('/:emperorId', validate(emperorIdSchema, 'params'), tryCatchHandler(getEmperor));

module.exports = emperorRouter;
