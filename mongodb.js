// CRUD

// We are grabbing lots of things from Mongodb so we can destructure
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// We use constructor functions with new
// const id = new ObjectID()
// console.log(id)

// With mongodb, ids are GU ids => scales well in a distributed system:
// Multiple db servers running instead of just one allowing us to handle heavy traffic
// Ids are designed to be unique so no chance you get the same on different servers
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to DB')
  }

  const db = client.db(databaseName)

  db.collection('tasks').deleteOne({
    task: 'Insert a document'
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})

