var express = require ('express');
var port = process.env.PORT || 8000;
var app = express();
app.use(express.static(__dirname));

app.listen(port, function() {
  console.log('Server listening on port ' + (port || 8000));
});
