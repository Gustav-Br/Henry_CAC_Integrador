const checkUser = require("../service/userService");
const { User } = require('../DB_connection');


const loginControler = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    try {
        const login = await checkUser(email, password);
        res.status(200).json({ login });
    } 
    catch(error) {
        res.status(401).json({error: "login incorrecto" });
        console.log("Salio por este error");
    }
};

module.exports = loginControler;