import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router.post('/register', (req: Request, res: Response) => {
    const { nome, sobrenome } = req.body
    res.status(200).send(`Pessoa ${nome} ${sobrenome} recebida com sucesso!`);
});

router.get('/getData/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.status(200).send(`Fazendo um get no servidor! id: ${id}`);
});

router.get('/getData', (req: Request, res: Response) => {
    const { nome, sobrenome } = req.query

    res.status(200).send(`Fazendo um GET no servidor! Nome: ${nome}, Idade: ${sobrenome}`);
});

router.put('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, sobrenome } = req.body;

    res.status(200).send(`Pessoa com o id: ${id} foi atualizado para
${nome} ${sobrenome}`)
});

export default router;
