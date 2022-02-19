const express=require("express");
const cors=require("cors");
const artistRouter=require("./controllers/artist.controller")
const songRouter=require("./controllers/song.controller")
const albumRouter=require("./controllers/album.controller")
const app=express();
app.use(express.json());
app.use(
    cors({
        origin:""
    })
)
app.use("/artist",artistRouter)
app.use("/song",songRouter)
app.use("/album",albumRouter)
module.exports=app