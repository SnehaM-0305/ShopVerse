import products from "./data.js"
import Product from "../modals/product.js";
import mongoose from "mongoose" ; 
const seedProducts = async () =>{
    try{
        //connect to database 
        mongoose.connect("mongodb://localhost:27017/shopverse-v1");
        //push the products 
        await Product.deleteMany();
        console.log("Products got deleted");

        await Product.insertMany(products);
        console.log("Product got Added");
        process.exit();
    }
    catch(error){
console.log(error.message)
process.exit();
    }
}

seedProducts();