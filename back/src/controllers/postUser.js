const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send('Faltan datos.')

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).send('El usuario ya existe.');

        const newUser = await User.create({ email: email, password: password });
        return res.status(200).json(newUser);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = { postUser };