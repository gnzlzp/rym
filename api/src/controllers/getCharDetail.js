const axios = require("axios");
const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
	const { id } = req.params;
	axios.get(`${URL_BASE}${id}`).then((personaje) => {
		const character = personaje.data;
		if (!character.id) res.status(500).json({error : error.message});
		
		const { id, name, species, image, gender, origin , status} = personaje.data;
		res.status(200).json({ id, name, species, image, gender , origin, status});
	});
};

module.exports = getCharDetail;
