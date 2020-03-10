const express = require('express')

module.exports = (server) => {
    const router = express.Router()
    server.use('/api', router)

    const quotationService = require('../api/quotation/quotationService')
    quotationService.register(router, '/quotes')    
}