const request = require('request')
const fs = require('fs')
const {parse} = require('csv-parse')
const Item = require(('./models/Item.js'))
const { createItemObject } = require('./utils/itemObject.js')
const { updateOrAddItem } = require('./controllers/itemController.js')


module.exports.updateDatabase = () => {
  const url = `https://www.pricecharting.com/price-guide/download-custom?t=${process.env.PRICE_CHARTING_KEY}`

  console.log("Making request")
  request(url)
    .pipe(fs.createWriteStream('gamePrices.csv'))
    .on('finish', () => {
      console.log("CSV Downloaded Successfully")
      fs.createReadStream('./gamePrices.csv')
        .pipe( parse({delimiter: ','}) )
        .on('data', (row) => {
          let dataObject = createItemObject(row)
          updateOrAddItem(dataObject)
        })
        .on('end', () => {
          fs.unlink('./gamePrices.csv', () => {
            console.log('CSV has been deleted')
          })
        })
        .on('error', (err) => {
          console.error(err)
        })
    })
    .on('error', (err) => {
      console.error(err)
    })
}



