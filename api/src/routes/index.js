const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const favs = require("../utils/favs");

const router = Router();

router.get("/onSearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", (req, res) => {
	const character = req.body;
	favs.push(character);
	res.status(200).send("Personaje agregado");
});
router.get("/fav", (req, res) => {
	res.status(400).json(favs);
});

module.exports = router;
