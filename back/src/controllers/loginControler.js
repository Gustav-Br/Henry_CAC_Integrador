const checkUser = require("../service/userService");

const loginControler = async (req, res) => {
    const { email, password } = req.body;

    try {
        const login = await checkUser(email, password);
        res.status(200).json({ login });
    } 
    catch(error) {
        res.status(401).json({error: "login incorrecto" });
    }
};

module.exports = loginControler;