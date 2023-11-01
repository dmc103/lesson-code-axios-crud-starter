const axios = require('axios');

//declaring axios instance
// const api = axios.create({
//     baseURL: 'https://ih-crud-api.herokuapp.com',
// });


// api
//     .get('/characters')
//     .then(response => console.log(`All characters are:`, response.data))
//     .catch(error => console.log(error));

// api
//     .get(`/characters/264`)
//     .then(response => console.log(`Character with ID264 is:`, response.data))
//     .catch(error => console.log(error));


class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com',
        });
    }


    getAllCharacters = () => {
        return this.api.get('/characters')
    };

    getOneCharacter = (characterId) => {
        return this.api.get(`/characters/${characterId}`);
    }

    createOneCharacter = (characterInfo) => {
        return this.api.post('/characters', characterInfo);
    }

    editCharacter = (characterId, characterInfo) => {
        return this.api.put(`/characters/${characterId}`, characterInfo);
    }


    deleteCharacter = (characterId) => {
        return this.api.delete(`/characters/${characterId}`);
    }


}

module.exports = ApiService;