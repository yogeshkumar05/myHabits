var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("userDb");
  var myobj = [
    { name: 'Yogesh', address: 'Hassan'},
    { name: 'Kabeer', address: 'CR Patna'},
    { name: 'Nandan', address: 'Chennai'},
    { name: 'Gajendra', address: 'Bangalore'},
    { name: 'Yuva', address: 'Erode'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});