// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
console.log('connected to mongo: ', process.env.MONGO_URI)

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))
app.use(methodOverride('_method'))

app.get('/', function (req, res)  {
    res.render('home')
})

app.get('*', function (req, res) {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)