import { Request, Response } from "express";
import Person from "../models/person.ts";

class PersonController {
    static async getUsers(req: Request, res: Response) {
        const users = await Person.find();
        return res.status(200).send({ response: users });
    }

    static async registerUser(req: Request, res: Response) {
        const { name, lastname, age } = req.body;

        try {
            const person = new Person({ name, lastname, age });
            await person.save();
            res.status(201).json(person);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar pessoa', error });
        }
    }

    static async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { name, lastname, age } = req.body;

        try {
            const person = await Person.findByIdAndUpdate(id, { name, lastname, age }, { new: true });
            if (!person) {
                res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            res.status(200).json(person);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar pessoa', error });
        }
    }

    static async deleteUser(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const person = await Person.findByIdAndDelete(id);
            if (!person) {
                res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            res.status(200).json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar pessoa', error });
        }
    }
}

export default PersonController;
