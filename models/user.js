const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User{

  constructor(username, email){
    this.username = username,
    this.email = email
  }

  save(){

    try{

      const db = getDb();
      return db.connection('users').insertOne(this);

    } catch(err) {
      console.log(err);

    }

  }

  static findById(userId){

    try{

      const db = getDb();
      return db.connection('users').findOne( {_id: new ObjectId(userId) } );

    } catch(err) {
      console.log(err);

    }

  }

}

module.exports = User;
