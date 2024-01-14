const express = require('express');
const todoModel = require('./models/todo');
const { todoController } = require('./controllers/todoController');
require("./dbconnect/dbconnect")
const app = express();
const cors = require('cors')
require("dotenv").config()
app.use(express.json())
app.use(cors())
const mainRouter= require('./routes/')

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.use('/api',mainRouter)



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})