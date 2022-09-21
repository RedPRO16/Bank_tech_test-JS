const moment = require('moment')

class Format {
  date = (date) => moment(date).format("DD/MM/YYYY ");

  currency = (item) => item != null ? `${this.formatDecimals(item)} ` : ""

  formatDecimals = (value) => parseFloat(value).toFixed(2)
}

module.exports = Format