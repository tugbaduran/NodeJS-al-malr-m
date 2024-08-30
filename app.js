const path = require("path")
const express = require("express")
const { engine } = require('express-handlebars');
const app=express()
const port= 3000
const hostname= '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload= require('express-fileupload')
const {generateDate, limit, truncate, paginate}= require('./helpers/hbs')
const expressSession= require('express-session')
const connectMongo= require('connect-mongo')
const methodOverride=require('method-override')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db');

const mongoStore= connectMongo(expressSession)

app.use(expressSession({
  secret: 'testotesto',
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({mongooseConnection: mongoose.connection })
}))



app.use(fileUpload())
app.use(express.static('public'))
app.use(methodOverride('_method'))

// handlebars helpers


app.engine('handlebars', engine({helpers:{
  generateDate:generateDate,
  limit:limit,
  truncate:truncate,
  paginate:paginate
}}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

/* const myMiddleware=(req, res, next)=>{
  console.log("BENİM ADIM TUĞBA")
  next()
}
app.use('/', myMiddleware) */

//DISPLAY LINK Middleware

app.use((req,res,next)=>{
  const{userId}=req.session
  if(userId){
    res.locals={
      displayLink: true
    }
  }
  else{
    res.locals={
    
    displayLink: false
    }
  }
  next()
})

// Flash- Message Middleware

app.use((req,res,next)=>{
  res.locals.sessionFlash= req.session.sessionFlash
  delete req.session.sessionFlash
  next()

})
const main= require('./routes/main')
const posts= require('./routes/posts')
const users= require('./routes/users');
const admin= require('./routes/admin/index');
const MongoStore = require("connect-mongo");
const { connect } = require("./routes/main");
const contact= require('./routes/contact')

app.use('/', main)
app.use('/posts', posts)
app.use('/users', users)
app.use('/admin', admin)
app.use('/contact', contact)

app.listen(port,hostname,()=>{
  console.log(`Server çalışıyor, http://${hostname}${port}/`)
})