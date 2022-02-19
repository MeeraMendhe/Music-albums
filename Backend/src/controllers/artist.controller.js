const express=require("express");
const router=express.Router();
const Artist=require("../models/artists.model");
const Song = require("../models/song.model");
const Album=require("../models/albums.model")
router.get("/",async(req,res)=>
{
   try{
    const artists=await Artist.find({}).populate({
        path:"artist_albums",
        populate:{
            path:"song",
            model:Song
        }
    }).lean().exec();
    res.status(200).json(artists)
   }catch(e){
       res.status(400).json(e)
       console.log(e)
   }
})
router.get("/artist_name",async(req,res)=>
{
   try{
    const name=req.query.name   
    const artists=await Artist.find({artist_name:name}).populate({
        path:"artist_albums",
        populate:{
            path:"song",
            model:Song
        }
    }).lean().exec();
    res.status(200).json(artists)
   }catch(e){
       res.status(400).json(e)
       console.log(e)
   }
})
router.get("/type",async(req,res)=>
{
   try{
    const type=req.query.type   
    const artists=await Album.find({type:type}).lean().exec();
    res.status(200).json(artists)
   }catch(e){
       res.status(400).json(e)
       console.log(e)
   }
})

module.exports=router