import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/register', (req: Request, res: Response) => {
        const { id, nome, sobrenome } = req.body
        res.status(200).send({ response: `${id} — ${nome} ${sobrenome} cadastrado(a) com sucesso!` });
        people.push({ id, nome, sobrenome })
    })
    .get('/usuarios', (req: Request, res: Response) => {
        const people = req.query
        res.status(200).send(people)
    })
    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        res.status(200).send({ response: people[convertedId] });
    })
    .get('/filtro', (req: Request, res: Response) => {
        const { nome, sobrenome } = req.query
        res.status(200).send({ response: `${nome} ${sobrenome}` });
    })
    .put('/atualizar/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, sobrenome } = req.body;

        res.status(200).send({ response: `Atualizando o usuário ${id} -> ${nome} ${sobrenome}` })
    })
    .delete('/deletar/:id', (req: Request, res: Response) => {
        const { id } = req.params;

        res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
    });

export default router;
