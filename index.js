const express = require('express')
const path = require('path')
const app = express()
const url = require('url')
// const db = require('connection')

// Setting up the view engine
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('css'))
app.use(express.static(path.join(__dirname, 'assets')))
// app.use(express.static('assets'))

app.get('/', (req, res) => {
      res.render('home', { user: 'Aldino' })
})

app.get('/login', (req, res) => {
      // res.header('200')
      res.render('login', { user: 'Aldino' })
})

app.post('/login', (req, res) => {
      console.log('login')
})

// This is the http server port
app.listen(3030, () => {
      console.log('Server run')
})