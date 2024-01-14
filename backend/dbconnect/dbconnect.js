const mongoose = require('mongoose')
require("dotenv").config()

const db = async()=>{
    try {
        await mongoose.connect(process.env.MONGOURI)
        .then(()=>console.log("DB Connected"))
    } catch (error) {
        console.log(error);
    }
}
db();