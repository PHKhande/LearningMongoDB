const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product{
  constructor(title, price, description, imageUrl, id, userId){
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
  }

  async save(){

    try{

      const db = getDb();
      let dbOp;

      if(this._id){
        dbOp = await db.collection('products').updateOne({ _id: this._id }, { $set: this });

      } else {
        dbOp = await db.collection('products').insertOne(this);

      }
      return dbOp;

    } catch(err) {
      console.log(err);

    }
    
  }

  static async fetchAll() {

    try{
      
      const db = getDb();
      return await db.collection('products').find().toArray(); 

    } catch(err) {

      console.log(err);
    
    }
  }

  static async findById(prodId){
    
    try{

      const db = getDb();
      return await db.collection('products').findOne({ _id: new mongodb.ObjectId(prodId)});

    } catch(err) {

      console.log(err);

    }
  }

  static async deleteById(prodId){

    try{
      const db = getDb(); 
      return await db.collection('products').deleteOne( { _id: new mongodb.ObjectId(prodId)} )

    } catch(err) {

      console.log(err);

    }
    
  }

}

module.exports = Product;