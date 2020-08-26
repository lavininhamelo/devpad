"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tags;
exports.Creators = exports.Types = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Types = {
  ADD: 'tags/ADD',
  DELETE: 'tags/DELETE'
};
exports.Types = Types;
var INITIAL_STATE = {
  tags: [{
    id: 1,
    name: 'CSS',
    color: 'blue'
  }, {
    id: 2,
    name: 'HTML',
    color: 'orange'
  }, {
    id: 3,
    name: 'JAVASCRIPT',
    color: 'yellow'
  }, {
    id: 4,
    name: 'VUE',
    color: 'limegreen'
  }, {
    id: 5,
    name: 'REACT',
    color: 'cyan'
  }]
};

function tags() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Types.ADD:
      var _action$payload = action.payload,
          name = _action$payload.name,
          id = _action$payload.id,
          color = _action$payload.color;

      var oldValues = _objectSpread({}, state);

      oldValues.tags.push({
        id: id,
        name: name,
        color: color
      });
      return oldValues;

    case Types.DELETE:
      return state;

    default:
      return state;
  }
}

var Creators = {
  add: function add(_ref) {
    var id = _ref.id,
        name = _ref.name,
        color = _ref.color;
    return {
      type: Types.ADD,
      payload: {
        id: id,
        name: name,
        color: color
      }
    };
  },
  remove: function remove(id) {
    return {
      type: Types.DELETE,
      id: id
    };
  }
};
exports.Creators = Creators;