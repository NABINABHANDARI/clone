const express = require('express');
const router = express.Router();
const Snippet = require('../models/Snippet');

router.post('/', async (req, res) => {
  const { html, css, js } = req.body;
  const snippet = new Snippet({ html, css, js });
  await snippet.save();
  res.send({ id: snippet._id });
});

router.get('/:id', async (req, res) => {
  const snippet = await Snippet.findById(req.params.id);
  res.send(snippet);
});

module.exports = router;
