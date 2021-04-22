const mongoose = require('mongoose')
const questionSchema = require('../questions/questions-schema')
const quizAttempts = mongoose.Schema({
    // id: mongoose.Schema.Types.ObjectId,
    // _id : String,
    // _id: mongoose.Schema.Types.ObjectId,
    score: Number,
    quiz: {type: String, ref: 'QuizModel'},
    answers: [questionSchema]
}, {collection: 'quizAttempts'})
module.exports = quizAttempts