var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
module.exports = {
  findDb: function(findKey) {
    return MongoClient.connect(url).then(function(db) {
      var dbo = db.db('userDb');
      var query = { address: findKey };
      
      var collection = dbo.collection('customers');
      
      return collection.find(query).toArray();
    }).then(function(items) {
      return items;
    }).catch( function (err) {throw err; });
  }
};

