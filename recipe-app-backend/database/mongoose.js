const mongoose = require("mongoose");

async function dbServer(){
    await mongoose.connect("mongodb+srv://ulaganathan:ulaganathan@cluster0.cdalxgz.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database is connected successfully...");
}

module.exports = dbServer;