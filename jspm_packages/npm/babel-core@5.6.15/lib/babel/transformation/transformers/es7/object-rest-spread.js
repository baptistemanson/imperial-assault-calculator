/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

// https://github.com/sebmarkbage/ecmascript-rest-spread

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var metadata = {
  stage: 1,
  dependencies: ["es6.destructuring"]
};

exports.metadata = metadata;
var hasSpread = function hasSpread(node) {
  for (var i = 0; i < node.properties.length; i++) {
    if (t.isSpreadProperty(node.properties[i])) {
      return true;
    }
  }
  return false;
};

var visitor = {
  ObjectExpression: function ObjectExpression(node, parent, scope, file) {
    if (!hasSpread(node)) return;

    var args = [];
    var props = [];

    var push = function push() {
      if (!props.length) return;
      args.push(t.objectExpression(props));
      props = [];
    };

    for (var i = 0; i < node.properties.length; i++) {
      var prop = node.properties[i];
      if (t.isSpreadProperty(prop)) {
        push();
        args.push(prop.argument);
      } else {
        props.push(prop);
      }
    }

    push();

    if (!t.isObjectExpression(args[0])) {
      args.unshift(t.objectExpression([]));
    }

    return t.callExpression(file.addHelper("extends"), args);
  }
};
exports.visitor = visitor;