const Item = require(('../models/Item.js'))
const catchAsync =  require('../utils/catchAsync.js')

module.exports.updateOrAddItem = async (data) => {
  const doc = await Item.findOneAndUpdate({ pcID: data.pcID }, data, {
    new: true,
    upsert: true
  })
}

module.exports.getGame = catchAsync(async (req, res, next) => {
  const doc = req.query.upc ?
   await Item.findOne({upc: req.query.upc})
   :
   await Item.findOne({pcID: req.query.pcID,})

  if (!doc) {
    return res.status(404).send({
      status: "fail",
      message: `No documents found at route: ${req.route}`,
    });
  }
  console.log(doc)
  res.status(200).send({
    status: "success",
    doc,
  });
})

module.exports.getGamesForSystem = catchAsync(async (req, res, next) => {
  const games = await Item.find({consoleName: req.query.system})
  const gameList = games.sort(
    (a,b) => a.productName.toLowerCase().localeCompare(b.productName.toLowerCase())
  )
  console.log(gameList)
  if (!gameList) {
    return res.status(404).send({
      status: "fail",
      message: `No documents found at route: ${req.route}`,
    });
  }
  res.status(200).send({
    status: "success",
    gameList,
  });
})

