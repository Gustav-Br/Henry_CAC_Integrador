const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    try {
        const { email, password, user } = req.body;
        if (!email || !password || !user) return res.status(400).send('Faltan datos.')

        const existingEmail = await User.findOne({ where: { email } });
        if (existingEmail) return res.status(400).send('El email ya está registrado.');

        const newUser = await User.create({ email: email, password: password, user: user });
        return res.status(200).json(newUser);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = { postUser };