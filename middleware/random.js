const calledFirst = (req, res, next) => {
    console.log('Called before each route 😎');
    next();
}

module.exports = {
    calledFirst
}