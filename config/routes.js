var express = require('express');
var router = express.Router();

module.exports = function (UsersController) {

	router.get('/', UsersController.index);

	return router;
};
