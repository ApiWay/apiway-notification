/**
 * @file
 * @copyright
 * @license
 *
 */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

class AwNotification {
   constructor() {
   }

   dispatch (topic, message) {
     console.log(`topic: ${topic}`)
     console.log(`message: ${message}`)
   }

   get topic() {
     return 'apiway/+'
   }
}

module.exports = AwNotification;
