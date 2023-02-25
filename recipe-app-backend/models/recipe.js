const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const recipeSchema = new Schema({
    title: String,
    author: String,
    image: Object,
    ingredients: Array,
    directions: String,
    user: {type: ObjectId, ref: "User"}
})

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;