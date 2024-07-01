const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 60,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    profileImage: {
        type: String,
        default: ""
    },
    coverImage:{
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings:{
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 60
    },
    city:{
        type: String,
        max:50
    },
    from:{
        type: String,
        max: 50
    },
    relationship:{
        type: Number,
        enum: [1, 2, 3],
    },
  },
  {timestamps: true}
)

module.exports = mongoose.model("User",UserSchema);