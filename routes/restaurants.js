const express = require('express');
const router = express.Router();
const createDictionary = require("../helpers/processRestaurants")

const dict = createDictionary()
console.log('created dict')

router.get("/", async (req, res) => {
    res.send(Object.values(dict))
})

module.exports = router;