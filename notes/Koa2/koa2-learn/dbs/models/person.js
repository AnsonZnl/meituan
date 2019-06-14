const mongoose= require('mongoose')

let personScheme = new mongoose.Schema({
    name: String,
    age: Number
})
module.exports = mongoose.model('Person', personScheme)
