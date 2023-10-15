const express = require('express');
const app = express();
const morgan = require('morgan');

const router = require('./routes/router');
const { protect } = require('./auth/jwt');

app.use(morgan('dev'));
app.use(express.json());


app.get('/', protect, (req, res) => {
    res.send({ msg: 'hello world'});
}); 

module.exports = app;