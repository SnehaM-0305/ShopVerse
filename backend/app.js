import express from "express" ; 
import dotenv from "dotenv" ;
import errorMiddleware from "./middlewares/error.js" 
//import all routes
import productRoutes from "./routes/products.js"
import { connectDatabase } from "./config/dbConnect.js";
import e from "express";

dotenv.config({path:'backend/config/config.env'})
const app = express() ; 
//databse connect 
connectDatabase();
app.use(express.json()) //inbuilt middleware which parses json req


app.use("/api/v1",productRoutes);
//middlewares
app.use(errorMiddleware);
app.listen(process.env.PORT , ()=>{console.log(`Server listening on port : ${process.env.PORT} in ${process.env.NODE_ENV}`)});
