'use strict';
/**
 * rest controller
 * @type {Class}
 */
export default class extends think.controller.rest {
  init(http){
    super.init(http);

    console.log(this.resource)
    console.log(this.id)

    //设置 _method，表示从 GET 参数获取 _method 字段的值
    //如果没有取到，则从 http method 中获取
    this._method = "_method";

    // console.log(this._method)
    // console.log(this.get("_method"))
    // console.log(http.method)
    // console.log(9999999999999)
  }

  __before(){
    //过滤 password 字段
    this.modelInstance.field("password", true);
  }

  //获取资源数据，如果有 id，拉取一条，否则拉取列表。
  * getAction(){
    let data;
    if (this.id) {
      let model = this.model("user");
      // let insertId = yield model.add({id: 1, name: "xxx", pwd: "yyy"});
      let result = yield model.thenAdd({id: 1, name: "xxx", pwd: "yyy"}, {id: 1});
      console.log(result)


      console.log(this.id)

      let pk = yield this.modelInstance.getPk();

      console.log(pk)
      data = yield this.modelInstance.where({[pk]: this.id}).find();
      console.log(data)
      return this.success(data);
    }
    data = yield this.modelInstance.select();
    return this.success(data);
  }

  //添加数据
  * postAction(){
    let pk = yield this.modelInstance.getPk();
    let data = this.post();
    delete data[pk];
    if(think.isEmpty(data)){
      return this.fail("data is empty");
    }
    let insertId = yield this.modelInstance.add(data);
    return this.success({id: insertId});
  }

  //删除数据
  * deleteAction(){
    if (!this.id) {
      return this.fail("params error");
    }
    let pk = yield this.modelInstance.getPk();
    let rows = yield this.modelInstance.where({[pk]: this.id}).delete();
    return this.success({affectedRows: rows});
  }

  //更新数据
  * putAction(){
    if (!this.id) {
      return this.fail("params error");
    }
    let pk = yield this.modelInstance.getPk();
    let data = this.post();
    delete data[pk];
    if (think.isEmpty(data)) {
      return this.fail("data is empty");
    }
    let rows = yield this.modelInstance.where({[pk]: this.id}).update(data);
    return this.success({affectedRows: rows});
  }

  //找不到方法时调用
  __call(){
    return this.fail(think.locale("ACTION_INVALID", this.http.action, this.http.url));
  }

}
