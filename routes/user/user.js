const express = require('express');
const router = express.Router();
const user = require('./userService');

router.route('/')
    .post(user.createUser)
    .get(user.readUser)
    .put(user.updateUser)
    .delete(user.deleteUser);

module.exports = router;