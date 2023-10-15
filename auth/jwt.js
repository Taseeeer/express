const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createJWT = (user) => {
    const token = jwt.sign(user, 'yourKey');
    return token;
};

const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if(!bearer) {
        res.status(401);
        res.json({ message: 'not authorized' });
        return;
    }

    const [, token] = bearer.split(' ');

    if(!token) {
        res.status(401);
        res.json({ message: 'not authorized' });
        return;
    }


    try {
        const user = jwt.verify(token, 'yourKey');
        req.user = user;
        next();
    } catch(e) {
        res.status(401);
        res.json({ message: 'not authorized' });
        return;
    }
};

const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
};

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = {
    protect,
    createJWT,
    hashPassword,
    comparePassword
}