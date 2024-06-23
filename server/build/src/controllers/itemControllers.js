"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemControllers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
//xem tat ca san pham
var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {} catch (error) {
            next(error);
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAll(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
//them san pham moi
var createItem = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          try {
            // Có kết quả thì trả về phía client
            res.status(_httpStatusCodes.StatusCodes.CREATED).json(createdBoard);
          } catch (error) {
            next(error);
          }
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createItem(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

//them vao gio hang
var addToCart = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          try {
            // Có kết quả thì trả về phía client
            res.status(_httpStatusCodes.StatusCodes.CREATED).json(createdBoard);
          } catch (error) {
            next(error);
          }
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function addToCart(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

//xem gio hang
var getCart = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getCart(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
//xem chi tiet san pham
var getDetail = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          try {} catch (error) {
            next(error);
          }
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getDetail(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

//cap nhat info san pham
var updateItem = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          try {} catch (error) {
            next(error);
          }
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateItem(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

//xoa san pham
var deleteItem = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          try {} catch (error) {
            next(error);
          }
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteItem(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
var itemControllers = exports.itemControllers = {
  createItem: createItem,
  getDetail: getDetail,
  updateItem: updateItem,
  deleteItem: deleteItem,
  getAll: getAll,
  addToCart: addToCart,
  getCart: getCart
};