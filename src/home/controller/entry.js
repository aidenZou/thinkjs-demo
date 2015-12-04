"use strict";

import Base from "./base.js";
// import jade from "jade";

export default class extends Base {
  indexAction() {
    this.assign({
      title: "ThinkJS 官网",
      author: "thinkjs"
    });

    return this.display();
  }
}
