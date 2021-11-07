/*
exports.info = (message) => {
    console.log('info: ' + message);
}

exports.verbose = (message) => {
    console.log('verbose: ' + message);
}
*/
/*
//public
function info(message) {
    console.log('info: ' + message);
}

//private
function verbose(message) {
    console.log('verbose: ' + message);
}

module.exports = {
    info  //여기에 작성 함으로써 public function의 역활을 함
}
*/

module.exports = (message) => {
    console.log(`info: ${message}`);
};

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`);
};