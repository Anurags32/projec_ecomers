// const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'rootnode', 'rootnode', {
  dialect: 'mysql',
  host: 'localhost'
});
module.exports = sequelize;
// const pool = mysql.createPool({
//   host: 'localhost',
//   user:'rootnode',
//     database: 'node-complete',
//     password: 'rootnode'
// });
// module.exports = pool.promise();