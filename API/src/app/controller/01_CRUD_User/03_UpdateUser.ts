import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../model/01_UserModel';

export default {
    async update(request: Request, response: Response) {
        const user = await getRepository(User).findOne(request.params.id);

        if(user) {
            getRepository(User).merge(user, request.body);
            const results = await getRepository(User).save(user);
            return response.json(results);
        };

        return response.status(404).json({ err: "user not found" });
    } 
}
