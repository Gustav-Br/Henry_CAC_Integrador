const { Favorite } = require('../DB_connection');


const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        const emailUser = req.user.email;

        await Favorite.destroy({ where: { id, emailUser } });

        const allFavor = await Favorite.findAll(
            { where: { emailUser } }
        );
        return res.status(200).json({ allFavor });
    }

    catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = deleteFav;