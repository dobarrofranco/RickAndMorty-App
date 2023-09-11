let myFavorites = [];

const postFav = (req, res) => {
    const id = req.body;
    
    myFavorites.push(id);

    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    // const characterFiltered = myFavorites.filter( (favorite) => favorite.id !== Number(id)); 
    // todos menos el que queremos eliminar queda en "characterFiltered" y por lo tanto se va de myFavorites (En esencia no lo estamos eliminando, estamos creando un nuevo arreglo);

    myFavorites = myFavorites.filter( (favorite) => favorite.id !== Number(id));
    
    //? Pisamos el mismo arreglo, myFavorites va a ser igual a todos los id menos el que le estamos pasando por parámetro. 

    return res.status(200).json(myFavorites);
}

module.exports = {postFav, deleteFav};