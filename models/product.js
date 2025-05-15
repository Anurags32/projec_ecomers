const db = require('../util/database');
// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title,price,description,imgUrl) VALUES (?,?,?,?)',[this.title,this.price,this.description,this.imageUrl]);}
    // this.id = Math.random().toString();
    // getProductsFromFile(products => {
    //   products.push(this);
    //   fs.writeFile(p, JSON.stringify(products), err => {
    //     console.log(err);
    //   });
    // });
  

  static fetchAll(cb) {
   return db.execute('SELCT * FROM products');
    // getProductsFromFile(cb);
  }
  static findById(id, cb) {
   return db.execute('SELECT * FROM products WHERE id = ?',[id]);
  }
    
};
