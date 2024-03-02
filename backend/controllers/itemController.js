const Item = require(('../models/Item.js'))

module.exports.updateOrAddItem = async (data) => {
  const doc = await Item.findOneAndUpdate({ pcID: data.pcID }, data, {
    new: true,
    upsert: true
  })
}