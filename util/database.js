const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = async(cb) => {

  try{

    const client = await MongoClient.connect('mongodb+srv://prathvirajkhande:prathviraj15@clustersharp.wegl4oc.mongodb.net/shop?retryWrites=true&w=majority');
    console.log('Connected');
    _db = client.db();
    cb();

  } catch(err) {
    console.log(err)
    throw err;
  }

};

const getDb = () => {
  
  if (_db){
    return _db;
  }

  throw 'No database found!';

}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
