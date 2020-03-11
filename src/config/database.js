const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://heroku_w2snbhh9:f0no1fdbmkjol38ufe4ji666k9@ds043467.mlab.com:43467/heroku_w2snbhh9'
module.exports = mongoose.connect(url, {useMongoClient: true})