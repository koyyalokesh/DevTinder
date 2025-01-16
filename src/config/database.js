const mongoose = require('mongoose')

const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://lokesh_2:NAP38gTqVJNJcA1P@cluster0.wflbxq8.mongodb.net/devtinder"
    );
};

module.exports = connectDB;
