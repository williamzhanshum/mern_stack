const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 8000;
const DB = 'people_db';

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }));

// CONNECTING TO DB: reuire() returns module.exports = function.
require('./config/mongoose.config')(DB);

//Connecting to ROUTES
require('./routes/person.routes')(app);

// START SERVER
app.listen(PORT, () => console.log(`Server is listening on server ${PORT}`));
