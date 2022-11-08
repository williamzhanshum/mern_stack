const express = require('express');
const app = express();
const PORT = 8000;

// --- MIDDLEWARE ---
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json(), express.urlencoded({ extended: true }));
// Same as above.
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

require('./config/dbConfig');

app.listen(PORT, () => console.log(`Server up on port: ${PORT}`));
