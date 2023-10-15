const router = require('express').Router();

router.get('/hi', (req, res) => {
    res.send({ msg: 'hi' });
});

router.post('/there', (req, res) => {
    console.log(req.body);
    const yourScore = req.body.score;
    res.json({ yourScore });
});

module.exports = router;