const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');

//Door
router.get('/', ensureAuthenticated, function(req, res){
  res.render('dash/index')
});
module.exports = router;