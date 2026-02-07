import catchAsyncErrors from "../middlewares/catchAsynErrors.js" ; 
import User from "../modals/user.js" ; 
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