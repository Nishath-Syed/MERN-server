//server>mode>productSchema.js
//MongoDb schema
//capable of storing data in my mongodb
const mongoose= require('mongoose');
const productSchema=mongoose.Schema({
    imageURL:{type:String,required:true},
    price:{type:Number,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
})
//covert this into mongo schema
module.exports=mongoose.model('Product',productSchema);