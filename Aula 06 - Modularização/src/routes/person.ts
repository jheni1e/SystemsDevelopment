import express, { Router } from 'express';
import PersonController from '../controllers/personController.ts';

const router: Router = express.Router();

router
    // .post('/register', )
    .get('/people', PersonController.getUsers);
    
export default router;
