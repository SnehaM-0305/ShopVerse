import catchAsynErrors from "../middlewares/catchAsynErrors.js";
import Product from "../modals/product.js"
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js"
import qs from "qs";
export const getProducts = async (req,res)=>{
    const parsedQuery = qs.parse(req.query);
const apiFilters = new APIFilters(Product ,parsedQuery).filters();


let products = await apiFilters.query;
let filterproductscount = products.length;
    res.status(200).json({
      filterproductscount,
       products
    })
}
//create new product =>/api/v1/admin/products
export const newProduct = catchAsynErrors(async (req,res)=>{
   const product = await Product.create(req.body);

   res.status(200).json({product,})
}
)

//get product by id  =>/api/v1/products/:id
export const productById =catchAsynErrors( async (req,res , next)=>{
   const product = await Product.findById(req?.params?.id);

   if(!product){
      //next->a middle ware that executes next middleware in case of error.
      return next(new ErrorHandler("Product not found" , 404));
   }
   res.status(200).json({product,})
});

//update product by id  =>/api/v1/admin/products/:id
export const updateProduct = catchAsynErrors(async (req,res)=>{
   let product = await Product.findById(req?.params?.id);

   if(!product){
       return next(new ErrorHandler("Product not found" , 404));
   }

   product = await Product.findByIdAndUpdate(req?.params?.id , req.body , {new:true})
   res.status(200).json({product,})
}
)
//delete product by id  =>/api/v1/admin/products/:id

export const deleteProduct = catchAsynErrors(async (req,res)=>{
   const product = await Product.findById(req?.params?.id);

   if(!product){
       return next(new ErrorHandler("Product not found" , 404));
   }

  await product.deleteOne();
   res.status(200).json({message:"Product is deleted"})
}
)