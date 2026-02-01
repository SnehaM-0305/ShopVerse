export default (err , req, res,next)=>{
    let error = {
        statusCode:err.statusCode ||500,
        message:err?.message || "Internel Server Error" , 

    };

    res.status(error.statusCode).json({
        message:error.message,
    })
}