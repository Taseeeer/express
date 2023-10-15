const express = require('express');
const app = express();
const morgan = require('morgan');

const router = require('./routes/router');
const { calledFirst } = require('./middleware/random.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(calledFirst);

app.use('/print', router);

app.get('/', (req, res) => {
    res.send({ msg: 'hello world'});
}); 

module.exports = app;