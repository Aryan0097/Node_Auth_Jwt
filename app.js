const express = require('express');
const mongoose = require('mongoose');
const authroutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());


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



// //cookies
// app.get('/set-cookies',(req,res)=>{

//   // res.setHeader('Set-Cookie','newUser=true');

//   res.cookie('newUser',false);
//   // res.cookie('isEmployee',true,{maxAge:1000*5,secure:true});
//   // res.cookie('isEmployee',true,{maxAge:1000*5,httpOnly:true});


//   res.send('you got the cookies!');
// });

// app.get('/read-cookies',(req,res)=>{

//   const cookies=req.cookies;
//   console.log(cookies.newUser);
//   res.json(cookies);
// });




