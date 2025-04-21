const { Favorite } = require('../DB_connection');


const getFav = async (req, res) => {
    try {

        const emailUser = req.user.email;
        console.log("email: ", emailUser);

        const allFavor = await Favorite.findAll(
            { where: { emailUser } }
        );
        return res.status(200).json({ allFavor });

    }
    catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getFav;