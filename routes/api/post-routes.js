const router = require('express').Router();
const { Post, User } = require('../../models');

// ========================== get all posts
// Insomnia endpoint GET http://localhost:3001/api/posts
// when first testing, and till the Insert API is complete, only works after seeding the post table (see seed_notes.sql)
router.get('/', (req, res) => {
    Post.findAll({
      attributes: ['id', 'post_url', 'title', 'created_at', 'updated_at'],
      order: [['created_at', 'DESC']], 
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // ========================== get a single post by ID
  // Insomnia endpoint GET http://localhost:3001/api/posts/1
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'post_url', 'title', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// ========================== post a single post
// Insomnia endpoint POST  http://localhost:3001/api/posts/
// test JSON in POST 
        // {
        //     "title": "Runbuddy reaches 1 million subscribers",
        //     "post_url": "https://runbuddy.com/press",
        //     "user_id": 1
        //   }
    router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Post.create({
      title: req.body.title,
      post_url: req.body.post_url,
      user_id: req.body.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// ========================== Update a single post
// Insomnia endpoint PUT  http://localhost:3001/api/posts/2
// test JSON in PUT 
        // {
        //     "title": "Runbuddy reaches 2 million subscribers"
        // }
  router.put('/:id', (req, res) => {
  Post.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// ========================== Delete a single post
// Insomnia endpoint DELETE  http://localhost:3001/api/posts/2
router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // export 
  module.exports = router;