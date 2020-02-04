const restaurants = require('./routes/restaurants')
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/restaurants',restaurants)


const port = process.env.PORT || 3000
const server = app.listen(port, () =>
console.log(`listening on port ${port}`)
);
