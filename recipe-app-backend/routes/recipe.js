const express = require("express");
const Recipe = require("../models/recipe");

const router = express.Router();

router.get("/", async(req, res) => {
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