const mongoose =  require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
})

// const me = new User({
//   name: 'Andrew',
//   age: 'mike'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error', error)
// })

const Task = new mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type:  Boolean
  }
})

const firstTask = new Task({
  description: 'Take the plance',
  completed: false
})

firstTask.save().then(() => {
  console.log(firstTask)
}).catch((e) => {
  console.log(e)
})
