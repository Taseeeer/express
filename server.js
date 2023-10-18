const express = require('express');
const app = express();
const morgan = require('morgan');
const { protect } = require('./auth/jwt');
const { createUser, signin } = require('./handlers/user');

app.use(morgan('dev'));
app.use(express.json());

app.post('/api', protect, (req, res) => {
    res.send({ greetings: 'you are logged in!'});
});

app.post('/api/user', protect, (req, res) => {
    res.send({ name: `Logged in as user1`});
});


app.post('/user', createUser);

module.exports = app;