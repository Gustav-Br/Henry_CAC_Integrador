const { User } = require('../DB_connection');


const loginControler = async (req, res) => {
    const { email, password } = req.body;
    try {
        
        if (!email || !password) return res.status(400).send("faltan datos.");

        const user = await User.findOne({ where: { email: email },});
        if (!user) return res.status(404).send("Usuario no encontrado.");

        return user.password === password 
            ? res.status(200).json({ access: true }) 
            : res.status(403).send("Contraseña incorrecta.");

        } 
    catch (error) {
        console.log("return catch");
        return res.status(500).send(error.message);
        } 
        
};

module.exports = loginControler;