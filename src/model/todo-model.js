const mongoose=require('mongoose')

const Schema=mongoose.Schema
const todolistSchema=new Schema({
    task:{
        type:String,
        trim:true
    }
})

const TodolistModel= mongoose.model('TodolistModel',todolistSchema)
module.exports=TodolistModel