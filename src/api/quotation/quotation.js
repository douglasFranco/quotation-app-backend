const restful = require('node-restful')
const mongoose = restful.mongoose

const quotationSchema = new mongoose.Schema({
    USD: {
        name: {type: String},
        buy: {type: Number},
        sell: {type: Number},
        variation: {type: Number}
        },
    EUR: {
        name: {type: String},
        buy: {type: Number},
        sell: {type: Number},
        variation: {type: Number}
        },
    BTC: {
        name: {type: String},
        buy: {type: Number},
        sell: {type: Number},
        variation: {type: Number}
    },
    createdAt: {type: Date}
})

module.exports = restful.model('Quotation', quotationSchema)