const Quotation = require('./Quotation')
const currentDate = require('../../components/dateFormater')

Quotation.methods(['get'])
Quotation.updateOptions({new: true, runValidators: true})

Quotation.route('today', (req, res, next) => {
  let query = Quotation.find({createdAt: new Date(currentDate())})

  query.sort({createdAt: 1})
  query.exec((err, quotes) => {    
    if (err) {
      console.log(err)
    } else {
      res.json(quotes)
    }
  })
})

module.exports = Quotation