const mongoose = require("mongoose");

async function dbServer(){
    await mongoose.connect("mongodb://localhost:27017/recipe");
    console.log("Database is connected successfully...");
}

module.exports = dbServer;