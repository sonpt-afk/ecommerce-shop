"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandlingMiddleware = void 0;
var _httpStatusCodes = require("http-status-codes");
var _environment = require("../config/environment.js");
/* eslint-disable no-unused-vars */

var errorHandlingMiddleware = exports.errorHandlingMiddleware = function errorHandlingMiddleware(err, req, res, next) {
  if (!err.statusCode) err.statusCode = _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR;
  var responseError = {
    statusCode: err.statusCode,
    message: err.message || _httpStatusCodes.StatusCodes[err.statusCode],
    stack: err.stack
  };
  if (_environment.env.BUILD_MODE !== 'dev') delete responseError.stack;
  res.status(responseError.statusCode).json(responseError);
};