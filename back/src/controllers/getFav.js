const { Favorite } = require('../DB_connection');


const getFav = async (req, res) => {
    try {
        const allFavor = await Favorite.findAll();
        return res.status(200).json({ allFavor });

    }
    catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getFav;