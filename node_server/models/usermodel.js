import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    roll:{
        type:Number,
        unique: false,
        required: true
    },
    clas:{
        type:String,
        unique: false,
        required: true
    },
    admyr:{
        type:Number,
        unique: false,
        required: true
    },
    profileImage:{
        type:String,
        unique: false
    },
    username:{
        type:String,
    },
    score:{
        type:Number,
        default:0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const User = mongoose.model("User", UserSchema);