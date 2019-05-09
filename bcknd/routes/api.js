var express = require('express');
var router = express.Router();
var menuList = require('../Data/MenuList.json');

/* GET users listing. */
router.get('/getMenuList', function(req, res, next) {
  
  res.send(menuList);
});

module.exports = router;
