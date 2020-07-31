const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');
stockRouter = require("./routes/api/stock");

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/stock', require("./routes/api/stock"));
app.use('/api/user', require("./routes/api/users"));
app.use('/api/watchlist', require("./routes/api/watchlist"));
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});