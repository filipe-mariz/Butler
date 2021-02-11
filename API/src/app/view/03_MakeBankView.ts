import MakeBank from '../model/03_MakeBanckUser';

export default {
    Render(makebank: MakeBank) {
        return {
            id: makebank.id,
            rg: makebank.rg,
            cpf: makebank.cpf,
            nationality: makebank.nationality,
        }
    }
}