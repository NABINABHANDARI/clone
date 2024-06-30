const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SnippetSchema = new Schema({
  html: String,
  css: String,
  js: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Snippet', SnippetSchema);
