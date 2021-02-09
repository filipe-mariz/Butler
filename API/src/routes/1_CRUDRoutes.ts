import { Router } from 'express';
import multer from 'multer'
import uploadConfig from '../config/uploads';
import createUser from '../app/controller/CRUD_User/01_CreateUser';
import readUser from '../app/controller/CRUD_User/02_ReadUser';
import updateUser from '../app/controller/CRUD_User/03_UpdateUser';
import deleteUser from '../app/controller/CRUD_User/04_DeleteUser';

const crud = Router();
const upload = multer(uploadConfig);

crud.post('/createuser', upload.array('image'), createUser.create);
crud.get('/listusers', readUser.view);
crud.get('/listusers/:id', readUser.show);
crud.put('/updateuser/:id', updateUser.update);
crud.delete('/deleteuser/:id', deleteUser.delete);

export default crud;