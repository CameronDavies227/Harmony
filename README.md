This appicalction was made with nodemon, react and a number of other third party applications to connect it to a mysql server

There are two ways too run the app either production or development if you run npm runstart and nodemon api/server.js at the same time in two terminals the devlopment version will and api server will allow an easy way to test functionality.

The production model will require to be rebuilt for any changes by running npm run build in the terminal followed by serve -s build which will turn on the production version of the front end you will of course also need nodemon api/server.js on another terminal.