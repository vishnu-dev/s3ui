var express = require('express');
var router = express.Router();
var aws

/* GET config. */
router.get('/', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(JSON.stringify(req.app.get('conf')));
});

module.exports = router;
