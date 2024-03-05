const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
const schedule = require('node-schedule');
const { updateDatabase } = require('./updateDatabase.js');
const cors = require('cors');
const { checkForData } = require('./controllers/itemController.js');
const Item = require(('./models/Item.js'));


app.use(cors());
app.use(express.json());


const { MONGOHOST, MONGOUSER, MONGOPASSWORD } = process.env;
const db = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}`;

mongoose.connect(db).then(() => {
  console.log('Database Connnected');
});


const thereIsData = (async () => {
  const dataPresent = await Item.findOne({pcID: '3269138'});
  if(!dataPresent) {
    updateDatabase();
  }
})();


const rule = new schedule.RecurrenceRule();
rule.hour = 3;
rule.minute = 30;
rule.tz = 'EST';

schedule.scheduleJob(rule, () => {
  console.log('Requesting Data');
  updateDatabase();
})

const itemRouter = require('./routes/itemRoutes.js');

app.use('/', itemRouter);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});