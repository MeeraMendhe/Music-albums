const mongoose=require("mongoose")

const ArtistSchema=mongoose.Schema(
    {
        artist_name:{
            type:String,
            require:true
        },
        profile:{
            type:String
        },
        artist_albums:[
           {
              type:mongoose.Schema.Types.ObjectId,
              ref:"album",
              require:true
           }
        ]

    },
    {
        versionKey:false
    }
)

const Artist=mongoose.model("artist",ArtistSchema);
module.exports=Artist
