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
    db.profiles.insert({
      //userReview: req.body.review,
      userName: req.body.name,
      userClass: req.body.class,
      userMajor: req.body.major,
      userLoc: req.body.location,
      userBio: req.body.bio,
      userMatch: req.body.match,
      userLikes: 0
    } function(err,docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    })
});

router.post('/sortProfile', (req, res, next) => {
  db.profiles.find().sort({req.body}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      var matchedArray = [];
      for(var x = 0; x < docs.length; x++){
        for(var y = 0; y < docs[x].class.length; y++){
          if(docs[y].class == req.body.class){
            matchedArray.push(docs[x]);
          }
        }
      }
      console.log(matchedArray);
    }
  })
  /*var keys = _.keys(req.body);
  profiles.find(req.body).select(keys.join(' ')).lean().exec(function(err, user {
  if (err)
    throw err;
  res.send(user);*/
});

router.post('/userLikes', (req, res, next) => {
  db.profiles.update({_id: req.body._id}, {$inc: {userLikes: 1}}, {multi: true}, function () {
  // the update is complete 
})
});

// router.post('/findId', (req, res, next) => {
//   profiles.find({_id:""})
// })








module.exports = router;
