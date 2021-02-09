import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../model/01_UserModel';

export default {
    async delete(request: Request, response: Response) {
        const results = await getRepository(User).delete(request.params.id);

        return response.status(404).json({ message: "user successfully deleted" });
    }
};
