import { Express } from 'express';
import express from 'express';
import usuario from './usuario.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/usuario', usuario)
}
