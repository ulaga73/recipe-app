const express = require("express");
const Recipe = require("../models/recipe");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        console.log(req.user);
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

router.post("/", async(req, res) => {
    console.log(req.body);
    const {title, author, image, ingredients, directions} = req.body;
    const image_url = {
        url: image
    }
    const ingredients_arr = ingredients.split(", ");
    // console.log(image_url);
    // console.log(ingredients_arr);
    try{
        const insertData = await Recipe.create({
            title,
            author,
            image: image_url,
            ingredients: ingredients_arr,
            directions,
            user: req.user
        })
        res.json({
            status: true,
            result: insertData
        })
    }catch(err){
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
})

module.exports = router;