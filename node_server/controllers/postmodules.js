import { PostSchema } from "../models/postmodel.js";

export const uploadpost = async (req,res,next) =>{
    try{
    await PostSchema.create({
        username:req.body.Cpost.username,
        title:req.body.Cpost.title,
        content:req.body.Cpost.content,
        photosrc:req.body.Cpost.photosrc,
    }
    ).then((err,item)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("item",item);
        }
    })

    res.send("Data saved successfully");
    }catch(err){
        next(err);
    }

}

export const getpost = async (req,res) => {
    const doc = await PostSchema.find({});
    res.send(doc);
};