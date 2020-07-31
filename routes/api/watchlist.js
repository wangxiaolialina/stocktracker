var express = require('express');
var router = express.Router();

watchlistCtrl = require('../../controllers/watchlist');

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', checkAuth, watchlistCtrl.get);
router.post('/', checkAuth, watchlistCtrl.update);
router.delete('/:symbol', checkAuth, watchlistCtrl.deleteStock)
router.delete('/', checkAuth, watchlistCtrl.deleteWatchlist);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
if (req.user) return next();
return res.status(401).json({msg: 'Not Authorized'});
}
module.exports = router;