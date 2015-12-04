'use strict';
/**
 * rest controller
 * @type {Class}
 */var _inherits = require("babel-runtime/helpers/inherits")["default"];var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];exports.__esModule = true;var _default = (function (_think$controller$rest) {_inherits(_default, _think$controller$rest);function _default() {_classCallCheck(this, _default);_think$controller$rest.apply(this, arguments);}_default.prototype.

  init = function init(http) {
    _think$controller$rest.prototype.init.call(this, http);

    console.log(this.resource);
    console.log(this.id);

    //设置 _method，表示从 GET 参数获取 _method 字段的值
    //如果没有取到，则从 http method 中获取
    this._method = "_method";

    // console.log(this._method)
    // console.log(this.get("_method"))
    // console.log(http.method)
    // console.log(9999999999999)
  };_default.prototype.

  __before = function __before() {
    //过滤 password 字段
    this.modelInstance.field("password", true);};


  //获取资源数据，如果有 id，拉取一条，否则拉取列表。
  _default.prototype.getAction = _regeneratorRuntime.mark(function getAction() {var 
    data, _modelInstance$where, 

    model, 

    result, 





    pk;return _regeneratorRuntime.wrap(function getAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:data = undefined;if (!this.id) {context$2$0.next = 17;break;}model = this.model("user");context$2$0.next = 5;return model.thenAdd({ id: 1, name: "xxx", pwd: "yyy" }, { id: 1 });case 5:result = context$2$0.sent;console.log(result);console.log(this.id);context$2$0.next = 10;return this.modelInstance.getPk();case 10:pk = context$2$0.sent;

          console.log(pk);context$2$0.next = 14;return (
            this.modelInstance.where((_modelInstance$where = {}, _modelInstance$where[pk] = this.id, _modelInstance$where)).find());case 14:data = context$2$0.sent;
          console.log(data);return context$2$0.abrupt("return", 
          this.success(data));case 17:context$2$0.next = 19;return (

            this.modelInstance.select());case 19:data = context$2$0.sent;return context$2$0.abrupt("return", 
          this.success(data));case 21:case "end":return context$2$0.stop();}}, getAction, this);});


  //添加数据
  _default.prototype.postAction = _regeneratorRuntime.mark(function postAction() {var 
    pk, 
    data, 




    insertId;return _regeneratorRuntime.wrap(function postAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return this.modelInstance.getPk();case 2:pk = context$2$0.sent;data = this.post();delete data[pk];if (!think.isEmpty(data)) {context$2$0.next = 7;break;}return context$2$0.abrupt("return", this.fail("data is empty"));case 7:context$2$0.next = 9;return this.modelInstance.add(data);case 9:insertId = context$2$0.sent;return context$2$0.abrupt("return", 
          this.success({ id: insertId }));case 11:case "end":return context$2$0.stop();}}, postAction, this);});


  //删除数据
  _default.prototype.deleteAction = _regeneratorRuntime.mark(function deleteAction() {var _modelInstance$where2;var 



    pk, 
    rows;return _regeneratorRuntime.wrap(function deleteAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (this.id) {context$2$0.next = 2;break;}return context$2$0.abrupt("return", this.fail("params error"));case 2:context$2$0.next = 4;return this.modelInstance.getPk();case 4:pk = context$2$0.sent;context$2$0.next = 7;return this.modelInstance.where((_modelInstance$where2 = {}, _modelInstance$where2[pk] = this.id, _modelInstance$where2))["delete"]();case 7:rows = context$2$0.sent;return context$2$0.abrupt("return", 
          this.success({ affectedRows: rows }));case 9:case "end":return context$2$0.stop();}}, deleteAction, this);});


  //更新数据
  _default.prototype.putAction = _regeneratorRuntime.mark(function putAction() {var _modelInstance$where3;var 



    pk, 
    data, 




    rows;return _regeneratorRuntime.wrap(function putAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:if (this.id) {context$2$0.next = 2;break;}return context$2$0.abrupt("return", this.fail("params error"));case 2:context$2$0.next = 4;return this.modelInstance.getPk();case 4:pk = context$2$0.sent;data = this.post();delete data[pk];if (!think.isEmpty(data)) {context$2$0.next = 9;break;}return context$2$0.abrupt("return", this.fail("data is empty"));case 9:context$2$0.next = 11;return this.modelInstance.where((_modelInstance$where3 = {}, _modelInstance$where3[pk] = this.id, _modelInstance$where3)).update(data);case 11:rows = context$2$0.sent;return context$2$0.abrupt("return", 
          this.success({ affectedRows: rows }));case 13:case "end":return context$2$0.stop();}}, putAction, this);});


  //找不到方法时调用
  _default.prototype.__call = function __call() {
    return this.fail(think.locale("ACTION_INVALID", this.http.action, this.http.url));};return _default;})(think.controller.rest);exports["default"] = _default;module.exports = exports["default"]; // let insertId = yield model.add({id: 1, name: "xxx", pwd: "yyy"});