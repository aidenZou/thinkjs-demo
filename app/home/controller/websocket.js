'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

"./base.js");var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_think$controller$base) {_inherits(_default, _think$controller$base);function _default() {_classCallCheck(this, _default);_think$controller$base.apply(this, arguments);}



  /**
   * WebSocket 建立连接时处理
   * @param  {} self []
   * @return {}      []
   */_default.prototype.
  openAction = function openAction(self) {
    console.log('open.......');
    var socket = self.http.socket;
    this.broadcast("new_user", { 
      username: socket.username, 
      message: self.http.data }, 
    true);

    //Action 里可以通过 this.emit 方法给当前 socket 发送事件
    this.emit("message", "欢迎进入");

    //Action 里可以通过 this.broadcast 方法给所有的 socket 广播事件
    //广播给除当前 socket 之外的所有 sockets
    // this.broadcast("message", {msg: "message", username: "xxx"});

    //广播给所有的 sockets，包含当前的 socket
    this.broadcast("message", { msg: "message", username: "xxx" }, true);};_default.prototype.


  closeAction = function closeAction(self) {
    console.log('close.......');

    this.broadcast("logout", { msg: "message", username: "xxx" }, true);};_default.prototype.


  chatAction = function chatAction(self) {
    var socket = self.http.socket;
    //广播给所有的 sockets，包含当前的 socket
    this.broadcast("new message", { msg: "message", username: "xxx" }, true);};return _default;})(think.controller.base);exports['default'] = _default;module.exports = exports['default'];