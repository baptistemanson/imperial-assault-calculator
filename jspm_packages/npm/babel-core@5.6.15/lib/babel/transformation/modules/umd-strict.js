/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

var _umd = require("./umd");

var _umd2 = _interopRequireDefault(_umd);

var _strict = require("./_strict");

var _strict2 = _interopRequireDefault(_strict);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _strict2["default"](_umd2["default"]);
module.exports = exports["default"];