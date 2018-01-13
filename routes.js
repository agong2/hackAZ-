var express = require('express');
var router = express.Router();
const mongojs = require('mongojs');
var db = mongojs('mongodb://WilXing:studyup@ds147711.mlab.com:47711/studyupprofiles', ['profiles']);


router.get('/getProfile', (req,res,next) =>{

});


router.post('/uploadProfile', (req,res,next) =>{

});
