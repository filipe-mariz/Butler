import { Router } from 'express';
import multer from 'multer'
import uploadConfig from '../config/uploads';
import createUser from '../app/controller/01_CRUD_User/01_CreateUser';
import readUser from '../app/controller/01_CRUD_User/02_ReadUser';
import updateUser from '../app/controller/01_CRUD_User/03_UpdateUser';
import deleteUser from '../app/controller/01_CRUD_User/04_DeleteUser';

const crudUser = Router();
const upload = multer(uploadConfig);

crudUser.post('/createuser', upload.array('image'), createUser.create);
crudUser.get('/listusers', readUser.view);
crudUser.get('/listusers/:id', readUser.show);
crudUser.put('/updateuser/:id', updateUser.update);
crudUser.delete('/deleteuser/:id', deleteUser.delete);

export default crudUser;