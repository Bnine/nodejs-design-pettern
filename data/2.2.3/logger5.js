function Logger(name) {
    this.count = 0;
    this.name = name;
}

Logger.prototype.log = function(message) {
    this.count++;
    console.log(`[${this.name}] - (${this.count}) ${message}`);
}

//module.exports = new Logger('DEFAULT');
module.exports.Logger = Logger;
