const RadiusOfEarth = 6371; // in km


// calculates shortest distance between two lat lon points using 'Haversine' formula
function calculateDistance(coords1,coords2) {
    const R = RadiusOfEarth;
    const lon1 = coords1[0];
    const lat1 = coords1[1];
    
    const lon2 = coords2[0];
    const lat2 = coords2[1];
    
    // Distances between latitudes and longitudes.
    const dLat = degreesToRadians(lat2-lat1);
    const dLon = degreesToRadians(lon2-lon1);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2)  +
    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance;
    
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI/180);
}


module.exports = calculateDistance;