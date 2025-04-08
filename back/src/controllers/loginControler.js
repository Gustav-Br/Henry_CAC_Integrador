const { User } = require('../DB_connection');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;


const loginControler = async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) return res.status(400).send("faltan datos.");

        const user = await User.findOne({ where: { email: email }, });
        if (!user) return res.status(404).send("Usuario no encontrado.");

        token = jwt.sign({ emai: user.email }, SECRET_KEY, { expiresIn: '15m' });
        console.log(token);
        return user.password === password
            ? res.status(200).json({ "token": token, "userId": user.id })
            : res.status(403).send("Contraseña incorrecta.");

    }
    catch (error) {
        console.log("return catch");
        return res.status(500).send(error.message);
    }

};

module.exports = loginControler;