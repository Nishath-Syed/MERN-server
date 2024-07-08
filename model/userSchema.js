//server>mode>userSchema.js
//MongoDb schema
//capable of storing data in my mongodb
const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
})
//covert this into mongo schema
module.exports=mongoose.model('User',userSchema);