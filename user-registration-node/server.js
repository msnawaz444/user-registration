//This is main server 
var express = require('express');
var bodyParser = require('body-parser');
 require('./config/db').mongooseConnection;
var cors = require('cors');
var routes = require('./routes/routes').routes;

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user', routes);


app.listen(3000, () => console.log('App is running on port 3000'));
module.exports = app;