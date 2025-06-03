/* // 1. prototype bilan obyekt yaratish
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

Car.prototype.getInfo = function () {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
}

const arava1 = new Car('toyota','carmy', 2020);
const arava2 = new Car('nissan', 'nismo r35', 2010);
const arava3 = new Car('dodge', 'challanger', 2024);

console.log(arava1.getInfo());
console.log(arava2.getInfo());
console.log(arava3.getInfo()); */

/* // 2. __proto__ orqali prototip merosxo'rlik
const animal = {
    makeSound() {
        console.log('Some sound');
    }
};

let dog = {
    __proto__: animal,
    bark() {
        console.log('woof!');
    }
};

dog.makeSound();
dog.bark(); */

/* // 3. Massivlar uchun o'z metodingizni qo'shing
Array.prototype.sum = function () {
    return numbers.reduce((acc, num) => acc + num);
}

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); */

/* // 4. Prototip zanjiri tekshirish
class Person {
    constructor(name) {
        this.name = name;
    }
}

Person.prototype.greet = function () {
    console.log(`hello may name is ${this.name}`);
}

class Employee extends Person {
    constructor(name) {
        super(name);
    }
}

const emplo = new Employee("Eshmat");
emplo.greet(); */

/* // 5. Object.create bilan yangi obyekt yaratish
let Car = {
    brand: "Mazda RX-7",
    speed: 360,
    drive: function () {
        console.log(`${this.brand} is driving at ${this.speed} km/h`);
    }
}

const sportsCar = Object.create(Car);
sportsCar.speed = 200;

sportsCar.drive(); */

//                                          + Bonus

/* // 1. Kitob klassini yaratish
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}

const myBook = new Book('The Alchemist','Paulo Coelho', 1988);
const book1 = new Book('Dollarlik muaffaqiyat','Silvester Stollone',1976);
const book2 = new Book('Bilmasvoy quyosh shaxrida','Nikolay Nosov', 2003);

console.log(myBook.getSummary());
console.log(book1.getSummary());
console.log(book2.getSummary()); */

/* // 2. Telefon klassini yaratish
class Phone {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    call() {
        console.log(`Calling from ${this.brand} ${this.model} $${this.price} ...`);
    }
}

const myPhone = new Phone('Apple', 'Iphone 16', 1500);
myPhone.call(); */