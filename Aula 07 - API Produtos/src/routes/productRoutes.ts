import express, { Router } from 'express';
import ProductController from '../controllers/productController.ts';
import { validateDelete, validateRegister, validateUpdate } from '../middlewares/productMiddleware.ts';

const router: Router = express.Router();

router
    .post("/products", validateRegister, ProductController.create)
    .get("/products", ProductController.findAll)
    .get("/products/:id", ProductController.findById)
    .put("/products/:id", validateUpdate, ProductController.update)
    .delete("/products/:id", validateDelete, ProductController.remove);

export default router;
