function add(a, b, callback1) {
    callback1(a + b);
}

console.log('before');
add(1, 4, resultCallback => console.log('Result: ' + resultCallback + 1));
console.log('after');

function addAsync(a, b, callback) {
    setTimeout(() => {
        return callback(a + b);
    }, 2000);
}

console.log('before');
addAsync(1, 4, result => console.log('ResultAsync: ' + result));
console.log('after');

const result3 = [1, 5, 7].map(element => element - 1);
console.log(result3)