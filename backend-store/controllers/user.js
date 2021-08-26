const User = require('../models/user');
const { errorHandler } = require('../helpers/dbHandlerError');

exports.signup = (req, res) => {
    console.log('req.body', req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return console.error(errorHandler(err), 'bad gateway')
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({ user })
    })
}