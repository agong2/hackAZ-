var express = require('express');
var router = express.Router();
const mongojs = require('mongojs');
console.log('FUCK');
var db = mongojs('mongodb://wilson:studyup@ds147711.mlab.com:47711/studyupprofiles', ["profiles"]);


router.get('/current', (req, res, next) => {
  db.profiles.find(function(err,docs){
    if(err){
      res.json({err: err});
    }
    else{
      console.log(docs);
      res.json({docs: docs})
    }
  })
});


router.post('/uploadProfile', (req,res,next) =>{
    db.profiles.find(function(err,docs){

    })
});

module.exports = router;
