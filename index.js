const {createDictionary} = require('./helpers/processRestaurants')
const restaurants = require('./routes/restaurants')
const express = require('express');
const app = express();

createDictionary()
app.use(express.json());
app.use('/restaurants',restaurants)


const port = process.env.PORT || 3000
const server = app.listen(port, () =>
console.log(`Listening on port ${port}`)
);

module.exports = server;
