/*
 * Connect Endpoints
 */
var users = require('../models/user.js');
var express = require('express'),
    router = express.Router();

// Endpoint
router.get('/users', (req, res) => {
    // TODO: Fill
    users.find().then(res.status(200).json({"data": "back"}))
});

module.exports = router;
