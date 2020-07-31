var Watchlist = require("../models/watchlist")

module.exports = {
  get,
  update, 
  deleteStock, 
  deleteWatchlist,
}

async function get(req, res) {
  let user = req.user

  try {
    let watchlist = await Watchlist.findOne({
      'user_id': user._id
    });
    
    res.status(200).json(watchlist);
  } catch (err) {
    res.json({err});
  }
}

async function update(req, res) {
  let user = req.user
  let body = req.body

  try {
    await Watchlist.findOneAndUpdate({ 'user_id': user._id, 'name': req.body.name }, { "$push": { "stocks": body.symbol }});
    res.send(202);
  } catch (err) {
    res.json({err})
  }
}

async function deleteStock(req, res) {
  let user = req.user
  let symbol = req.params.symbol

  try {
    await Watchlist.findOneAndUpdate({ 'user_id': user._id, 'name': req.body.name }, { "$pull": { "stocks": symbol }});
    res.send(204);
  } catch (err) {
    res.json({err})
  }
}

async function deleteWatchlist(req, res) {
  let user = req.user
  let body = req.body

  try {
    await Watchlist.findOneAndUpdate({ 'user_id': user._id, 'name': req.body.name }, {stocks: []});
    res.send(204);
  } catch (err) {
    res.json({err})
  }

}