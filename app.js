var express = require ('express');
var server = express;
var port = process.env.PORT || 8000;
app = express();
app.use(express.static(__dirname + '/public'));
