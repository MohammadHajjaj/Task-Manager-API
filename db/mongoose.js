const validator = require('validator')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    userNewUrlPrase: true,
    useCreateIndex: true
})

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) { throw new Error('Email is not valid') }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if (value.toLoweCase().includes("password")) {
//                 throw new Error(`password cannot contain the word "password"`)
//             }

//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error("age must be above 0")
//             }
//         }
//     },
// })
// const User = mongoose.model('User', userSchema)

// const me = new User({ name: 'Gus', email: 'gus@gmail' })

// me.save().then(() => { console.log(me) }).catch((error) => {
//     console.log("error", error)
// })

const tasksSchema = new mongoose.Schema({
    description: { type: String, trim: true },
    completed: { type: Boolean, default: false }
})
const Task = mongoose.model('Task', tasksSchema)

const newTask = new Task({ description: 'Clean House', completed: false })

newTask.save().then(() => { console.log(newTask) }).catch((error) => {
    console.log("error", error)
})