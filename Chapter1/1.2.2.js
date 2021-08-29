/*
const numbers = [2,6,7,8,1];
const even = numbers.filter(function (x) {
    return x%2 === 0;
});
console.log(numbers);
console.log(even);
*/
/*
const numbers = [2,6,7,8,1];
const even = numbers.filter(x => x%2 === 0);
console.log(numbers);
console.log(even);
*/
/*
const numbers = [2,6,7,8,1];
const even = numbers.filter(x => {
    if (x%2 === 0) {
        console.log(x + ' is even!');
        return true;
    }
});
console.log(numbers);
console.log(even);
*/
/*
function DelayedGreeter(name) {
    this.name = name;
}

DelayedGreeter.prototype.greet = function() {
    setTimeout(function cb() {
        console.log('Hello ' + this.name);
    }, 500);
};

const greeter = new DelayedGreeter('World');
greeter.greet();
*/
/*
function DelayedGreeter(name) {
    this.name = name;
}

DelayedGreeter.prototype.greet = function() {
    setTimeout((function cb() {
        console.log('Hello ' + this.name);
    }).bind(this), 500);
};

const greeter = new DelayedGreeter('World');
greeter.greet();
*/
function DelayedGreeter(name) {
    this.name = name;
}

DelayedGreeter.prototype.greet = function() {
    setTimeout(() => console.log('Hello ' + this.name), 500);
};

const greeter = new DelayedGreeter('World');
greeter.greet();