export const api = {
    getAllPhotos: async () => {
        let response = await 
        fetch("https://api.pexels.com/v1/search?query=people",{
            headers: {
             Authorization: '563492ad6f91700001000001623b9853bf6e460eb6ef3ad569eb07e8'
            }
        });
        let json = await response.json();
        return json;
    }
}