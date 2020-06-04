const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require('../../models/Post');
const middleware = require('../../middleware');

// get posts
router.get('/posts', (req, res) => {
  const errors = {};

  Post.find()
    .then((posts) => {
      if (!posts) {
        errors.noposts = 'There are no posts';
        return res.status(404).json(errors);
      }
      res.json(posts);
    })
    .catch((err) => res.status(404).json(err));
});

// get post
router.get('/posts/:id', (req, res) => {
  const errors = {};

  Post.find({ id: req.params.id })
    .then((post) => {
      if (!post) {
        errors.noposts = 'Post dne';
        return res.status(404).json(errors);
      }
      res.json(post);
    })
    .catch((err) => res.status(404).json(err));
});

// create post #fix middleware..???
router.post('/:type', middleware.checkUserAdmin, (req, res) => {
  // Get fields
  const postFields = {};
  if (req.body.video) postFields.video = req.body.video;
  if (req.body.description) postFields.description = req.body.description;
  if (req.body.name) postFields.name = req.body.name;
  if (req.body.artist) postFields.artist = req.body.artist;
  if (req.body.type) postFields.type = req.body.type;
  if (req.body.image) profileFields.image = req.body.image;

  Post.findOne({ type: req.body.type }).then((post) => {
    if (!post) {
      // Create and save post
      new Post(postFields).save().then((post) => res.json(post));
    }
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
});

module.exports = router;
