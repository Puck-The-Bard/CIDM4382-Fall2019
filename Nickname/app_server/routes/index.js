var express = require('express');
var router = express.Router();

/* CONTROLLERS */
const homepageController = (req, res) => {
  res.render('index', { title: 'Nickname Generator' });
};

/* GET home page. */
router.get('/', homepageController);

module.exports = router;
