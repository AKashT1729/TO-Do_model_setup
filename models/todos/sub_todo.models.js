import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    comlete:{
        type: String,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},{timestamps:true});    


export const SubTodo = mongoose.model('SubTodo',subTodoSchema);
