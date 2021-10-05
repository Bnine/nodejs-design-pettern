const fs = require('fs');
/*
fs.readFile('../data/2.1.2-3.txt', 'utf8', (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
*/
function readJsonFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if(err) {
      console.log('readFile is error');
      return callback(err);
    } 

    try {
      parsed = JSON.parse(data);
      console.log('parsed : ' + JSON.stringify(parsed));
    } catch(err) {
      console.log('catched error');
      return callback(err);
    }

    callback(null, parsed);
  })
}

readJsonFile('../data/2.1.2-1.txt', (err, data) => {
//readJsonFile('../data/2.1.3.json', (err, data) => {
  console.log('data : ' + JSON.stringify(data));
});

const outpuStr = (str, wait) => {
  setTimeout(() => {
    console.log('output:', str);
  }, wait);
};

outpuStr('1', 1000);
outpuStr('2', 500);
outpuStr('3', 100);

const outpuStrTwo = (str, wait, callback) => {
  setTimeout(() => {
    console.log('output:', str);
    callback();
  }, wait);
};

const process = () => {
  console.log('start');
  outpuStrTwo('1', 1000, () => {
    outpuStrTwo('2', 500, () => {
      outpuStrTwo('3', 100, () => {
        console.log('end');
      });
    });
  });
};

process();