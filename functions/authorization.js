const functions = require('firebase-functions')
const { users } = require('./db')

module.exports = functions.auth.user().onCreate(event => {
  const { uid } = event.data

  return users.create(uid, false)
})
