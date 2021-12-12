export const api = {
    getAllPhotos: async () => {
        let response = await 
        fetch("https://api.pexels.com/v1/search?query=people",{
            headers: {
             Authorization: 'API_KEY'
            }
        });
        let json = await response.json();
        return json;
    }
}