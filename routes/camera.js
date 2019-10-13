const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');
const secret = require('../config/secrets');


//Camera
router.get('/', ensureAuthenticated, function(req, res){
  var ipAddress = secret.ipAddress;
  res.render('camera/index', {
    ipAddress: ipAddress,

  });
});

module.exports = router;