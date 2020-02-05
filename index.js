const config = require('config');
const express = require('express');
const {createDictionary} = require('./helpers/processRestaurants');
const restaurants = require('./routes/restaurants');
const app = express();

createDictionary();
app.use(express.json());
app.use('/restaurants',restaurants);


const port = process.env.PORT || config.get('PORT');
const server = app.listen(port, () =>
console.log(`Listening on port ${port}`)
);

module.exports = server;
