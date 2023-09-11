const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {

    const { id } = req.params;

    axios(`${URL}${id}`)
    .then( response => {
        const {id , name, gender, species, origin, image, status} = response.data;

        res
        .status(200)
        .json({id , name, gender, species, origin, image, status})
    
    })
    
    .catch( (error) => {
        res
        .status(500)
        .json(error.message)
    })

}

module.exports = getCharById;