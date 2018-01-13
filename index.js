const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


//app.use('/api', router);

app.listen(3001, function(){
    console.log('listening on 3001');
})
