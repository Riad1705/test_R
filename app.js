var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello nassim");
});

app.listen(4000);
