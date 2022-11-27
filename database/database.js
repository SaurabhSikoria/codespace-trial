const mongoose = require('mongoose')

const {MONGODB_URL} = process.env

exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(
        console.log("MongoDB Atlas connected")
    )
    .catch(error => {
        console.log('Database Failed to Load')
        console.log(error)
        process.exit(1)
    })
}