/*
const logger = require('../data/2.2.3/logger5');
logger.log('this is an informational message');

const logger2 = require('../data/2.2.3/logger5');
logger2.log('this is an informational message2');
*/

const logger = require('../data/2.2.3/logger5');
//logger.log('this is an informational message');

const customLogger = new logger.Logger('CUSTOM');
customLogger.log('this is an CUSTOM message');