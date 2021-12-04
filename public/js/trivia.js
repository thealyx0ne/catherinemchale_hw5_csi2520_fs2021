const express = require("express");
const ejs = require("ejs");

//create express app
const app = new express();

//initialize bodt parser middleware -- parses data sent in by users
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initialize ejs 
app.set("view engine", "ejs");
app.use("/public", express.static(_dirname + "/public"));

//server logic

//routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/resume", (req, res) => {
    res.render("./html/resume");
});

app.get("/funfacts", (req, res) => {
    res.render("./html/funfacts");
});

app.get("trivia", (req, res) => {
    res.render("./html/trivia");
});

//question 1
app.post('/url', (req, res) => {
    let score = 0;
    let data1 = req.body.answer1;
    let answer1 = 'C';
    if (data == answer1) {
        score++;
        res.send(`Correct!`);
    }
    else{
        res.send(`Incorrect!`);
    }

//question 2
    let data2 = req.body.answer2;
    let answer2 = 'A';
    if (data == answer2) {
        score++;
        res.send(`Correct!`);
    }
    else{
        res.send(`Incorrect!`);
    }

//question 3
    let data3 = req.body.answer3;
    let answer3 = 'D';
    if (data == answer3) {
        score++;
        res.send(`Correct!`);
    }
    else{
        res.send(`Incorrect!`);
    }

//question 4
    let data4 = req.body.answer4;
    let answer4 = 'B';
    if (data == answer4) {
        score++;
        res.send(`Correct!`);
    }
    else{
        res.send(`Incorrect!`);
    }

//question 5
    let data5 = req.body.answer5;
    let answer5 = 'C';
    if (data == answer5) {
        score++;
        res.send(`Correct!`);
    }
    else{
        res.send(`Incorrect!`);
    }
});

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});