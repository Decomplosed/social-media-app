const functions = require('firebase-functions')
const app = require('express')()

const FBAuth = require('./utils/fbAuth')

const { getAllScreams, postOneScream } = require('./handlers/screams')
const { signup, login, uploadImage } = require('./handlers/users')

//Scream Routes
app.get('/screams', getAllScreams)
app.post('/scream', FBAuth, postOneScream)

// Users routes
app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', uploadImage)

exports.api = functions.https.onRequest(app)
