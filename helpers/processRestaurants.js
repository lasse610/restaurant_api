const json = require('../data/restaurants.json');
let dict;

function createDictionary() {
    const restaurants = json.restaurants
    const dictionary =  {};
    /*
    Save restaurants to a dictionary where name is key and restaurant object is value.
    Allows for fast lookup.
    */
    for(let i in restaurants) {
        dictionary[restaurants[i].name] = restaurants[i]
    }

    dict = dictionary
    console.log("Dictionary Created")
}

function getDict() {
    return dict
}

function getDictValues() {
    return Object.values(dict)
}

module.exports = {getDict,getDictValues, createDictionary}