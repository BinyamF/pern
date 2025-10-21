import express from "express";
import { getAllProducts, saveProduct } from "../controllers/productController.js";

const router = express.Router();


router.get("/", getAllProducts);
router.post("/", saveProduct);

export default router;