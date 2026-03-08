const express = require('express');
const router = express.Router();

const router = express.Router();

const users = [
  { id: 101, name: "Petar", lastName: "Nankovski" },
  { id: 102, name: "Viktor", lastName: "Nankovski" },
  { id: 103, name: "Jovan", lastName: "Jovanov" },
];

/* GET users listing. */
router.get('/', function (req, res) {
  res.json(users);
});

router.get('/:name', function (req, res) {
  console.log("Name: " + req.params.name);
  const user = users.filter(function (user) {    // array of users that fulfill the condition
      if (user.name.toLowerCase() == req.params.name) {
          return true;
      }
  });

  if (user.length == 1) {
      res.json(user[0])
  } else {
      res.status(404);  //Set status to 404 as user was not found
      res.json({ message: "Not Found" });
  }
});

router.post('/', function (req, res) {
  //Check if all fields are provided and are valid:
  if (!req.body.name ||
      !req.body.lastName) {

      res.status(400);
      res.json({ message: "Bad Request" });
  } else {
      const newId = users[users.length - 1].id + 1;
      users.push({
          id: newId,
          name: req.body.name,
          lastName: req.body.lastName
      });
      res.json({ message: "New user created.", location: "/users/" + newId });
  }
});

module.exports = router;
