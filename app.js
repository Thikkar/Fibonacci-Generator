const http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');

//const PORT = process.env.PORT || 5000;

const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
app.listen(PORT, LOCAL_ADDRESS, () => {
  console.log('Connected on port: ' + PORT);
});

app.use(express.static('public'));
app.engine('.html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('app.html');
});

/*
app.listen(PORT, () => {
    console.log("listening to port: " + PORT);
});*/

app.use(express.static('views')); 