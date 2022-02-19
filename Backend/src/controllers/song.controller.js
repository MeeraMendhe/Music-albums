const express=require("express");
const router=express.Router();
const Song=require("../models/song.model")

router.get("/",async(req,res)=>
{
   try{
    const Songs=await Song.find({}).lean().exec();
    res.status(200).send(Songs)
   }catch(e){
       res.status(400).send("Bad request")
   }
})
router.post("/",async(req,res)=>
{
   try{
    const Songs=await Song.create(req.body);
    res.status(200).send(Songs)
   }catch(e){
       res.status(400).send("Bad request")
   }
})
module.exports=router