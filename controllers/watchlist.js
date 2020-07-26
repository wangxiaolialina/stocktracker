var Watchlist = require("../models/watchlist")

module.exports = {
  create,
  update, 
  deleteStock, 
  deleteWatchlist,
}

async function create(req, res) {
  let user = req.user
  let body = req.body


  try {
    await Watchlist.create({
      'user_id': user._id,
      'name': body.name
    });
    res.send(201);
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
  let body = req.body

  try {
    await Watchlist.findOneAndUpdate({ 'user_id': user._id, 'name': req.body.name }, { "$pull": { "stocks": body.symbol }});
    res.send(204);
  } catch (err) {
    res.json({err})
  }
}

async function deleteWatchlist(req, res) {
  let user = req.user
  let body = req.body

  try {
    await Watchlist.deleteOne({ 'user_id': user._id, 'name': req.body.name });
    res.send(204);
  } catch (err) {
    res.json({err})
  }

}