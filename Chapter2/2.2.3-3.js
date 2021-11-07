//const logger = require('../data/2.2.3/logger2');
const logger = require('../data/2.2.3/loggerClass');
const dbLogger = new logger('DB');
dbLogger.log('log message');
dbLogger.info('this is an info message');
const accessLogger = new logger('ACCESSS');
accessLogger.log('log message');
accessLogger.verbose('this is a verbose message');