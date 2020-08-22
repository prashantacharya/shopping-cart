const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const products = require('./routes/api/products')

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB Connected'))
  .catch(error => console.log(error));

app.get('/', (req,res)=> res.send("hello There"));

// Use Routes
app.use('/api/products', require('./routes/api/products'))
  
const port = process.env.PORT || 5000;

// MiddleWares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port,()=> console.log(`Server running on port ${port}`));
