const router = require('express').Router();
const db = require('../auth/auth-model.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken.js');
const validateToken = require('../middleware/validateToken.js');



router.get('/users', validateToken, (req, res) => {
  db.findUsers()
    .then(users => {
      res.json({ loggedInUser: req.username, users });
    })
    .catch(err => res.send(err));
});

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8)
  
    user.password = hash; 
  
    db.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    });
  });

  router.post("/login", (req, res) => {
    let { email, password } = req.body;
  
    if (email && password) {
      db.findBy({ email })
        .first()
        .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `Welcome ${user.first_name}`, token });
          } else {
            res.status(401).json({ message: "Incorrect email or password" });
          }
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ message: `server error ${error}` });
        });
    } else {
      res.status(400).json({ message: `username and password required` });
    }
  });

module.exports = router;