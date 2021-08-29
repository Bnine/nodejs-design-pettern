/*
const x = 22;
const y = 17;
const obj = {x, y};

console.log(JSON.stringify(obj));
console.log(obj);
*/
/*
module.exports = {
    square(x) {
        return x * x;
    },
    cube(x) {
        return x * x * x;
    }
};
console.log(module.exports.square(2));
console.log(module.exports.cube(2));
*/
/*
const namespace = '-webkit-';
const style = {
    [namespace + 'box-sizing'] : 'border-box',
    [namespace + 'box-shadow'] : '10px 10px 10px'
};

console.log(namespace);
console.log(style);
*/
const person = {
    name : 'Brandon',
    surname : 'Kim',

    get fullname() {
        return this.name + ' ' + this.surname;
    },

    set fullname(fullname) {
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
};

console.log(person.fullname);
console.log(person.fullname = 'Teemo hong');
console.log(person.name);
console.log(person.surname);
console.log(person.fullname);