import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/registrar', (req: Request, res: Response) => {
        const { id, nome, sobrenome } = req.body

        res.status(200).send({ response: `${id} — ${nome} ${sobrenome} cadastrado(a) com sucesso!` });

        people.push({ id, nome, sobrenome })
    })
    .get('/usuarios', (req: Request, res: Response) => {
        const people = req.query

        res.status(200).send({ response: people })
    })
    .get('/usuarios/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        const person = people.find(person => (person as { id: number }).id === convertedId);

        if (!person) {
            return res.status(404).send({ response: `Usuário com id ${id} não encontrado.` });
        }

        res.status(200).send({ response: person });
    })
    .get('/usuario', (req: Request, res: Response) => {
        const { id, nome, sobrenome } = req.query
        let convertedId = Number(id)
        const person = people.find(person => (person as { id: number }).id === convertedId
            && (person as { nome: string }).nome === nome
            && (person as { sobrenome: string }).sobrenome === sobrenome);

        if (!person) {
            return res.status(404).send({ response: `Usuário com id ${id} não encontrado.` });
        }

        res.status(200).send({ response: person });
    })
    .put('/atualizar/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome, sobrenome } = req.body;

        let convertedId = Number(id)
        const person = people.find(person => (person as { id: number }).id === convertedId);

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

        const personIndex = people.findIndex(person => (person as { id: number }).id === convertedId);
        people.splice(personIndex, 1);

        res.status(200).send(`Pessoa com o id: ${id} foi deletada `)
    });

export default router;
