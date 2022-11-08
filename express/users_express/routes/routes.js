console.log('Hello routes.js');
const users = [
  { firstName: 'Reimu', lastName: 'Hakurei' },
  { firstName: 'Marisa', lastName: 'Kirisame' },
  { firstName: 'Sanae', lastName: 'Kochiya' },
  { firstName: 'Sakuya', lastName: 'Izayoi' },
  { firstName: 'Momiji', lastName: 'Inubashiri' },
];

module.exports = (app) => {
  // READ ALL
  // The /api tell us its a server route
  app.get('/api/users', (req, res) => {
    res.json({
      users: users,
      status: 'ok',
    });
  });

  // READ ONE
  // Getting a single user: Make a request form browser to get an index to return a specific user.
  app.get('/api/users/:idx', (req, res) => {
    //   console.log(req.params.idx); // pulls the idx from the req object
    const { idx } = req.params;
    //   req.json(users[req.param.idx]); // same as below
    res.json(users[idx]);
  });

  // CREATE
  // same route name, becasue .get and .post are different methods.
  app.post('/api/users', (req, res) => {
    console.log(req.body); // this returns {firstName: 'John', lastname: 'Misirlakis'}
    users.push(req.body);
    res.json({
      status: 'ok',
      created: req.body,
    });
  });

  // UPDATE
  app.put('/api/users/:idx', (req, res) => {
    //   console.log(req.body);
    const { idx } = req.params;
    users[idx] = req.body;
    res.json({
      status: 'ok',
      created: req.params,
    });
  });

  // DELETE
  app.delete('/api/users/:id', (req, res) => {
    // we can get this 'id' variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json({ status: 'ok' });
  });
};
