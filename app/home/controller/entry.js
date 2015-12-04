"use strict";var _inherits = require("babel-runtime/helpers/inherits")["default"];var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];exports.__esModule = true;var _baseJs = require(

"./base.js");var _baseJs2 = _interopRequireDefault(_baseJs);
// import jade from "jade";
var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}_default.prototype.

  indexAction = function indexAction() {
    this.assign({ 
      title: "ThinkJS 官网", 
      author: "thinkjs" });


    return this.display();};return _default;})(_baseJs2["default"]);exports["default"] = _default;module.exports = exports["default"];