const express = require('express');
const router = express.Router();
const DietController = require('../controllers/dietController.js')



router.get('/') 
//router.post('/login',  decodeToken, DietController.login)
router.get('/user', DietController.getUserByMail)  //home del user

module.exports = router;