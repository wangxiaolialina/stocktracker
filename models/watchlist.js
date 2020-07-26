const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchlistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    stocks: {type: Array},
    user_id: {type: Schema.Types.ObjectId, ref: 'User'}
  }
);

module.exports = mongoose.model('watchlist', watchlistSchema);