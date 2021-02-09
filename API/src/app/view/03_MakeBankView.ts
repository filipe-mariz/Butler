import MakeBank from '../model/03_MakeBanckUser';

export default {
    Render(makebank: MakeBank) {
        return {
            id: makebank.id,
            butlerCode: makebank.user,
            rg: makebank.rg,
            cpf: makebank.cpf,
            nationality: makebank.nationality,
            url_rg: `http://localhost:3333/uploads/${makebank.path_RG}`, 
            url_cpf: `http://localhost:3333/uploads/${makebank.path_CPF}`,
            url_selfie: `http://localhost:3333/uploads/${makebank.path_Selfie}`

        }
    }
}