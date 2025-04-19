const { Favorite } = require('../DB_connection');


const postFav = async (req, res) => {

    try {

        const { id, name, origin, status, image, species, gender } = req.body;
        const email = req.user.email;

        if (!name || !origin || !status || !image || !species || !gender)
            return res.status(401).send("Faltan datos.");

        await Favorite.findOrCreate({
            where: { id, name, origin, status, image, species, gender, email }
        });

        const allFavor = await Favorite.findAll();
        return res.status(200).json({ allFavor });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postFav;
