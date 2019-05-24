const express = require('express');
const Users = require('./users-model');
const router = express.Router();
const { authenticate } = require('../auth/protected_middleware');

router.get('/', authenticate, (req, res) => {
    Users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => res.send(err));
});

module.exports = router;