const express = require('express');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
var bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const http = require('http');
const app = express();
var session = require('express-session');
const message = require('./routes/api/message');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
var MongoStore = require('connect-mongo')(session);
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys');
console.log(typeof db);

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

// Sessions

// app.use(cookieParser());
// app.use(
//   session({
//     secret: 'mysupersecret',
//     resave: false,
//     saveUninitialized: true,
//     httpOnly: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     cookie: { maxAge: 180 * 60 * 1000 },
//   })
// );

app.use(routes);

// app.use(function (req, res, next) {
//   res.locals.login = req.isAuthenticated();
//   res.locals.session = req.session;
//   next();
// });

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 3001;
server.listen(PORT);
