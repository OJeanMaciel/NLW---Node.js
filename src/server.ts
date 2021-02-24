import 'reflect-metadata';
import express from 'express';

import './database';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);
/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração Específica
 */
app.listen(3333, function () {
    console.log('Server is running!');
  });