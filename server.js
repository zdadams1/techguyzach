const express = require('express');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
var bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const http = require('http');
var session = require('express-session');
const message = require('./routes/api/message');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
var MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets - Connects React to Backend -
if (process.env.NODE_ENV === 'production') {
  //  app.use(express.static("client/public"));
  app.use(express.static('client/build'));
}

// Sessions

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Connect to MongoDB
mongoose
  .createConnection(
    'mongodb://zdadams1:Za2011!!@ds113795.mlab.com:13795/zach-adams',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = mongoose.model('users');
const keys = require('./config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

(passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};

app.use(routes);

app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
