//routes for product resource 

import express from "express" ; 
import {isAuthenticatedUser,authorizeRoles} from "../middlewares/auth.js"
import { deleteProduct, getProducts, newProduct ,productById, updateProduct } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(isAuthenticatedUser,authorizeRoles('admin'),newProduct);
router.route("/products/:id").get(productById);
router.route("/admin/products/:id").put(isAuthenticatedUser,authorizeRoles('admin') ,updateProduct);
router.route("/admin/products/:id").delete(isAuthenticatedUser,authorizeRoles('admin') ,deleteProduct);

export default router  ; 
