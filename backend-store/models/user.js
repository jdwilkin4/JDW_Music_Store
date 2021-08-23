const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuidv1');
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
        String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    hashed_password: {
        String,
        required: true
    },
    about_profile: {
        String,
        trim: true
    },
    salt: true,
    role: {
        Number,
        default: 0
    },
    history: {
        Array,
        default: []
    }
},
    { timestamps: true }
)

//creating virtual fields
userSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = uuidv1()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })

userSchema.methods = {
    encryptPassword: function (password) {
        if (!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return ''
        }
    }
}

module.exports = mongoose.model('User', userSchema);

