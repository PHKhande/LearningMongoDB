const getDb = require('../util/database').getDb;

class Product{
  constructor(title, price, description, imageUrl){
    this.title = title,
    this.price = price,
    this.description = description,
    this.imageUrl = imageUrl
  }

  async save(){

    try{

      const db = getDb();
      const result = await db.collection('products').insertOne(this);
      console.log(result);
      return result;

    } catch(err) {

      console.log(err);

    }
    
  }

}

module.exports = Product;