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

var Handlebars = require('handlebars');
var emailTemplate = require('./emailTemplate');
var emailData = {};
var imgBasePath = 'https://s3.ap-northeast-2.amazonaws.com/apiway-notification-email-image/img/';
var imgMainLogo = 'logo-gray.png';
var imgFailStatusLogo = 'status-thumb-fail.png';
var imgFailLogo = 'status-fail.png';
var imgSuccessStatusLogo = 'status-thumb-success.png';
var imgSuccessLogo = 'status-success.png';


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

        emailData = {
          projectName: instance.project.name,
          projectResult: '',
          reportHtml: instance.reportHtml,
          suites: report.stats.suites,
          tests: report.stats.tests,
          passes: report.stats.passes,
          pending: report.stats.pending,
          failures: report.stats.failures,
          start: report.stats.start,
          end: report.stats.end,
          duration: report.stats.duration,
          passPercent: report.stats.passPercent,
          pendingPercent: report.stats.pendingPercent,
          skipped: report.stats.skipped,
          passPercentClass: report.stats.passPercentClass,
          pendingPercentClass: report.stats.pendingPercentClass,
          imgMainLogo: imgBasePath+imgMainLogo,
          imgFailLogo: imgBasePath+imgFailLogo,
          imgFailStatusLogo: imgBasePath+imgFailStatusLogo,
          imgSuccessStatusLogo: imgBasePath+imgSuccessStatusLogo,
          imgSuccessLogo: imgBasePath+imgSuccessLogo
        };

        emailFormat.testReport.html = makeHtmlEmailFomat(report.stats.failures, emailData);

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
        //console.log(response)
        //console.log(body)
        if (!error && response.statusCode == 200) {
          // Print out the response body
          //console.log('200: ');
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

function makeHtmlEmailFomat(failures, emailData) {

  var statusResult;
  var emailHtml;
  var template;

  if (failures > 0) {
    statusResult = 'FAIL';
    emailData.projectResult = statusResult;

    emailHtml = emailTemplate.failures();
    template = Handlebars.compile(emailHtml);

  } else {
    statusResult = 'PASS';
    emailData.projectResult = statusResult;

    emailHtml = emailTemplate.success();
    template = Handlebars.compile(emailHtml);
  }

  return template(emailData);
}

module.exports = Email;
