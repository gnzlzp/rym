const axios = require("axios");
const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
	const { id } = req.params;

	axios.get(`${URL_BASE}${id}`).then((personaje) => {
		const character = personaje.data;
		if (!character.id) res.status(400).json({ error: error.message })
		
		const { id, name, species, image, gender} = personaje.data;
		res.status(200).json({ id, name, species, image, gender});
	});
};


module.exports = getCharById
