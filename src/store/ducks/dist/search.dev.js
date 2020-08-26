"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;
exports.Creators = exports.Types = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Types = {
  FILTER_CARD: 'search/FILTER_CARDS',
  SELECTED_TAGS: 'search/SELECTED_TAGS',
  SEARCH_VALUE: 'search/SEARCH_VALUE'
};
exports.Types = Types;
var INITIAL_STATE = {
  filtered: [],
  selectedTags: [],
  searchValue: ' '
};

function search() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Types.FILTER_CARD:
      console.log(1);
      return _objectSpread({}, state, {
        filtered: action.filtered
      });

    case Types.SELECTED_TAGS:
      return _objectSpread({}, state, {
        selectedTags: action.tags
      });

    case Types.SEARCH_VALUE:
      return _objectSpread({}, state, {
        searchValue: action.payload
      });

    default:
      return state;
  }
} // cards.filter(function (card) {
//   let count = 0;
//   let value = card.title;
//   for (let t of tags) {
//     for (let c of card.tags) {
//       if (c.name === t.name) {
//         count++;
//       }
//     }
//   }
//   if (count === tags.length) {
//     console.log('value', value);
//     if (value.indexOf(query) > -1) {
//       console.log('value2', value);
//       return card;
//     }
//   }
//   return [];
// })


function filterCard(query, card, tags) {
  var count = 0;
  var value = card.title;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var t = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = card.tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var c = _step2.value;

          if (c.name === t.name) {
            count++;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (count === tags.length) {
    console.log('value', value);

    if (value.indexOf(query) > -1) {
      console.log('value2', value);
      return card;
    }
  }
}

var Creators = {
  filter: function filter(query, cards, tags) {
    return {
      type: Types.FILTER_CARD,
      filtered: cards
    };
  },
  setTags: function setTags(tags) {
    return {
      type: Types.SELECTED_TAGS,
      tags: tags
    };
  },
  setQuery: function setQuery(querys) {
    return {
      type: Types.SEARCH_VALUE,
      payload: querys
    };
  }
};
exports.Creators = Creators;