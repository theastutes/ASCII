import { SmSchema } from "../models/smmodel.js";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import {Transform} from "stream";
import mongoose from "mongoose";
import fs from "fs";

const mongodbUrl= "mongodb+srv://projectyjka:53yjka21@asciicluster0.pgohfwc.mongodb.net/ASCIIdb";

let bucket;
(()=>{
    mongoose.connection.on("connected",()=>{
        bucket = new mongoose.mongo.GridFSBucket((mongoose.connection.db),{
            bucketName:'sMuploads',
        })
    })
})();



// Create storage engine
export function uploadSm() {
  const mongodbUrl= "mongodb+srv://projectyjka:53yjka21@asciicluster0.pgohfwc.mongodb.net/ASCIIdb";
  const storage = new GridFsStorage({
    url: mongodbUrl,
    file: (req, file) => {
      return new Promise((resolve, _reject) => {
        const fileInfo = {
          filename: file.originalname,
          bucketName: "sMuploads",
        };
        resolve(fileInfo);
      });
    },
  });

  return multer({ storage });
}

function getBase64(file) {
    const fileData = fs.readFileSync(file);
    const base64data = fileData.toString('base64');
    return base64data;
 }

export const getsmfiles = async (req,res) => {
    const doc = `./uploads/${req.query.name}`
    const file = getBase64(doc);
    console.log(doc);
    res.send(file);
}

export const getsmfilens = async (req,res) => {
    const smnames = await SmSchema.find({});
    res.send(smnames);

}




