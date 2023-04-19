import { Quiz } from '../models/quizmodel.js'

export const quizform = async (req, res) => {
    try {
        Quiz.create({
            title: req.body.quizForm.title,
            creator: req.body.quizForm.creator,
            time: req.body.quizForm.time,
            questions: req.body.quizForm.questions,
        }).then((err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("item", item);
            }
        })
    } catch (err) {
        next(err);
    }
}

export const getquiz = async (req,res) => {
    try{
        const doc = await Quiz.find({});
        res.send(doc);

    }catch(err){
        next(err);
    }
}