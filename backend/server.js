const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/contact_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(cors());
app.use(bodyParser.json());

app.use('/', contactRoutes); 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
