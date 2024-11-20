const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema({

    country:{
        type:String
    },
    year:{
        type:String
    },
    rank:{
        type:String
    },
    total:{
        type:String
    }
})

const DataModel = mongoose.model('DataSchema',DataSchema)

module.exports= DataModel