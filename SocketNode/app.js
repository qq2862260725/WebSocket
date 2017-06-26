var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.setHeader( 'Access-Control-Allow-Origin','*');
  res.json({
  	name: 'lijiatai'
  });
  res.end('')
});

app.listen(3000);
console.log('Example app l, port');