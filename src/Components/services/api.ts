import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.pexels.com/v1/search?query=people'
});


export const api = {
    getAllPhotos: async () => {
        let response = await http.get(`/`,{
            headers: {
                Authorization: "API_KEY"
            }
        });
        return response.data;
    }
}

