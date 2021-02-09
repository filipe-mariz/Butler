import { Router } from 'express';
import multer from 'multer'
import uploadConfig from './config/uploads';
import createUser from './app/controller/01_CreateUser';
import readUser from './app/controller/02_ReadUser';
import updateUser from './app/controller/03_UpdateUser';
import deleteUser from './app/controller/04_DeleteUser';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/createuser', upload.array('image'), createUser.create);
routes.get('/listusers', readUser.view);
routes.get('/listusers/:id', readUser.show);
routes.put('/updateuser/:id', updateUser.update);
routes.delete('/deleteuser/:id', deleteUser.delete);

export default routes;
