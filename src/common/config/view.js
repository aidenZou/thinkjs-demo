'use strict';
/**
 * template config
 */
export default {
  type: 'ejs',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',   //控制器和操作之间的连接符
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    ejs: {}
  }
};
