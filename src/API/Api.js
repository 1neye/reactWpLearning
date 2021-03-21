import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'http://reactwp/wp-json/wp/v2/posts/'
})


export const serverApi = {
    getPost() {
        return instance.get(``).then(response => {
            return response.data;
        });
    }
}

