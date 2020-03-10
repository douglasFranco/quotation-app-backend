const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGODB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/quotation'
module.exports = mongoose.connect(url, {useMongoClient: true})