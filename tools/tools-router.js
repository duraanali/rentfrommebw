const router = require('express').Router();
const db = require('../tools/tools-model.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken.js');
const validateToken = require('../middleware/validateToken.js');
const rentaldb = require('../rentals/rentals-model.js');

router.get("/tools", (req, res) => {
  db.findTools()
    .then(tools => {
      res.status(200).json(tools);
    })
    
    .catch(err => res.status(500).json(console.log(err), err));
});

router.get("/tools/:id", (req, res) => {
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

router.get("/tools/user/:id", (req, res) => {
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


router.post("/tools", validateToken, (req, res) => {
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

  router.put('/tools/:id', validateToken, (req, res) => {
    const changes = req.body;
    db.updateTool(req.params.id, changes)
      .then(tool => {
        if (tool) {
          res.status(200).json({ message: `Tool ${req.params.id} succesfully updated`});
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating tool',
        }, error);
      });
  });

  router.delete("/tools/:id", validateToken, (req, res) => {
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


  router.get("/rentals", validateToken,  (req, res) => {
    rentaldb.find()
      .then(rentals => {
        res.status(200).json(rentals);
      })
      
      .catch(err => res.status(500).json(console.log(err), err));
  });

  router.put('/rentals/:id', validateToken, (req, res) => {
    const changes = req.body;
    rentaldb.update(req.params.id, changes)
      .then(rental => {
        if (rental) {
          res.status(200).json(rental);
        } else {
          res.status(404).json({ message: 'The rental could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating rental',
        }, error);
      });
  });


  router.get("/rentals/:id", validateToken, (req, res) => {
    const { id } = req.params;
    rentaldb.findById(id)
    .then(rentals => {
      const rental = rentals[0];
        if (rental) {
            res.status(200).json(rental);
        } else {
            res.status(500).json({ error: `rental with id ${id} does not exist`})
        }
    })
    .catch(err => res.status(500).json(console.log(err), err));
})

router.get("/rentals/renter/:id", validateToken, (req, res) => {
  const { id }  = req.params;
  rentaldb.findByRenter(id)
  .then(rental => {
      if (rental) {
          res.status(200).json(rental);
      } else {
          res.status(500).json({ error: `rental with id ${id} does not exist`})
      }
  })
  .catch(err => res.status(500).json(console.log(err), err));
})

router.get("/rentals/owner/:id", validateToken, (req, res) => {
  const { id }  = req.params;
  rentaldb.findByOwner(id)
  .then(rental => {
      if (rental) {
          res.status(200).json(rental);
      } else {
          res.status(500).json({ error: `rental with id ${id} does not exist`})
      }
  })
  .catch(err => res.status(500).json(console.log(err), err));
})

router.post("/rentals",  validateToken, (req, res) => {
  const rental = req.body;

  if (rental) {
    rentaldb.addRental(rental)
      .then(rental => {
        res.status(201).json({ message: "Rental created successfully!", rental });
      })
      .catch(err => {
          console.log(err)
        res.status(500).json({
          error: "There was an error creating the rentalg"
        });
      });
  } else {
    res.status(400).json({
      errorMessage: "Please provide all required fields"
    });
  }
});

router.get("/rentalsraw", (req, res) => {
  rentaldb.findraw()
    .then(rentals => {
      res.status(200).json(rentals);
    })
    
    .catch(err => res.status(500).json(console.log(err), err));
});

router.delete("/rentals/:id", validateToken, (req, res) => {
  const { id } = req.params;
  rentaldb.destroy(id)
    .then(rental => {
      if (rental) {
        res.status(200).json({ message: `Rental id ${id} has been destroyed` });
      } else {
        res.status(404).json({
          message: `Rental id ${id} not found`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "error deleting rental"
      });
    });
});


module.exports = router;
