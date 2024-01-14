const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
},{timestamps:true})

const todoModel = new mongoose.model("todos",todoSchema);

module.exports = todoModel;