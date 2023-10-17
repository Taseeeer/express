const { hashPassword, comparePassword, createJWT } = require('../auth/jwt');

const users = [];

const createUser = async (req, res) => {
    const username = req.body.username;
    const password = await hashPassword(req.body.password);

    const user = { username, password };
    users.push(user);
    console.log(users);
    const token = createJWT(user);
    res.json({ token });
};

const signin = async (req, res) => {
    const user = users.find(user => user.username === req.body.username);
    const isValid = comparePassword(req.body.password, user.password);

    if(!isValid) {
        res.status(401);
        res.json({ message: 'No auth' });
    }

    const token = createJWT(user);
    res.json({ token });
}

module.exports = {
    createUser,
    signin
}