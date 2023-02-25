const express = require("express");
const User = require("../models/user");
const Recipe = require("../models/recipe");

const router = express.Router();

router.post("/login", async(req, res) => {
    console.log(req.body);
    const {email, passoword} = req.body;
    // const user = await User.find({email});
    // if(!user){
    //     return res.status(400).json({
    //         status: false,
    //         message: "Please login with a valid user"
    //     })
    // }

    try{
        const data = await Recipe.find({});
        res.json({
            status: true,
            result: data
        })
    }catch(err){
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
})

router.post("/signup", async(req, res) => {
    console.log(req.body);
    const {email, passoword} = req.body;
    // const user = await User.find({email});
    // if(!user){
    //     return res.status(400).json({
    //         status: false,
    //         message: "Please login with a valid user"
    //     })
    // }

    try{
        const data = await Recipe.find({});
        res.json({
            status: true,
            result: data
        })
    }catch(err){
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
})

module.exports = router;