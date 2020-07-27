var express = require('express');
var router = express.Router();

stockCtrl = require('../../controllers/stock');

router.get('/:symbol',stockCtrl.search);

module.exports = router;