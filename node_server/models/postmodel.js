import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username:String,
    title: String,
    content: String,
    photosrc:String,
    // date: {type: Date, default:Date.now},
    // username: String,
});

export const PostSchema = mongoose.model('postdb',postSchema);