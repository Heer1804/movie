const mongoose = require("mongoose");

module.exports.db=async()=>{
    try {
        await mongoose.connect('mongodb+srv://parikhheer8:12345@cluster0.3iaue.mongodb.net/')
        console.log('Databse Connected');
    } catch (error) {
        console.log(error);
        
    }
}