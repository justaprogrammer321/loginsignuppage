const mongoose=require("mongoose");
mongoose.set('strictQuery', true)
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignupTutorial")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection=new mongoose.model("Collection1",LoginSchema)
module.exports=collection