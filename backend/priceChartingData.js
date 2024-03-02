const schedule = require('node-schedule')
const request = require('request')
const fs = require('fs')
const {parse} = require('csv-parse')
const Item = require(('./models/Item.js'))
const { createItemObject } = require('./utils/itemObject.js')
const { updateOrAddItem } = require('./controllers/itemController.js')

const url = `https://www.pricecharting.com/price-guide/download-custom?t=${process.env.PRICE_CHARTING_KEY}`


const rule = new schedule.RecurrenceRule();
rule.hour = 3
rule.minute = 16
rule.tz = 'EST'

const job = schedule.scheduleJob(rule, () => {
  console.log("Making request")
  request(url)
    .pipe(fs.createWriteStream('gamePrices.csv'))
    .on('finish', () => {
      console.log("CSV Downloaded Successfully")
      fs.createReadStream('./gamePrices.csv', {start: 2})
        .pipe( parse({delimiter: ','}) )
        .on('data', async (row) => {
          let dataObject = createItemObject(row)
          await updateOrAddItem(dataObject)
        })
        .on('finish', () => {
          try {
            fs.unlink('./gamePrices.csv')
            console.log('CSV has been deleted')
          } catch(err) {
            console.error(err)
          }
        })
        .on('error', (err) => {
          console.error(err)
        })
    })
    .on('error', (err) => {
      console.error(err)
    })
})


