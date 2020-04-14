'use strict';
const auth = require('./auth.js');
const routes = require('./routes.js');

const passport    = require('passport')
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const session     = require('express-session')
const mongo       = require('mongodb').MongoClient;

const app = express();

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize())
app.use(passport.session())

mongo.connect(process.env.DATABASE, (err, db) => {
  if(err) {
    console.log('Database error: ' + err);
  } 
  else {
    console.log('Successful database connection');
    
const dbInfo = db.db('test');   

auth(app, dbInfo);
routes(app, dbInfo);

    

    

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
})
  }});
