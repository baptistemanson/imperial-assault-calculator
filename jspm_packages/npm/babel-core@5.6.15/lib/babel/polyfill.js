/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

require("core-js/shim");

require('babel-runtime/regenerator/runtime');

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (global._babelPolyfill) {
  throw new Error("only one instance of babel/polyfill is allowed");
}
global._babelPolyfill = true;