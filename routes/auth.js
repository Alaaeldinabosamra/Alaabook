const router = require("express").Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
//REGISTER
router.post('/register', async (req,res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
    //create new user
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
    })

    // save user and return response
    const user = await newUser.save();
        res.status(200).json(user); 
    } catch (err) {
        console.log(err);
    }
    
})



router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email });
        if (!user) {
            res.status(404).json("user not found!")
        } 

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) {
            res.status(404).json("wrong password!")
        }
        res.status(200).json(`Welcome back ${user.firstName}`)
    }catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router