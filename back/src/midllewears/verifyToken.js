const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).send('Token no proporcionado');
    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, decoder) => {

        if (err) return res.status(403).send('Token invalido');
        req.user = decoder;
        next();
    })

};

module.exports = verifyToken;