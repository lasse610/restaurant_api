const json = require('../data/restaurants.json');


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

    return dictionary
}

module.exports = createDictionary