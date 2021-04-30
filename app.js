const express = require("express")
const app = express();
const path = require("path")
const ejsMate = require("ejs-mate")
const mongoose = require('mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const port = process.env.PORT


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             cb(new Error('File must be a jpg,jpeg or png'))
//         }
//         cb(undefined, true)
//         // cb(undefined,false)
//     }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// },
//     (error, req, res, next) => {
//         res.status(400).send({ error: error.message })
//     }
// )



app.use(express.json())

app.use(express.static(path.join(__dirname, "/public")))
app.set('views', path.join(__dirname, "views"));

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URL, {
    userNewUrlPrase: true,
    useCreateIndex: true
})

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
