const express = require('express');
const app = express();
const PORT = 8000;
// Importing the mongoose connect file
require('./server/config/mongoose.config');

// --- MIDDLEWARE ---
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require('./server/routes/jokes.routes');
AllMyJokeRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
