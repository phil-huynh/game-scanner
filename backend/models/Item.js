const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  pcID: String,
  consoleName: String,
  productName: String,
  loosePrice: String,
  cibPrice: String,
  newPrice: String,
  gradedPrice: String,
  boxOnlyPrice: String,
  manualOnlyPrice: String,
  gamestopPrice: String,
  gamestopTradePrice: String,
  retailLooseBuy: String,
  retailLooseSell: String,
  retailCibBuy: String,
  retailCibSell: String,
  retailNewBuy: String,
  retailNewSell: String,
  upc: String,
  salesVolume: String,
  genre: String,
  asin: String,
  epid: String,
  releaseDate: String
})

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;