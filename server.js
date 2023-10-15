const express = require('express');
const app = express();
const morgan = require('morgan');
const { protect } = require('./auth/jwt');
const { createUser, signin } = require('./handlers/user');

app.use(morgan('dev'));
app.use(express.json());

// for auth or create user
app.post('/api', protect, (req, res) => {
    res.send({ greetings: 'you are signed in!'});
});

app.post('/user', createUser);

module.exports = app;