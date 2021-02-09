import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../../model/01_UserModel';

export default {
    async create(request: Request, response: Response) {
        const {
            firstName,
            secondName,
            born,
            sex,
            email,
            number,
            uf,
            city,
            userName,
            password,
            butlerCode
        } = request.body;

        const userRepository = getRepository(User);
        
        const requestImages = request.files as Express.Multer.File[];
        const image = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            firstName,
            secondName,
            born,
            sex,
            email,
            number,
            uf,
            city,
            userName,
            password,
            butlerCode,
            image
        }

        const schemma = Yup.object().shape({
            firstName: Yup.string().required(),
            secondName: Yup.string().required(),
            born: Yup.string().required(),
            sex: Yup.string().required(),
            email: Yup.string().required(),
            number: Yup.string().required(),
            uf: Yup.string().required(),
            city: Yup.string().required(),
            userName: Yup.string().required(),
            password: Yup.string().required(),
            butlerCode: Yup.number().required(),
            image: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        })

        await schemma.validate(data, {
            abortEarly: false
        })

        const user = userRepository.create(data);
        await userRepository.save(user);
        response.status(201).json({ user })
    }
}
