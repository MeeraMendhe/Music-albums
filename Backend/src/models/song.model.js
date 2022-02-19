const mongoose=require("mongoose")

const SongSchema=mongoose.Schema(
    {
        song_name:{
            type:String,
            require:true
        },
        duration:{
            type:Number,
            require:true
        }
    },
    {
        versionKey:false
    }
)

const Song=mongoose.model("song",SongSchema);
module.exports=Song