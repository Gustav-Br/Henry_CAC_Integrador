const { Router } = require('express');
const getCharacterById = require('./controllers/characterController');
const loginControler = require('./controllers/loginControler');


const router = Router();

router.get('/character/:id', getCharacterById); 
router.post('/', loginControler);

module.exports = router;