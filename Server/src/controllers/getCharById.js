const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    
    const { id } = req.params;
    
    try {
        const {data} = await axios(`${URL}${id}`)
        
            const character = {
                id: data.id, 
                name: data.name, 
                gender: data.gender, 
                species: data.species, 
                origin: data.origin, 
                image: data.image, 
                status: data.status
            }
            
            character.name
            ? res.status(200).json(character)
            : res.status(404).send('Not found')
            
        
    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = getCharById;