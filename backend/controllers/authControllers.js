import catchAsyncErrors from "../middlewares/catchAsynErrors.js" ; 
import User  from "../modals/user.js"; 
import ErrorHandler from "../utils/errorHandler.js"

//register user /api/v1/register
export const registerUser = catchAsyncErrors( async (req,res,next)=>{
    const {name ,  email , password} = req.body ; 

    //create user 
    const user = await User.create({
        name , email,password 
    });

    const token = user.getJwtToken()
    res.status(200).json({
        token,
    })
})

//login user /api/v1/login
export const loginUser = catchAsyncErrors( async (req,res,next)=>{
    const {email , password} = req.body ; 

   if(!email ||!password){
    return next(new ErrorHandler('Please enter email and password' , 400))
   }

   //find user in the database 
   const user = await User.findOne({email}).select("+password")

   if(!user){
    return next(new ErrorHandler("Invalid email or password" , 401))
   }

   //check if password is correct 
   const isPasswordMatch = await user.comparePassword(password);
   if(!isPasswordMatch){
    return next(new ErrorHandler("Wrong password or email ",401))
   }

    const token = user.getJwtToken()
    res.status(200).json({
        token,
    })
})