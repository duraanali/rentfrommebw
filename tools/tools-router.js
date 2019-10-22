const router = require('express').Router();
const db = require('../tools/tools-model.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken.js');
const validateToken = require('../middleware/validateToken.js');

router.get("/", (req, res) => {
  db.findTools()
    .then(tools => {
      res.status(200).json(tools);
    })
    
    .catch(err => res.status(500).json(console.log(err), err));
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.findToolsById(id)
    .then(tools => {
        const tool = tools[0];
        if (tool) {
            res.status(200).json(tool);
        } else {
            res.status(500).json({ error: `listing with id ${id} does not exist`})
        }
    })
    .catch(err => res.send(err));
})

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (user) {
        db.findToolsByUser(id).then(tools => {
          if (tools.length) {
            res.status(200).json(tools);
          } else {
            res
              .status(404)
              .json({ message: "This user does not have any tools for rent" });
          }
        });
      } else {
        res.status(404).json({ message: `User ${id} does not exist` });
      }
    })
    .catch(err => res.send(console.log(err)));
});

router.post('/', (req, res) => {
    
})

module.exports = router;
