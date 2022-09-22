const moment = require('moment')
// const differentMoment = moment("13/01/2023");

class Format {
  date = (date) => moment(date).format("DD/MM/YYYY ");


  currency = (item) => item != null ? `${this.formatDecimals(item)} ` : ""

  formatDecimals = (value) => parseFloat(value).toFixed(2)
}

module.exports = Format