const express = require('express');
const router = require('express').Router();



//Require and instantiate the API service
const ApiService = require(`../services/api.service`);
const apiService = new ApiService();




//List all the characters from the API
router.get('/movie-characters/list', (req, res, next) => {
    apiService
    .getAllCharacters()
    .then((response) => {
        res.json(response.data);
        res.render(`movie-characters/list`, {characters: response.data});
    })
    .catch((error) => {
        next(console.log(error));
    });
});


//Render a form to create a new character
router.get(`/movie-characters/create`, (req, res, next) => {
    res.render(`movie-characters/create`);
});



//To submit info to create a new character
router.post(`/movie-characters/create`, (req, res, next) => {
    const characterInfo = req.body;

    apiService
    .createOneCharacter(characterInfo)
    .then((response) => {
        res.json(response.data);
        res.redirect(`/movie-characters/list`);

    })
    .catch((error) => {
        next(console.log(error));
    });

});


//Render a form to edit a character
router.get(`/movie-characters/edit/:id`, (req, res, next) => {
    const characterId = req.params.id;

    apiService
    .getOneCharacter(characterId)
    .then((response) => {
        res.json(response.data);
        res.render(`movie-characters/edit`, {character: response.data});
    })
    .catch((error) => {
        next(console.log(error));
    });
});
   



//Submit info to edit a character with matching id
router.post(`/movie-characters/edit/:id`, (req, res, next) => {
    const characterId = req.params.id;
    const characterInfo = req.body;

    apiService
    .editCharacter(characterId, characterInfo)
    .then((response) => {
        res.json(response.data);
        res.redirect(`/movie-characters/list`);
    })
    .catch((error) => {
        next(console.log(error));
    });
});


//Delete a character with matching id
router.get(`/movie-characters/delete/:id`, (req, res, next) => {
    const characterId = req.params.id;


    apiService
    .deleteCharacter(characterId)
    .then((response) => {
        res.json(response.data);
        res.redirect(`/movie-characters/list`);
    })
    .catch((error) => {
        next(console.log(error));
    });
    
});


module.exports = router;