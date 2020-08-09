const mongo = require('mongoose')

const ytLink = mongo.Schema({
    name :{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    yes:{
        type:Number,
        default:0
    },
    no:{
        type:Number,
        default:0
    }
})

module.exports = mongo.model('ytLink',ytLink);