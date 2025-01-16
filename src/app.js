const express = require('express');
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser')
const app = express();
const port = 7777;
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');

//This middleware converting json object into js object 
app.use(express.json());
//This middleware is used to read the cookies
app.use(cookieParser());


app.use('/', authRouter);
app.use('/', profileRouter);
app.use('/', requestRouter);


connectDB()
      .then(()=>{
        console.log('database connected succesfully');
        app.listen(port, ()=>{
        console.log("server listening on port number: ",port);
        });
        })
      .catch(()=>{
        console.log('database not connected succesfully');
      })

