var express = require('express');
var router = express.Router();


stockCtrl = require('../../controllers/stock');


router.get('/companynews/:symbol',stockCtrl.searchNews);
router.get('/:symbol',stockCtrl.search);
router.post('/getAll',stockCtrl.getQuotes);


module.exports = router;