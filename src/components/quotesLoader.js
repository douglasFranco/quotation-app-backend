const axios = require('axios')
const cron = require('node-cron')
const Quotation = require('../api/quotation/Quotation')
const currentDate = require('./dateFormater')

module.exports = cron.schedule('00 59 * * * *', () => {
    axios.get('https://api.hgbrasil.com/finance?fields=only_results,currencies&key=fcee49bb')
    .then(function (response) {
        let currencies = JSON.parse(JSON.stringify(response.data.currencies))
        
        let quotes = new Quotation({
            USD: currencies.USD,
            EUR: currencies.EUR,
            BTC: currencies.BTC,
            createdAt: currentDate()
        })

        quotes.save((err) => {
            if (err) return handleError(err);
        });
    })
    .catch(function (error) {
        console.log(error);
    }) 
})