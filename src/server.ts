import express, { request, response } from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração Específica
 */

 app.get("/", (request, response) => {
     return response.json({ message: "Hello World" });
 });

 app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram enviados com sucesso!" });
 })

app.listen(3333, () => console.log("Server is running!"));