"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongodb = exports.GET_DB = exports.CONNECT_DB = exports.CLOSE_DB = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongodb = require("mongodb");
var _environment = require("./environment");
var storeDatabaseInstance = null;
var mongoClientInstance = new _mongodb.MongoClient(_environment.env.MONGODB_URI, {
  serverApi: {
    version: _mongodb.ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
var CONNECT_DB = exports.CONNECT_DB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return mongoClientInstance.connect();
        case 2:
          storeDatabaseInstance = mongoClientInstance.db(_environment.env.DATABASE_NAME);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function CONNECT_DB() {
    return _ref.apply(this, arguments);
  };
}();
var CLOSE_DB = exports.CLOSE_DB = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return mongoClientInstance.close();
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function CLOSE_DB() {
    return _ref2.apply(this, arguments);
  };
}();
var GET_DB = exports.GET_DB = function GET_DB() {
  if (!storeDatabaseInstance) throw new Error('Must connect to Database first!');
  return storeDatabaseInstance;
};
var mongodb = exports.mongodb = {
  CONNECT_DB: CONNECT_DB,
  CLOSE_DB: CLOSE_DB,
  GET_DB: GET_DB
};