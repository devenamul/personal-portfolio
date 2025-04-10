import mongoose from "mongoose";

// Schema
const adminSchema = mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true
    },
    lastName:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true 
    },
    phone:{
        type:String,
        require:true,
        trim:true,
        unique:true 
    },
    subject:{
        type:String,
        require:true,
        trim:true,
        
    },
    message:{
        type:String,
        require:true,
        trim:true,
        
    },
},

{
    timestamps:true
});


// expott model
export default mongoose.model("AdminData", adminSchema )