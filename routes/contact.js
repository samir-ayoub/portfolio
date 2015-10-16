var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact/index', { title: 'Contato', current_page: 'contact' });
});

module.exports = router;
