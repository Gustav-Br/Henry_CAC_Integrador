const { User } = require('../DB_connection');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const bcrypt = require('bcryptjs');


const loginControler = async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) return res.status(400).send("faltan datos.");

        const user = await User.findOne({ where: { email: email }, });
        if (!user) return res.status(404).send("Usuario no encontrado.");

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(403).send("Contraseña incorrecta.");

        token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '20m' });

        return res.status(200).json({ "token": token, "user": user.username, "email": user.email })

    }
    catch (error) {
        console.log("return catch");
        return res.status(500).send(error.message);
    }

};

module.exports = loginControler;