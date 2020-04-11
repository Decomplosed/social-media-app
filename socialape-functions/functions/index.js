const functions = require('firebase-functions')
const app = require('express')()

const FBAuth = require('./utils/fbAuth')

const { getAllScreams, postOneScream } = require('./handlers/screams')
const { signup, login } = require('./handlers/users')

const firebase = require('firebase')

firebase.initializeApp(config)

//Scream Routes
app.get('/screams', getAllScreams)
app.post('/scream', FBAuth, postOneScream)

// Users routes
app.post('/signup', signup)
app.post('/login', login)


exports.api = functions.https.onRequest(app)
