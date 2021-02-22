/*import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import MakeBank from '../../model/03_MakeBanckUser';
import * as Yup from 'yup'; 

export default {
    async create(request: Request, response: Response) {
        const {
            rg,
            cpf,
            nationality,
            } = request.body

        const makebankRepository = getRepository(MakeBank);
        
        const requestImages = request.files as Express.Multer.File[];

        const path_RG = requestImages.map(path_RG => {
            return { path: path_RG.filename }
        })

        const path_CPF = requestImages.map(path_CPF => {
            return { path: path_CPF.filename }
        })

        const path_Selfie = requestImages.map(path_Selfie => {
            return { path: path_Selfie.filename }
        })

        const data = {
            rg,
            cpf,
            nationality,
            path_RG,
            path_CPF,
            path_Selfie
        }

        const schemma = Yup.object().shape({
            rg: Yup.number().required(),
            cpf: Yup.number().required(),
            nationality: Yup.string().required(),
            image1: Yup.array(Yup.object().shape({
                path_RG: Yup.string().required()
            })),
            image2: Yup.array(Yup.object().shape({
                path_CPF: Yup.string().required()
            })),
            image3: Yup.array(Yup.object().shape({
                path_Selfie: Yup.string().required()
            }))            
        })

        await schemma.validate(data, {
            abortEarly: false
        }) 

        const makeBank = makebankRepository.create(data);
        await makebankRepository.save(makeBank);
        response.status(201).json({ makeBank })
    }
}*/
