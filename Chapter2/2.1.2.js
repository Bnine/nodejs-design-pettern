const fs = require('fs');
const cache = {};
/*
function inconstantRead(filename, callback) {
  if (cache[filename]) {
    callback(cache[filename]);
  } else {
    fs.readFile(filename, 'utf8', (err, data) => {
      cache[filename] = data;
      callback(data);
    });
  }
}
*/
/*
function consistentRead(filename) {
  if (cache[filename]) {
    console.log('cache is exist');
    return cache[filename];
  } else {
    console.log('Read files : ' + filename);
    let data = fs.readFileSync(filename, 'utf8');
    console.log('data : ' + data);
    cache[filename] = data;
    console.log('cache-'+filename+' : ' + cache[filename]);
    return data;
  }
}
*/
function consistentReadAsync(filename, callback) {
  if (cache[filename]) {
    process.nextTick(() => callback(cache[filename]));
  } else {
    fs.readFile(filename, 'utf8', (err, data) => {
      cache[filename] = data;
      callback(data);
    });
  }
}
function createFileReader(filename) {
  const listeners = [];
  /*
  inconstantRead(filename, value => {
    listeners.forEach(filedata => filedata(value));
  });
  */
  /*
  consistentRead(filename, value => {
    listeners.forEach(filedata => filedata(value));
  });
  */
  consistentReadAsync(filename, value => {
    listeners.forEach(filedata => filedata(value));
  });
  console.log('read is ready');
  return {
    onDataReady: filedata => listeners.push(filedata)
  };
}

const reader1 = createFileReader('../data/2.1.2-1.txt');
reader1.onDataReady(data => {
  console.log('1st Call data: ' + data);

  const reader2 = createFileReader('../data/2.1.2-1.txt');
  reader2.onDataReady(data => {
    console.log('2nd Call data: ' + data);
  })
});