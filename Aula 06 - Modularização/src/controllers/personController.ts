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
        const { person } = req;

        if (!person) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }

        res.status(200).json({response: "Pessoa atualizada com sucesso!"});
    }

    static async deleteUser(req: Request, res: Response) {
        const { person } = req;

        if (!person) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }

        res.status(200).json({response: "Pessoa deletada com sucesso!"});
    }
}

export default PersonController;
