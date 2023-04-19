import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: String,
    creator: String,
    time: Number,
    questions:Array
  });

export const Quiz = mongoose.model('QuizForm', quizSchema);