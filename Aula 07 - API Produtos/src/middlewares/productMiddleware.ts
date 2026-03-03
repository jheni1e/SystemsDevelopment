import { Request, Response, NextFunction } from "express";
import Product from "../models/product.ts";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price, stock, category, createdAt  } = req.body;

    if (!name || !price) {
        return res.status(400).send({ response: "Nome e preço são campos obrigatórios." })
    }

    next();
}

export const validateUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, description, price, stock, category, createdAt  } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, { name, description, price, stock, category, createdAt  }, { new: true });

        if (!product) {
            res.status(404).json({ message: 'Produto não encontrado.' });
        }

        req.product = product;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar produto.', error });
    }
}

export const validateDelete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404).json({ message: 'Produto não encontrado.' });
        }

        req.product = product;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar produto.', error });
    }
}
