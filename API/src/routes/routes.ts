import express from 'express';
import crudUser from './1_CRUDuser';
import crudMB from './2_CRUDmb';

const app = express();

export default app.use(
    crudUser,
    crudMB
);

