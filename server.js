const express = require('express');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
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

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thestore", { useNewUrlParser: true });
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(process.env.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Sessions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: true,
    httpOnly: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
  })
);

app.use(routes);

app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
