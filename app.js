const express = require('express')
const path = require('path')
const app = express()
const url = require('url')
// const database = require('./connection')
const loginHandler = require('./login')
const queryString = require('querystring')
const user = {
      'name': 'aldino',
      'age': 19
}

// Setting up the view engine
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('css'))
app.use(express.static(path.join(__dirname, 'assets')))
// app.use(express.static('assets'))

app.get('/', (req, res) => {
      res.render('home')
})

app.get('/login', (req, res) => {
      // res.header('200')
      res.render('login')
})

app.post('/login', (req, res) => {
      // res.setHeader('Content-Type', 'application/json')
      let userFound = loginHandler('admin', 'admin')
      res.render('home', { username: userFound[0].row.username })
})

// This is the http server port
app.listen(3030, () => {
      console.log('Server run')
})