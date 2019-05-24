require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const session = require('express-session')
const houser_ctrl = require('./controller')

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

// app.use(
//   session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60
//     }
//   })
// )

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
})

app.get('/list/houses', houser_ctrl.getAllHouses)


app.listen(SERVER_PORT, () => console.log(`code like the wind on port ${SERVER_PORT}`))