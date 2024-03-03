const express = require("express");
const app = express()
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose')
const schedule = require('node-schedule')
const { updateDatabase } = require('./updateDatabase.js')
const cors = require('cors');


app.use(cors());
app.use(express.json());

const { MONGOHOST, MONGOUSER, MONGOPASSWORD } = process.env
const db = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}`

mongoose.connect(db).then(() => {
  console.log('Database Connnected')
})

const rule = new schedule.RecurrenceRule();
rule.hour = 5
rule.minute = 52
rule.tz = 'EST'

const job = schedule.scheduleJob(rule, () => {
  updateDatabase()
})

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});