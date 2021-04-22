// module.exports = (app) => {
//     const questionService = require("../services/questions/questions-service")
//
//     const findAllQuestions = (req, res) => {
//         const questions = questionService.findAllQuestions()
//         res.send(questions)
//     }
//
//     const findQuestionsForQuiz = (req, res) => {
//         const quizId = req.params.qzid;
//         const questions = questionService.findQuestionsForQuiz(quizId);
//         res.send(questions);
//     }
//
//     app.get("/api/questions", findAllQuestions);
//     app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
// }

const questionsService = require('../services/questions-service')
module.exports = function(app) {
    app.get('/api/quizzes/:qid/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions))
    )
    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))
    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))
}
