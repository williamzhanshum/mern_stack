const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'peopedb';

app.use(cors());

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }));

// CONNECT TO DB
require('./server/config/mongoose.config')(DB);

// Import ROUTES
require('./server/routes/person.routes')(app);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
