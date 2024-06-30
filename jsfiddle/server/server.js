const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const snippetRoutes = require('./routes/snippetRoutes');

const app = express();
mongoose.connect('mongodb://localhost/jsfiddleclone', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/snippets', snippetRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
