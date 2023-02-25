const Recipe = require("../models/recipe");
const data = require("../data");

async function database(){
    const deleteData = await Recipe.deleteMany({});

    const insertData = await Recipe.create(data);
}

module.exports = database;