const express=require("express");
const router=express.Router();
const Album=require("../models/albums.model")

router.get("/",async(req,res)=>
{
   try{
    const albums=await Album.find({}).populate("song").lean().exec();
    res.status(200).send(albums)
   }catch(e){
       console.log(e)
       res.status(400).send("Bad request",e)
   }
})

module.exports=router