var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var portDecision = process.env.PORT || 8888;

//spin up server
app.listen(portDecision, function (){
  console.log('server up on', portDecision);
});//end server up

//base url
app.get( '/', function(req, res){
  console.log('base url hit');
  res.sendFile( path.resolve('public/index.html'));
}); //end base url

//static
app.use(express.static('public'));
