"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _cards = _interopRequireDefault(require("./cards"));

var _tags = _interopRequireDefault(require("./tags"));

var _search = _interopRequireDefault(require("./search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  cardsReducer: _cards["default"],
  tagsReducer: _tags["default"],
  searchReducer: _search["default"]
});

exports["default"] = _default;