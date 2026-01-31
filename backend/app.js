import express from "express" ; 
import dotenv from "dotenv" ; 
//import all routes
import productRoutes from "./routes/products.js"
import { connectDatabase } from "./config/dbConnect.js";
dotenv.config({path:'backend/config/config.env'})
const app = express() ; 
//databse connect 
connectDatabase();
app.use(express.json()) //inbuilt middleware which parses json req


app.use("/api/v1",productRoutes);

app.listen(process.env.PORT , ()=>{console.log(`Server listening on port : ${process.env.PORT} in ${process.env.NODE_ENV}`)});
