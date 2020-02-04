## Introduction
Simple node API that displays restaurants based on user location and a query string.

## Setup
Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

**Install Dependencies**

Next, from the project folder, install the dependencies:

    npm i

**Run the tests**

    npm test

All tests should pass.

**Start the server**

    node index.js

This will launch the Node server on port 3000. If that port is busy, you can set a different point by defining a PORT environment variable to a different port.

Open up your browser and head over to:

[http://localhost:3000/restaurants](http://localhost:3000/restaurants)

You should see a list of restaurants. That confirms that you have set up everything successfully.

You can make specific API requests by adding parameters:

 - *q*: query string. Full or partial match for the string is searched from _name_, _description_ and _tags_ fields.
 - _lat_: latitude coordinate (customer's location)
 - _lon_ : longitude coordinate (customer's location)

Example query:

    /restaurants/search?q=sushi&lat=60.17045&lon=24.93147

