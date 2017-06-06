/**
 * @file
 * @copyright
 * @license
 *
 */

var bunyan = require('bunyan')
var request = require('request');
var Promise = require('promise');
const nodemailer = require('nodemailer');
var AwNotification = require('../AwNotification')
var emailFormat = require('./format')
let log = bunyan.createLogger({name:'email'})

class Email {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'apiway-smtp',
      port: 25,
      logger: bunyan.createLogger({
        name: 'apiway-notification'
      }),
      debug: true // include SMTP traffic in the logs
    }, {
    });
  }

  sendEmail (data) {
    log.info(data)
    let dataObj = JSON.parse(data)
    let instance
    let subscriber

    if (dataObj) {
      instance = dataObj.instance
      subscriber = dataObj.subscriber
    } else {
      throw `Data error: ${data}`
    }

    if (!subscriber || subscriber.length == 0) {
      throw 'Recipient is null'
    }

    emailFormat.testReport.to = subscriber.join(',')


    this.getReport(instance.reportJson)
      .then((json) => {
        let report = JSON.parse(json)

        let result = 'PASS'

        if (report.stats.failures > 0) {
          result = 'FAIL'
        }
        emailFormat.testReport.subject = `[ApiWay][${result}] ${instance.project.name}`
        console.log(report)
        emailFormat.testReport.html = `<!DOCTYPE html> <html> <body> \n
        <h1>${emailFormat.testReport.subject}</h1> \n
        <a href="${instance.reportHtml}">Link to show full test report</a> \n
        <p>suites: ${report.stats.suites}</p> \n
        <p>tests: ${report.stats.tests}</p> \n
        <p>passes: ${report.stats.passes}</p> \n
        <p>pending: ${report.stats.pending}</p> \n
        <p>failures: ${report.stats.failures}</p> \n
        <p>start: ${report.stats.start}</p> \n
        <p>end: ${report.stats.end}</p> \n
        <p>duration: ${report.stats.duration}</p> \n
        <p>passPercent: ${report.stats.testPercent}</p> \n
        <p>pendingPercent: ${report.stats.pendingPercent}</p> \n
        <p>skipped: ${report.stats.skipped}</p> \n
        <p>passPercentClass: ${report.stats.passPercentClass}</p> \n
        <p>pendingPercentClass: ${report.stats.pendingPercentClass}</p> \n
        </body> </html>`
        console.log(emailFormat.testReport)
        this.transporter.sendMail(emailFormat.testReport, (error, info) => {
          if (error) {
            log.info('Error occurred');
            log.info(error.message);
            return;
          }
          log.info('Message sent successfully!');
          log.info('Server responded with "%s"', info.response);
          this.transporter.close();
        });
    })
  }

  getReport (url) {
    return new Promise((resolve, reject) => {
      console.log(`getReport: ${url}`)
      // Set the headers
      var headers = {
        'Content-Type': 'application/json'
      }

      // Configure the request
      var options = {
        url: url,
        method: 'GET',
        headers: headers
      }

      // Start the request
      request(options, function (error, response, body) {
        console.log(response)
        console.log(body)
        if (!error && response.statusCode == 200) {
          // Print out the response body
          console.log('200: ' + body)
          console.log(body)
          resolve(body)
        } else {
          console.log(error)
          reject(error)
        }
      })
    })
  }
}

module.exports = Email;
