import express from 'express';
import crud from './1_CRUDRoutes';

const app = express();
export default app.use(crud);
