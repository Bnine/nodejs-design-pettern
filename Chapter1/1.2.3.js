/*
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.getFullName = function() {
    return this.name + ' ' + this.surname;
};

Person.older = function(person1, person2) {
    return (person1.age >= person2.age) ? person1 : person2;
};

const kim = new Person('Brandon', 'Kim', '34');
const teemo = new Person('David', 'Hong', '29');

console.log(kim.getFullName());
console.log(teemo.getFullName());
console.log(Person.older(kim, teemo));
*/
/*
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }

    static older(person1, person2) {
        return (person1.age >= person2.age) ? person1 : person2;
    }
}

const kim = new Person('Brandon', 'Kim', '34');
const teemo = new Person('David', 'Hong', '29');

console.log(kim.getFullName());
console.log(teemo.getFullName());
console.log(Person.older(kim, teemo));
*/

class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }

    static older(person1, person2) {
        return (person1.age >= person2.age) ? person1 : person2;
    }
}

class PersonWithMiddleName extends Person {
    constructor(name, middlename, surname, age) {
        super(name, surname, age); //부모 생성자 호출 php protected
        this.middlename = middlename;
    }

    //함수 오버라이드
    getFullName() {
        return this.name + ' ' + this.middlename + ' ' + this.surname;
    }
}

const kim = new PersonWithMiddleName('Brandon', 'Bongkyu', 'Kim', '34');
const teemo = new PersonWithMiddleName('David', 'Teemo', 'Hong', '29');

console.log(kim.getFullName());
console.log(teemo.getFullName());
console.log(Person.older(kim, teemo));

const kim1 = new Person('Brandon', 'Kim', '24');
const teemo1 = new Person('David', 'Hong', '29');

console.log(kim1.getFullName());
console.log(teemo1.getFullName());
console.log(Person.older(kim1, teemo1));