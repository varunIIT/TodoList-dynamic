const express=require('express')
const TdModel=require('../model/todo-model')
const route=express.Router()

route.get('/',async (req,res)=>{
    try{
        const allTasks=await TdModel.find()
        res.status(200).send(allTasks)
    }
    catch(err){
        res.status(400).send(err)
    }
})
route.post('/',async (req,res)=>{

    try{
        
        const instance= new TdModel(req.body)
        const task=await instance.save()
        res.status(201).send(task)
    }catch(err){
        res.status(401).send(err)
    }
})
route.post('/delete',async (req,res)=>{
   
    const deletedTask=await TdModel.findByIdAndDelete(req.body.id)
    res.redirect('/')
})
module.exports={route}