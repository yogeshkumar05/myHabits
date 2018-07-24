var express = require('express');
var about = require('./about');
var query = require('./findUser');
var app = express();
var router = express.Router();

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.use("/user/:id",function(req,res,next){
  console.log(req.params.id)
  if(req.params.id == 0) {
    res.json({"message" : "You must pass ID other than 0"});
  }
  else next();
});

router.get("/about",function(req,res){
  res.json(about.about());
});

router.get("/find/:place", (req, res)=> query.findDb(req.params.place).then(function(items) {
    console.info('result!', items);
    res.setHeader('Last-Modified', (new Date()).toUTCString()); // to avoid 304 not modified error
    res.json (items);
  }, function(err) {
    console.error('error', err, err.stack);
  }));


router.get("/user/:id",function(req,res){
  res.json({"message" : "Hello "+req.params.id});
});

app.use("/",router);


app.listen(8000,function(){
  console.log("Server started at Port 8000");
});