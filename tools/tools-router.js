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


router.post("/", validateToken, (req, res) => {
    const tool = req.body;
  
    if (tool) {
      db.insert(tool)
        .then(tools => {
          res.status(201).json({ message: "Listing created successfully!", tool });
        })
        .catch(err => {
            console.log(err)
          res.status(500).json({
            error: "There was an error creating the tool listing"
          });
        });
    } else {
      res.status(400).json({
        errorMessage: "Please provide all required fields"
      });
    }
  });

  router.put('/:id', validateToken, (req, res) => {
    const changes = req.body;
    db.updateTool(req.params.id, changes)
      .then(tool => {
        if (tool) {
          res.status(200).json({ message: `Tool ${req.params.id} succesfully updated`});
        } else {
          res.status(404).json({ message: 'Tool could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating tool',
        }, error);
      });
  });

  router.delete("/:id", validateToken, (req, res) => {
    const { id } = req.params;
    db.destroy(id)
      .then(tool => {
        if (tool) {
          res.status(200).json({ message: `Tool id ${id} has been destroyed` });
        } else {
          res.status(404).json({
            message: `Tool id ${id} not found`
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "error deleting tool"
        });
      });
  });

module.exports = router;
