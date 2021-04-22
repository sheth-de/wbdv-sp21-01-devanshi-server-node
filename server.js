const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const password = process.env.PASSWORD
console.log(password)
const user = process.env.USER
console.log("process.env.USER",process.env.USER)

const mongoose = require('mongoose');
mongoose.connect('' + `mongodb+srv://${user}:${password}@cluster0.4cre1.mongodb.net/whiteboard`,
    // 'mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true});

// const session = require('express-session')
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
// }))


// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app);

// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require("./controllers/quiz-attempts-controller")(app)


const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('Our app is running on port: ' + port);
});
