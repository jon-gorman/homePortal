const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');
const db = require('../config/secrets');


//Door
router.get('/', ensureAuthenticated, function(req, res){
  var accessId = db.id;
  var accessToken = db.token;
  res.render('door/index', {
    accessId: accessId,
    accessToken: accessToken
  });
});

module.exports = router;