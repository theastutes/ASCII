import { PostSchema } from "../models/postmodel.js";


export const uploadpost = async (req,res,next) =>{
    try{
    await PostSchema.create({
        username:req.body.Cpost.username,
        userprofile:req.body.Cpost.userprofile,
        title:req.body.Cpost.title,
        content:req.body.Cpost.content,
        photosrc:req.body.Cpost.photosrc,
    }
    ).then((err,item)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Data Saved Successfully");
        }
    })

    res.send("Data saved successfully");
    }catch(err){
        next(err);
    }

}



export const getpost = async (req,res) => {
    const doc = await PostSchema.find({}).sort({_id: -1});
    console.log("Posts Received");
    res.send(doc);
};