const mongoose=require("mongoose")

const AlbumSchema=mongoose.Schema(
    {
        album_name:{
            type:String,
            require:true
        },
        type:{
            type:String,
            require:true
        },
        year:{
            type:Number,
            min:4,
            max:4,
            require:true
        },
        image:{
            type:String,
            require:true
        },
        song:[
           {
              type:mongoose.Schema.Types.ObjectId,
              ref:"song",
              require:true
           }
        ]

    },
    {
        versionKey:false
    }
)
const Album=mongoose.model("album",AlbumSchema);
module.exports=Album