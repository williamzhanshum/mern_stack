const express = require('express');
const app = express();
const port = 8000;

const testObj = {
  status: 'ok',
  message: true,
  code: 200,
  other: "you're cool",
};
// get method takes in 2 parameters, 1. a string (route), 2. callback funtion (takes in request and response)
// This server can repsond back to the client (responseObj)
// Traditionally you want to have a '/api' route to denote that it is a server route.
app.get('/api', (requestObj, responseObj) => {
  //   console.log(requestObj);
  responseObj.send('Hello from server.js');
});

// .send() Only sends text information
// .json()
app.get('/api/hello', (req, res) => {
  res.json(testObj);
});

// Listen for the 'port' and use that port to create a server
app.listen(port, () =>
  console.log(
    `Server is up on port: ${port} and is listening for REQests to RESpond to`
  )
);
