const EventEmitter = require('events').EventEmitter;

class syncEmit extends EventEmitter {
    constructor() {
        super();
        this.emit('ready');
    }
}


const syncEmitCst = new syncEmit();

syncEmitCst
    .on('ready', () => console.log(`ready`));