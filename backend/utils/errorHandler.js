//custom error handler for all the routes 
class ErrorHandler extends Error {
    constructor(message ,statusCode  ){
        super(message);
        this.statusCode = statusCode ; 

        //only used in dev 
        Error.captureStackTrace(this,this.constructor);
    }
}

export default ErrorHandler