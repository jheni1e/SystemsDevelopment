import { Request, Response, NextFunction } from "express";
import Person from "../models/person.ts";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, lastname, age } = req.body;

    if (!name || !lastname || !age) {
        return res.status(400).send({ response: "Nome, sobrenome e idade são campos obrigatórios." })
    }

    next();
}

export const validateUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, lastname, age } = req.body;

    try {
        const person = await Person.findByIdAndUpdate(id, { name, lastname, age }, { new: true });

        if (!person) {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }

        req.person = person;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar pessoa', error });
    }
}

export const validateDelete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const person = await Person.findByIdAndDelete(id);

        if (!person) {
            res.status(404).json({ message: 'Pessoa não encontrada' });
        }

        req.person = person;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar pessoa', error });
    }
}
