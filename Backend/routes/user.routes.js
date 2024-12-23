const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');


router.post('/register', [
    body('email').isEmail().withMessage("invalid"),
    body('fullname.firstname').isLength({min:3}).withMessage('must be of 3 min char'),
    body('password').isLength({min: 6}).withMessage('must be 6 letters long'),

],
  userController.registerUser
)

module.exports = router;

