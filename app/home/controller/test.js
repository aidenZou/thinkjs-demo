"use strict";var _inherits = require("babel-runtime/helpers/inherits")["default"];var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];exports.__esModule = true;var _baseJs = require(

"./base.js");var _baseJs2 = _interopRequireDefault(_baseJs);var _log4js = require(
"log4js");var _log4js2 = _interopRequireDefault(_log4js);
var logger = _log4js2["default"].getLogger();var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}_default.prototype.


  indexAction = function indexAction() {

    logger.trace('Entering cheese testing');
    logger.debug('Got cheese.');
    logger.info('Cheese is Gouda.');
    logger.warn('Cheese is quite smelly.');
    logger.error('Cheese is too ripe!');
    logger.fatal('Cheese was breeding ground for listeria.');

    var http = this.http;
    return this.display();};return _default;})(_baseJs2["default"]);exports["default"] = _default;module.exports = exports["default"];