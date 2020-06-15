// Express.js router
const router = require('express').Router();
const { User } = require('../../models');

// ========================== GET /api/users
// test route in browser:  http://localhost:3001/api/users
// router.get('/', (req, res) => {});
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    //.findAll Model class method is equal to this SQL query: SELECT * FROM users;
    User.findAll({
        attributes: { exclude: ['password'] }
      })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
    });


// ========================== GET /api/users/1
// router.get('/:id', (req, res) => {});
// .findOne Model class is similar to this SQL query: SELECT * FROM users WHERE id = 1
User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
});

//  ========================== POST /api/users 
// router.post('/', (req, res) => {});
// equivalent to this SQL query:
        // INSERT INTO users
        //   (username, email, password)
        // VALUES
        //   ("Lernantino", "lernantino@gmail.com", "password1234");
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// ========================== PUT /api/users/1
// router.put('/:id', (req, res) => {});
// equiv to this SQL query: 
        // UPDATE users
        // SET username = "Lernantino", email = "lernantino@gmail.com", password = "newPassword1234"
        // WHERE id = 1;
router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/users/1
// router.delete('/:id', (req, res) => {});
// equiv to this SQL query:
    //   DELETE FROM users where ID = 1
router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;