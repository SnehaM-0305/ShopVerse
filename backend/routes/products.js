//routes for product resource 

import express from "express" ; 
import {isAuthenticatedUser,authorizeRoles} from "../middlewares/auth.js"
import { deleteProduct, getProducts, newProduct ,productById, updateProduct } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(isAuthenticatedUser,authorizeRoles('admin') , getProducts);
router.route("/admin/products").post(newProduct);
router.route("/products/:id").get(productById);
router.route("/admin/products/:id").put(updateProduct);
router.route("/admin/products/:id").delete(deleteProduct);

export default router  ; 
