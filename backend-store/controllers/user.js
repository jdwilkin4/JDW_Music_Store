const User = require('../models/user');

exports.signup = (req, res) => {
    console.log('req.body', req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) return console.error(err)
        res.json({ user })
    })
}