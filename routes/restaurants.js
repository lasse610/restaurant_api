const express = require('express');
const router = express.Router();
const {getDictValues} = require('../helpers/processRestaurants')
const handleSearch = require('../helpers/handleSearch')

router.get('/', async (req, res) => {
    res.send(getDictValues());
})

router.get('/search', async(req,res) => {
    const result = handleSearch(req)
    res.send(result);
})

module.exports = router;