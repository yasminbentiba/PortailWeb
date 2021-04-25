const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');


const config = require('../config/config');



const port  = config.RESTAPIport;
const cors = require('cors');

// Configuration

// Set up Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const app = express();
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// API routes
require('./routes')(app);



// app.use(express.static(path.resolve(__dirname, '../build')));

// app.get('*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, '../build/index.html'));
//     res.end();
// });


app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = app;
