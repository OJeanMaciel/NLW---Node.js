import "reflect-metadata";
import express, { Router } from "express";
import  createConnection from "./database";


createConnection();
export const app = express();

app.use(express.json());
app.use(Router);

