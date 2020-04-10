const functions = require('firebase-functions')
const admin = require('firebase-admin')
const app = require('express')()
admin.initializeApp()

const config = {
  apiKey: 'AIzaSyBTdQUqGlP-dk4vmxuiSBMYNPXgnUt05UQ',
  authDomain: 'socialape-43478.firebaseapp.com',
  databaseURL: 'https://socialape-43478.firebaseio.com',
  projectId: 'socialape-43478',
  storageBucket: 'socialape-43478.appspot.com',
  messagingSenderId: '38737443979',
  appId: '1:38737443979:web:cf44f65b6140eaec7d288e',
}

const firebase = require('firebase')

firebase.initializeApp(config)

app.get('/screams', (req, res) => {
  admin
    .firestore()
    .collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let screams = []

      data.forEach((doc) => {
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
        })
      })
      return res.json(screams)
    })
    .catch((err) => console.error(err))
})

app.post('/scream', (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString(),
  }

  admin
    .firestore()
    .collection('screams')
    .add(newScream)
    .then((doc) => {
      res.json({ message: `Document ${doc.id} created successfully!` })
    })
    .catch((err) => {
      res.status(500).json({ error: 'Something went wrong' })
      console.error(err)
    })
})

exports.api = functions.https.onRequest(app)
