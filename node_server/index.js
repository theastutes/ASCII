import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import {config} from 'dotenv';
import userRouter from './routes/userroutes.js'
import postRouter from './routes/postroutes.js'
import quizRouter from './routes/quizroutes.js'

const app = express();
config({
    path:"config.env",
});

async function main() {
    await mongoose.connect(process.env.MONGO_URI).then(console.log('DB Connected'));
     
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err => console.log(err));



app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
    origin:"https://main--aesthetic-chebakia-2122ec.netlify.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);
app.use("/api/quizzes",quizRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port: ${process.env.PORT}`)
})