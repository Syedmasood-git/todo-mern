const todoModel = require("../models/todo")

const todoController = async (req,res)=>{
    todoModel.create(req.body)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}

const getTodoController = async(req,res)=>{
    todoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}
const updateTodoController = async(req,res)=>{
    const {id} = req.params;
    todoModel.findByIdAndUpdate(id,{task:req.body.task},{new:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}
const deleteTodoController = async(req,res)=>{
    const {id} = req.params;
    todoModel.findByIdAndDelete(id)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}
module.exports={
    todoController,
    getTodoController,
    updateTodoController,
    deleteTodoController,
}