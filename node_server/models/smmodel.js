import mongoose from "mongoose";

const smSchema = new mongoose.Schema({
    name:String,
    
});
export const SmSchema = mongoose.model('smdb',smSchema);