import express, { Request, Response, Router } from 'express';

interface User {
    id: number;
    nome: string;
    email: string;
    tipo: "aluno" | "professor" | "coordenador";
    ativo: boolean;
    createdAt: Date;
}

const router: Router = express.Router();
const users: User[] = [];

router
    .post('/usuarios', (req: Request, res: Response) => {
        const { id, nome, email, tipo } = req.body

        res.status(200).send({ response: `${nome} cadastrado(a) com sucesso!` });

        users.push({
            id, nome, email,
            tipo, ativo: true,
            createdAt: new Date()
        })
    })
    .get('/usuarios', (req: Request, res: Response) => {
        res.status(200).send({ response: users })
    })
    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        const person = users.find(person => (person as { id: number }).id === convertedId);

        if (!person) {
            return res.status(404).send({ response: `Usuário com id ${id} não encontrado.` });
        }

        res.status(200).send({ response: person });
    })
    .get('/usuario', (req: Request, res: Response) => {
        const { id, nome, sobrenome } = req.query
        let convertedId = Number(id)
        const person = users.find(person => (person as { id: number }).id === convertedId
            && (person as { nome: string }).nome === nome);

        if (!person) {
            return res.status(404).send({ response: `Usuário com id ${id} não encontrado.` });
        }

        res.status(200).send({ response: person });
    })
    .put('/atualizar/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, sobrenome } = req.body;

        let convertedId = Number(id)
        const person = users.find(person => (person as { id: number }).id === convertedId);

        if (!person) {
            return res.status(404).send({ response: `Usuário com id ${id} não encontrado.` });
        }

        (person as { nome: string, sobrenome: string }).nome = nome;
        (person as { nome: string, sobrenome: string }).sobrenome = sobrenome;

        res.status(200).send({ response: `Usuário ${id} atualizado para ${nome} ${sobrenome}.` })
    })
    .delete('/deletar/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        let convertedId = Number(id)

        const personIndex = users.findIndex(person => (person as { id: number }).id === convertedId);
        users.splice(personIndex, 1);

        res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
    });

export default router;
