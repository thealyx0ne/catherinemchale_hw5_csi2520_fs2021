const express = require("express");
const ejs = require("ejs");

//create express app
const app = express();

//create a database connection configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "homework5",

});


//initialize body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true})); //needed to parse html into a string format

//establish ejs middleware
app.use(express.json());
app.use("/public", express.static(_dirname + "/public"));

//routes
app.get("/", (req, res) => {
    res.render("index");
});


//set up server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));