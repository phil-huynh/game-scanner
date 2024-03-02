const express = require("express");
const app = express()
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const csvJob = require('./priceChartingData.js')
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());

const { MONGOHOST, MONGOUSER, MONGOPASSWORD } = process.env
const db = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}`

mongoose.connect(db).then(() => {
  console.log('Database Connnected')
})


// const getPriceChartingData = require('./getPriceCharting.js')

// const schedule = require('node-schedule')

// const rule = new schedule.RecurrenceRule();
// rule.hour = 4;
// rule.tz = 'EST'

// const job = schedule.scheduleJob(rule, () => {
//   console.log("job is running")
//   getPriceChartingData.getData()
//   console.log("after fetch") tn
// })


const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});