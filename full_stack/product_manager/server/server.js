const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 8000;
const DB = 'products_db';

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }));

// CONNECTING TO DB: reuire() returns module.exports = function.
require('./config/mongoose.config')(DB);

//Connecting to ROUTES
require('./routes/product.routes')(app);

// START SERVER
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
