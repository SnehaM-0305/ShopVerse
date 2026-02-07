import mongoose  from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:[true,"Please enter your name"] , 
        maxlength :[50 , 'Your name cannot exceed 50 characters'] , 
        

    } , 
    email:{
        type:String , 
        required:[true , "Please enter your Email id "] , 
        unique:true 
    } , 
    password:{
        type:String , 
        required:[true , "Please enter your password"],
        minlength :[6,"Password should be longer than or equal to 6 character"],
        select:false //dont want to send password in response 
    },
    avatar:{
        public_id :String , 
        url:String
    },
    role:{
        type:String,
        default:"user" , 

    },
   resetPasswordToken:String , 
   resetPasswordExpire:Date ,

},{timestamps:true})
//encrypting user password 
userSchema.pre('save', async function (next) {
    if(!this.isModified("password")){
        next();
    }
//salt value : 10 
    this.password  = await bcrypt.hash(this.password , 10)
})
export default mongoose.model("User" , userSchema) ;
