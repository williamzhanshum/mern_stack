const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'ninjas';

// --- MIDDLEWARE ---
app.use(cors()); // If you are deploying, this method of deploying cors is not correct. This way anyone can access the server. You need to input an obj of validations inside of cors() to limit who can access the server.
/* Example:
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
}))
*/
app.use(express.json(), express.urlencoded({ extended: true }));

// CONNECTED to the DB using mongoose
// Code below is invoking the function with mongoose.conect().
// The (DB) allows us to pass in the name of the db to the other file.
require('./config/mongoose.config')(DB);

// ---- import the routes AFTER THE DB connections ----
require('./routes/ninja.routes')(app);

// START SERVER
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`));

/*
---- REVIEW ORDER OF OPERATIONS ----
1) When we run the server, server.js is the only file that nodemon keeps eyes on
2) server.js says require mongoose to connect to the DB
    a) Once connected, it requires the routes
3) If a route is found, then execute the function (getAll, update, delete, etc.)
4) Function is a query to the DB (promise). 
    a) If successful respond to user with (res.json(*what will be sent to the browser*))
5) If successful, controller will send it back to routes, which will send back to server.js which will respond to the client (front-end)
*/
