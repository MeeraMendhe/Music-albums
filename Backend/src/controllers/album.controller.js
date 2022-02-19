const express=require("express");
const router=express.Router();
const Album=require("../models/albums.model")

router.get("/",async(req,res)=>
{
    const page=+req.query.page||1;
    const limit=+req.query.limit||5;
    const offset=(page-1)*limit
   try{
    const albums=await Album.find({}).skip(offset).limit(limit).populate("song").lean().exec();
    res.status(200).send(albums)
   }catch(e){
       console.log(e)
       res.status(400).send("Bad request",e)
   }
})
router.get("/:id",async(req,res)=>
{
   try{
    const albums=await Album.findById(req.params.id).populate("song").lean().exec();
    res.status(200).send(albums)
   }catch(e){
       console.log(e)
       res.status(400).send("Bad request",e)
   }
})
module.exports=router