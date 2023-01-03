// import modules

import express from 'express'

import { gorillas } from './data/gorilla-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res){
  res.redirect('/home')
})

app.get('/home', function(req, res){
  res.render('home')
})

app.get('/gorillas', function(req, res){
  res.render('gorillas/index', {
    gorillas: gorillas
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})