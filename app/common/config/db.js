'use strict';
/**
 * db config
 * @type {Object}
 */exports.__esModule = true;exports['default'] = 
{ 
  // type: 'mysql',
  type: 'mongo', 
  // host: '127.0.0.1',
  host: '192.168.1.100', 
  port: '', 
  name: 'test', 
  user: '', 
  pwd: '', 
  prefix: 'think_', 
  encoding: 'utf8', 
  nums_per_page: 10, 
  log_sql: true, 
  log_connect: true, 
  cache: { 
    on: true, 
    type: '', 
    timeout: 3600 }, 

  adapter: { 
    mysql: {}, 
    mongo: {} } };module.exports = exports['default'];