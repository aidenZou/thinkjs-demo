'use strict';
/**
 * template config
 */
export default {
  // type: 'ejs',
  type: 'nunjucks',
  content_type: 'text/html',
  // file_ext: '.html',
  file_ext: '.html',
  file_depr: '_',   //控制器和操作之间的连接符
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    // ejs: {}
    nunjucks: {} //使用 nunjucks 模板引擎时额外配置
  }
};
