const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/Post');

// get posts
router.get('/', (req, res) => {
  const errors = {};
  console.log('posts get hit');
  Post.find()
    .then((posts) => {
      console.log(posts);
      if (!posts) {
        errors.noposts = 'There are no posts';
        return res.status(404).json(errors);
      }
      res.json(posts);
    })
    .catch((err) => res.status(404).json(err));
});

// get post
router.get('/:name', (req, res) => {
  const errors = {};
  console.log('post route hit', req.params.id);
  Post.find({ name: req.params.name })
    .then((post) => {
      if (!post) {
        errors.noposts = 'Post dne';
        return res.status(404).json(errors);
      }
      res.json(post);
      console.log(post);
    })
    .catch((err) => res.status(404).json(err));
});

// create post #fix middleware..???
router.post('/', (req, res) => {
  // Get fields
  console.log('post route hit');
  const postFields = {};
  if (req.body.video) postFields.video = req.body.video;
  if (req.body.description) postFields.description = req.body.description;
  if (req.body.name) postFields.name = req.body.name;
  if (req.body.image) postFields.image = req.body.image;

  if (req.body.content) postFields.content = req.body.content;

  // Create and save post
  new Post(postFields).save().then((post) => res.json(post));

  // if not a music post
  if (req.body.type != 'music') {
    // Create and save post
    new Post(postFields).save().then((post) => res.json(post));
  } else {
    // Update
    Post.findOneAndUpdate({ $set: postFields }, { new: true }).then((post) =>
      res.json(post)
    );
  }
});

module.exports = router;
