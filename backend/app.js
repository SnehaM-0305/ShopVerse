import express from "express" ; 
import dotenv from "dotenv" ;
import errorMiddleware from "./middlewares/error.js" 
//import all routes
import productRoutes from "./routes/products.js"
import authRoutes from "./routes/auth.js"
import { connectDatabase } from "./config/dbConnect.js";


//handling uncaught exceptions 
process.on("uncaughtException" , (err) =>{
    console.log(`ERROR : ${err}`);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
})

dotenv.config({path:'backend/config/config.env'})
const app = express() ; 
//databse connect 
connectDatabase();
app.use(express.json()) //inbuilt middleware which parses json req


app.use("/api/v1",productRoutes);
app.use("/api/v1",authRoutes);
//middlewares
app.use(errorMiddleware);
const server = app.listen(process.env.PORT , ()=>{console.log(`Server listening on port : ${process.env.PORT} in ${process.env.NODE_ENV}`)});
 
//handle unhandled promise rejection 
process.on('unhandledRejection',(err) => {
    console.log(`ERROR : ${err}`);
    console.log('Shuttin down server due to unhandled Promise Rejection');
    server.close(()=>{
        process.exit(1);
    })
})