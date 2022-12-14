'use strict';

// 只有函数声明和函数表达式可以build构造函数
const Person = function (firstName, birthYear) {
  console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never do this，多少对象就会创建多少这个方法的副本，为了解决这个问题，我们使用原型和原型继承
  // this.calcAge = function () {
  //   console.log(2017);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1、a new empty object is created
// 2 the function is called,and in this function call the this keyword will be set to this newly created object, this = {}
// 3 {}创建的对象 linked to prototype
// 4 function automatically returns that empty object from the beginning .但是实际上此时对象不再为空，返回的都是this指向的对象

console.log(jonas instanceof Person);

const jack = new Person('Jack', 1975);

Person.hey = function () {
  console.log(`Hey there`);
  console.log(this); //指向的是Person构造函数
};

Person.hey();

/*
//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2017 - this.birthYear);
};

// 为什么有效？因为对象总是可以访问 methods and properties from its prototype,And the prototype of Jonas and Jack is person dot prototype
// each object has a special property called a underscore underscore proto
jonas.calcAge();
// jonas.__proto__  this is the prototype of Jonas.It is not the prototype property,but it is simply the prototype.
// so to prototype of the Jonas object is essentially the prototype property of the constructor function
console.log(jonas.__proto__); //在new 的第三步创建了__proto__这个原型属性

console.log(jonas.__proto__ === Person.prototype); //true,Person.prototype不是Person的原型，而是对象的原型

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
//.prototypeLinkedObject

Person.prototype.species = 'Homo';
console.log(jonas, jack.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(`jonas的原型:${jonas.__proto__}`);
console.log(jonas.__proto__);
console.log(`Person的prototype:${Person.prototype}`);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype); //true

console.log(`Person的原型`);
console.log(Person.prototype.__proto__);
console.log(`Object的prototype`);
console.log(Object.prototype);
console.log(Person.prototype.__proto__ === Object.prototype); //true

console.log(`Object的原型是空的`);
console.log(Object.prototype.__proto__); //null

// 对象（有原型_proto__） => 构造函数的prototype (有原型__proto__) => Object的prototype (没有原型了) => null

//================================================
// 211-Prototypal Inheritance On Built-In Objects

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor); //函数本身

const arr = [3, 6, 4, 5, 9, 9]; //new Array === []
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

// 212 Challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`acc ${this.speed}`);
};
Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.break();
const mercedes = new Car('MERCEDES', 95);
*/

// class expression class仍然是一个函数
// const PersonCl = class {};

// class declaration
// 在类上添加方法相当于在原型上添加方法，不会在对象上添加
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName; //set fullName会执行
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  great() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // 当我们设置一个已经存在的属性的时候，要加下划线
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert('wrong');
    }
  }
  // 有了这个getter方法，才能访问对象.fullName
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there`);
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(`jessica.age:${jessica.age}`);

console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.great = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.great();

PersonCl.hey();

// =================================
// 214 getter and setter
const account = {
  owner: 'Jonas',
  movements: [200, 530, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
