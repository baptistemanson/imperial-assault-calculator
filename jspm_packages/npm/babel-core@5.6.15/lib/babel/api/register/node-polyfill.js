/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

require("../../polyfill");

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _node = require("./node");

exports["default"] = _interopRequire(_node);
module.exports = exports["default"];