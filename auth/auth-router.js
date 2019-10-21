const router = require('express').Router();
const db = require('../auth/auth-model.js');

// router.post('/register', (req, res) => {

// })

router.get('/users', (req, res) => {
  db.findUsers()
    .then(users => {
      res.json({ loggedInUser: req.username, users });
    })
    .catch(err => res.send(err));
});

// router.post('/register', (req, res) => {
//     let user = req.body;
//     const hash = bcrypt.hashSync(user.password, 8)
  
//     user.password = hash; 
  
//     db.add(user)
//     .then(saved => {
//       res.status(201).json(saved);
//     })
//     .catch(error => {
//       console.log(error)
//       res.status(500).json(error);
//     });
//   });

module.exports = router;