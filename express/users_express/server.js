const express = require('express');
const app = express();
const PORT = 8000;

// MIDDLEWARE: make sure these lines are above any app.get or app.post code blocks
// This is needed to have body info to come to the server.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes');
routes(app);

// START SERVER: .listen() has to be at the end of the program.
app.listen(PORT, () => {
  console.log(`Server up on port: ${PORT}`);
});
