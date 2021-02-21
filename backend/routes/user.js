const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/signup', (req, res, next) => {
  const user = new User({
    email: req.body.email,
    //! NEED TO ADD ENCRYPTON TO PASSWORD
    password: req.body.password
  })
});

module.exports = router;
