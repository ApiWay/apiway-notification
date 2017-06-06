

let testReport = {
  from: 'no-reply@apiway.io',
  to: '',
  subject: '[ApiWay] Test Report - ',
  html: 'xxx',
  headers: {
    'X-Laziness-level': 1000 // just an example header, no need to use this
  }
}


module.exports.testReport = testReport