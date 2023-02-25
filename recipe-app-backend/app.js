const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const port = 8080 || process.env.PORT;
const cors = require("cors");
const dbServer = require("./database/mongoose");
const database = require("./database/database");
const userRoutes = require("./routes/user");
const recipeRoutes = require("./routes/recipe");

dbServer();
database();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/user", userRoutes);
app.use("/api/recipe", recipeRoutes);

app.get("/", (req, res) => {
    res.json({
        status: "success"
    })
})

app.listen(port, () => console.log(`Post ${port} is connected successfully...`));