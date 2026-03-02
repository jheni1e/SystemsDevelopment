import express, { Router } from 'express';
import PersonController from '../controllers/personController.ts';

const router: Router = express.Router();

router
    .get('/people', PersonController.getUsers)
    .post('/register', PersonController.registerUser)
    .put('/person/:id', PersonController.updateUser)
    .delete('/person/:id', PersonController.deleteUser);

export default router;
