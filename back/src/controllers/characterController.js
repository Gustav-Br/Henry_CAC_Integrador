const axios = require('axios');


const getCharacterById = async (req, res) => {
    try{
    const {id} = req.params;
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const resp = response.data;
    res.status(200).json(resp);
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

module.exports = getCharacterById;