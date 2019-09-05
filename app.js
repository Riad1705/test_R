var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello nassim chekkam");
});

app.listen(4000);
