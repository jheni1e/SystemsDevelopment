import express, { Router } from 'express';
import PersonController from '../controllers/personController.ts';
import { validateDelete, validateRegister, validateUpdate } from '../middlewares/personMiddleware.ts';

const router: Router = express.Router();

router
    .get('/people', PersonController.getUsers)
    .post('/register', validateRegister, PersonController.registerUser)
    .put('/:id', validateUpdate, PersonController.updateUser)
    .delete('/:id', validateDelete, PersonController.deleteUser);

export default router;
