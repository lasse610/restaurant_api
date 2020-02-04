const {getDictValues} = require('./processRestaurants');
const calculateDistance = require('./calculateDistance');


/* 
Handles the search functionality.
Takes in th request.
Returns Array of restaurants to be sent to the client.
Checks distance to the lat-lon pair given in the request.
Checks restaurant's name and tags and compares them to the search query. 
*/
function handleSearch(req) {
    const restaurants = getDictValues();
    const {q,lat,lon} = req.query;
    //test wheter both lat and lon were given
    const location = lat && lon ? [lat,lon] : false
    // if search query is not given we are going to return all restaurants
    const filter = q ? q : '';

    // create a regexp of our search query
    const reqExp = new RegExp(filter,'i')

    const filteredRestaurants = restaurants.filter(obj => {
        let retVal = false;
        if(testIfObjectContains(reqExp,obj)) {
            //if no location is given we allow all restaurants whose name matches the search query pass the filter.
            if(!location) {
                retVal = true;
            //if location is given we only return restaurants close by.
            } else if (testLocation(location,obj)) {
                retVal = true;
            } else {
                retVal = false;
            }
        } 
        //retVal is going to be false for restaurants whose name nor tags match the search query.
        return retVal;   
    })
    return filteredRestaurants;
}

// Checks if restauant's location and client's location is under 3 km
function testLocation(location,obj) {
    const distance = calculateDistance(location,obj.location);
    return distance <= 3;
}

// Checks if restaurants name matches search query
function testIfObjectContains(reqExp,obj){
    return reqExp.test(obj.name) || reqExp.test(obj.tags.toString());
}



module.exports = handleSearch;