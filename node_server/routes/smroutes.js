import express from 'express';
import { SmSchema } from '../models/smmodel.js';
import multer from "multer";
import {uploadSm,getsmfilens,getsmfiles} from '../controllers/smmodules.js';
import mongoose from 'mongoose';



const router = express.Router();
const Storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }

})
const upload = multer({storage:Storage});

router.post('/upSm',upload.single('file'),async (req,res)=>{
    SmSchema.create({name:req.file.filename})
    try {
        res.status(201).json({ text: "File uploaded successfully !" });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          error: { text: "Unable to upload the file", error },
        });
      }
});

router.get('/getsm',getsmfiles);

router.get('/getsmnms',getsmfilens);

export default router;