const { User } = require('../DB_connection');


const checkUser = async (email, password) => {
    console.log(email,  "checkUser");
        console.log(password, "checkUser");
    try {
        
        if (!email || !password) return res.status(400).send("faltan datos.")
        console.log("checkUser 10");
        const user = await User.findOrCreate({ where: { email: email },});
        console.log("checkUser 12");
        if (!user) return res.status(404).send("Usuario no encontrado.");
        console.log("checkUser return");
        return (user.password === password) 
            ? res.status(200).json({ access: true })
            : res.status(403).send("Contraseña incorrecta.");

        } catch (error) {
            console.log("return catch");
            return res.status(500).send(error.message);
        }
    };

module.exports = checkUser;