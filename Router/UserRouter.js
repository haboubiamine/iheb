const mongoose = require('mongoose');
const express = require('express');
const Router = express.Router();

const User = require('../modal/User.js')




//get all Users

Router.get('/',async(req,res)=>{

    const user = await User.find({});
    res.status(200).send(user)
   
})
//all add user

Router.post('/add',async(req,res)=>{

        const {name} = req.body;
        const {lastname} = req.body;
        const {email} = req.body;
       

        const user = new User({
            name:name,
            lastname:lastname,
            email:email,
          
        })

     const saveduser = await user.save();

     res.status(200).send(saveduser)


})


// delete user by id
Router.delete('/delete',async(req,res)=>{

    const {id} = req.body

 await   User.findOneAndDelete({_id : id});
res.send('user deleted')
})


//update user
Router.put('/update/:id',async(req,res)=>{
   const id = req.params.id
    const {name} = req.body;
    const {lastname} = req.body;
    const {email} = req.body;
  


  const updateduser = await User.findOneAndUpdate({_id : id},{ $set: { name : name ,lastname:lastname,email:email }} )
    res.send(updateduser)
})


module.exports =  Router;