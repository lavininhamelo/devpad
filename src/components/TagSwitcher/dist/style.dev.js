"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagSwitcher = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _GlobalStyles = require("../../styles/GlobalStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  height: auto;\n\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);\n  border-radius: 20px;\n  padding: 10px;\n  div.inputExternal {\n    display: flex;\n  }\n  div.inputContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    height: 40px;\n    border-radius: 20px;\n    width: 80%;\n    padding: 0px 10px;\n    outline: 0;\n    margin-right: 5px;\n    border: 0.5px solid #cccccc;\n  }\n\n  div.iconContainer {\n    display: flex;\n    width: 40px;\n    height: 40px;\n    border-radius: 28px;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    background-color: ", ";\n    color: white;\n    border: 3px solid;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  div.iconContainer:hover {\n    cursor: pointer;\n  }\n\n  div.inputContainer input {\n    width: 88%;\n    height: 80%;\n    border: 0;\n  }\n  div.tagContainer {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    margin-top: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagSwitcher = _styledComponents["default"].div(_templateObject(), _GlobalStyles.PRIMARY_COLOR);

exports.TagSwitcher = TagSwitcher;