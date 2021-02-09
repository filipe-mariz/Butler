import User from '../model/01_UserModel'
import imageView from './02_ImageView';

export default {
    Render(user: User) {
        return {
            id: user.id,
            firstName: user.firstName,
            secondName: user.secondName,
            born: user.born,
            sex: user.sex,
            email: user.email,
            uf: user.uf,
            city: user.city,
            userName: user.userName,
            images: imageView.renderMany(user.image)
        }
    },

    renderMany(user: User[]) {
        return user.map(user => this.Render(user))
    }
}