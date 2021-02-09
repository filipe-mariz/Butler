import ImageUser from '../model/02_ImageModel';

export default {
    Render(imageUser: ImageUser) {
        return {
            id: imageUser.id,
            url: `http://localhost:3333/uploads/${imageUser.path}`
        }
    },
    
    renderMany(imageUser: ImageUser[]) {
        return imageUser.map(imageUser => this.Render(imageUser))
    }
}