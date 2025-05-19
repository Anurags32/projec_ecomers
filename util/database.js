// const mysql = require('mysql2');
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'rootnode', 'rootnode', {
//   dialect: 'mysql',
//   host: 'localhost'
// });
// module.exports = sequelize;
// const pool = mysql.createPool({
//   host: 'localhost',
//   user:'rootnode',
//     database: 'node-complete',
//     password: 'rootnode'
// });
// module.exports = pool.promise();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const MongoCpnnect = (callback) => {
  MongoClient.connect('mongodb+srv://anuragtiwaris1172000:@nodejs.sy8eb9i.mongodb.net/')
}