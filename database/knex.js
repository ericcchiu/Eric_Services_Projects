const knex = require('knex')({
  client: 'pg',
  version: '7.7.1',
  connection: {
    host : '127.0.0.1',
    user : 'ericcchiu',
    password : 'student',
    database : 'projects'
  }
});