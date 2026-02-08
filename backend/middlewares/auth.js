//check if user is authenticated or not 

import ErrorHandler from "../utils/errorHandler.js";
import catchAsynErrors from "./catchAsynErrors.js";
import jwt from "jsonwebtoken"
import User from "../modals/user.js"
export const isAuthenticatedUser = catchAsynErrors (async (req,res,next)=>{
//get token from cookie to validate the token 
const {token} = req.cookies ; 

//if token is not present then user is not authenticated 
if(!token){
    return next(new ErrorHandler ("Login to access the resource" , 401))
}

//if token is present ->need to verify if it is expired or incorrect 
const decoded = jwt.verify(token , process.env.JWT_SECRET)
req.user  = await User.findById(decoded.id)
next() ; 

})