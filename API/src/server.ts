import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import path from 'path';
import './database/connection';
import routes from './routes/routes';
import errorHandler from './errors/handler';
import cors from 'cors'
import 'reflect-metadata';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

console.log('server is on'); 

app.listen(3333);
