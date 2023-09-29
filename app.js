const express = require('express');
const mongoose = require('mongoose');
const authroutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());


// view engine
app.set('view engine', 'ejs');

// database connection
const dbURL = 'mongodb+srv://me2023:cFfbM2fVz5mwDxzh@cluster0.pfinqpn.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//   mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//   .then(() => {
//       console.log('Connected to The MongoDB')
//   })
//   .catch((error)=>{
//       console.log(error)
//   })
  

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authroutes);

