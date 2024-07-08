//server->routes->users.js
const express = require('express')
const router=express.Router()
const User=require('../model/userSchema')
//import schema in routes

//Rest API POST method to handle post request
router.post('/',(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const newUser = new User({name,email,password});
    //after our query(newUser) is created we cansave it to the database
    //data passed to schema for validation
    newUser.save();//this will save the schema to MongoDB
    res.status(201).send(
        {message:"User Created",newUser});
    }catch(err){
        res.status(500).send({message:err,message});
    }
})
//GET the data
router.get('/',async (req,res)=>{
    try{
        const data = await User.find();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
//PUT the data (update)
router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
         const updatedUser = await
          User.updateOne({_id:userId}, {$set:{password:password }});
          //use findByIdAndUpdate instead of UpdateOne
        if (updatedUser.nModified==0) {
            return res.status(404).send({ message: "User not found" }); }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });
router.delete('/:id',async(req,res)=>{
    try{
        const userId=req.params.id;
        const deleteUser=await User.findByIdAndDelete(userId);
        if(!deleteUser){
            return res.status(404).send({message:"Id doesnot exit"})
        }
        res.status(200).send({message:"user deleted",deleteUser});
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;