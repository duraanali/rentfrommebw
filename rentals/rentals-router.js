const router = require('express').Router();
const db = require('../tools/tools-model.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken.js');
const validateToken = require('../middleware/validateToken.js');
const rentaldb = require('../rentals/rentals-model.js');

router.get("/", (req, res) => {
  rentaldb.find()
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