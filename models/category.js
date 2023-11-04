const mongoose = require('mongoose')
const categorySchema= new mongoose.Schema({
    name:{
        type:'String',
        required: true
    }
    },{timestamps:true})

    const Post= mongoose.model("Category",categorySchema);
    module.exports = Post;
