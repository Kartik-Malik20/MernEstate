import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required:true,
        unique:true
    },
    email: {
        type : String,
        required:true,
        unique:true
    },
    password: {
        type : String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://firebasestorage.googleapis.com/v0/b/mern-estate-a97d9.appspot.com/o/1713161335850user.png?alt=media&token=67c944d8-599e-46cf-a376-0957ad65fa9f",
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;