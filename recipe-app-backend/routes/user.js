const express = require("express");
const User = require("../models/user");
const Recipe = require("../models/recipe");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "recipe-app";

const router = express.Router();

//Login user
router.post("/login", async(req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    const user = await User.findOne({email});
    console.log(user);
    if(!user){
        return res.status(400).json({
            status: false,
            message: "Unknown User"
        })
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if(err){
            return res.status(400).json({
                status: false,
                message: err.message
            })
        }
        if(result){
           let token = jwt.sign({
            data: user._id
            }, secret);
            res.json({
                status: true,
                token
            })
        }else{
            res.status(400).json({
                status: false,
                message: err.message
            })
        }
    })
    
})

//Register a user
router.post("/signup", async(req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    bcrypt.hash(password, 10, async(err, hash) => {
        if(err){
            return res.status(400).json({
                status: false,
                message: err.message
            })
        }
        try{
            const user = await User.create({
            email,
            password: hash
            })

            const token = jwt.sign({
            data: user._id
            }, secret);
            console.log(token);
            res.json({
                status: true,
                token
            })
        }catch(err){
            res.status(400).json({
                status: false,
                message: err.message
            })
        }
    })
})

module.exports = router;