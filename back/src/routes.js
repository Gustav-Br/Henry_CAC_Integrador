const { Router } = require('express');
const getCharacterById = require('./controllers/characterController');
const loginControler = require('./controllers/loginControler');
const postFav = require('./controllers/postFav');
const deleteFav = require('./controllers/deleteFav');
const { postUser } = require('./controllers/postUser');
const getFav = require('./controllers/getFav');
const verifyToken = require('./midllewears/verifyToken');


const router = Router();

router.get('/character/:id', getCharacterById);
router.post('/register', postUser);
router.post('/login', loginControler);
router.post('/favorite', verifyToken, postFav);
router.get('/favorite', getFav);
router.delete('/delete/:id', deleteFav);

module.exports = router;