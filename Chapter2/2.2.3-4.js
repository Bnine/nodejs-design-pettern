//const logger = require('../data/2.2.3/logger3');
const logger = require('../data/2.2.3/logger4');
const dbLogger = logger('DB');
dbLogger.log('log message');
dbLogger.info('this is an info message');
const accessLogger = logger('ACCESSS');
accessLogger.log('log message');
accessLogger.verbose('this is a verbose message');