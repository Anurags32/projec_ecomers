const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user:'rootnode',
    database: 'node-complete',
    password: 'rootnode'
});
module.exports = pool.promise();