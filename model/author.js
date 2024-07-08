const mongoose = require('mongoose')

const schema = {
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    total_books:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    
}
//convert this into a mongoose schema
const AuthorSchema = new mongoose.Schema(schema); //function used to create schema
module.exports=mongoose.model('Author',AuthorSchema);