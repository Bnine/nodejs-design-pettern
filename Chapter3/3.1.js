const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

function spider(url, callback) {
    const filename = utilities.urlToFilename(url);
    fs.exists(filename, exists => {
        if(!exists) {
            console.log(`downloading ${url}`);
            request(url, (err, response, body) => {
                if(err) {
                    callback(err);
                } else {
                    mkdirp(path.dirname(filename), err => {
                        if(err) {
                            callback(err);
                        } else {
                            fs.writeFile(filename, body, err => {
                                if(err) {
                                    callback(err);
                                } else { 
                                    callback(null, filename, true);
                                }
                            })
                        }
                    })
                }
            })
        } else {
            callback(null, filename, false);
        }
    })
}

spider(process.argv[2], (err, filename, download) => {
    if(err) {
        console.log(`error: ${err}`);
    } else if(download) {
        console.log(`download: ${filename}`);
    } else {
        console.log(`${filename} was downloaded`);
    }
})