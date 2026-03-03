import { Request, Response } from "express";
import Product from "../models/product.ts";

class ProductController {
    static async findAll(req: Request, res: Response) {
        const products = await Product.find();
        return res.status(200).send({ response: products });
    }

    static async create(req: Request, res: Response) {
        const { name, description, price, stock, category, createdAt } = req.body;

        try {
            const product = new Product({ name, description, price, stock, category, createdAt });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar produto.', error });
        }
    }

    static async findById(req: Request, res: Response) {
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.status(200).send({ response: product });
    }

    static async update(req: Request, res: Response) {
        const { product } = req;

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        res.status(200).json({response: "Produto atualizado com sucesso!"});
    }

    static async remove(req: Request, res: Response) {
        const { product } = req;

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        res.status(200).json({response: "Produto deletado com sucesso!"});
    }
}

export default ProductController;
