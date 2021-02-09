import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import User from '../model/01_UserModel';
import Image from '../model/02_ImageModel';
import UserView from '../view/01_UserView';
import ImageView from '../view/02_ImageView';
import * as Yup from 'yup';
import { View } from 'typeorm/schema-builder/view/View';

export default {
    async view(request: Request, response: Response) {
        const userRepository = getRepository(User);

        const user = await userRepository.find({
            relations: ['image']
        });

        return response.json(UserView.renderMany(user));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params
        
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(id, {
            relations: ['image']
        });

        return response.json(UserView.Render(user));

    }
}