const express = require('express');
const ejs = require('ejs');

//create express app
const app = new express();''

//initialize bodt parser middleware -- parses data sent in by users
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initialize ejs 
app.set('view engine', 'ejs');
app.use('/public', express.static(_dirname + '/public'));

//server logic

//routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get('/resume', (req, res) => {
    res.render('./html/resume');
});

app.get('/funfacts', (req, res) => {
    res.render('./html/funfacts');
});

app.get('/trivia', (req, res) => {
    let initialAnswers = 0;
    res.render('./html/trivia.ejs', {
        Answer1: initialAnswers,
        Answer2: initialAnswers,
        Answer3: initialAnswers,
        Answer4: initialAnswers,
        Answer5: initialAnswers
    });
});

app.post('/trivia', (req, res) => {
    let newAnswer1 = req.body.userAnswer1;
    let newAnswer2 = req.body.userAnswer2;
    let newAnswer3 = req.body.userAnswer3;
    let newAnswer4 = req.body.userAnswer4;
    let newAnswer5 = req.body.userAnswer5;
    req.render('./html/trivia', {
        Answer1: newAnswer1,
        Answer2: newAnswer2,
        Answer3: newAnswer3,
        Answer4: newAnswer4,
        Answer5: newAnswer5,
    });
});

//server port set up
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));