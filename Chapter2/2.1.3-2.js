const fs = require('fs');

function readJSONThrows(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err) {
            return callback(err);
        }

        callback(null, JSON.parse(data));
    });
}

//readJSONThrows('../data/2.1.2-1.txt', err => console.log(err));

try {
    readJSONThrows('../data/2.1.2-1.txt', function(err, data) {
        if(err) {
            console.log('return err : ' + err);
        }
        console.log('data : ' + data);
    });
} catch(err) {
    console.log('catch err : ' + err);
}