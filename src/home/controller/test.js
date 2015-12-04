"use strict";

import Base from "./base.js";
import log4js from "log4js";
var logger = log4js.getLogger();

export default class extends Base {
  indexAction(){

    logger.trace('Entering cheese testing');
    logger.debug('Got cheese.');
    logger.info('Cheese is Gouda.');
    logger.warn('Cheese is quite smelly.');
    logger.error('Cheese is too ripe!');
    logger.fatal('Cheese was breeding ground for listeria.');

    let http = this.http;
    return this.display();
  }
}
