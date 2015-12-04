'use strict';

import Base from "./base.js";

export default class extends think.controller.base {

  /**
   * WebSocket 建立连接时处理
   * @param  {} self []
   * @return {}      []
   */
  openAction(self){
    console.log('open.......')
    var socket = self.http.socket;
    this.broadcast("new_user", {
      username: socket.username,
      message: self.http.data
    }, true);

    //Action 里可以通过 this.emit 方法给当前 socket 发送事件
    this.emit("message", "欢迎进入");

    //Action 里可以通过 this.broadcast 方法给所有的 socket 广播事件
    //广播给除当前 socket 之外的所有 sockets
    // this.broadcast("message", {msg: "message", username: "xxx"});

    //广播给所有的 sockets，包含当前的 socket
    this.broadcast("message", {msg: "message", username: "xxx"}, true);
  }

  closeAction(self){
    console.log('close.......')

    this.broadcast("logout", {msg: "message", username: "xxx"}, true);
  }

  chatAction(self){
    var socket = self.http.socket;
    //广播给所有的 sockets，包含当前的 socket
    this.broadcast("new message", {msg: "message", username: "xxx"}, true);
  }

}
