import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username:String,
    userprofile:String,
    title: String,
    content: String,
    photosrc:String,
    // date: {type: Date, default:Date.now},
    // username: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    expireAt:{
        type:Date,
        default:(Date.now() + (30*86400000)),
    },
});
postSchema.index({
    "expireAt":1, 
    },
    {expireAfterSeconds:0}
);

export const PostSchema = mongoose.model('postdb',postSchema);