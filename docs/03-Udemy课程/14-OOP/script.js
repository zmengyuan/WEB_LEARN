'use strict';
/*
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
*/
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
/*
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

// ===============================
// 216 Object create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  // 只是一个普通函数
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// 手动设置对象的原型
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// 217
console.log(`challenge 2`);
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  break () {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
ford.accelerate();
ford.break();
console.log(ford.speedUS);

// 218
console.log(`================218`);
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2017 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // Person(firstName, birthYear);//常规函数调用，this未定义
  Person.call(this, firstName, birthYear);
  this.course = course;
};


//必须在前面 链接原型,这里右边返回的是空对象，所以要先执行，不然放到最后就会覆盖之前的
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__); //Person 为什么？？？错了，需要解决Student.prototype.constructor = Student;
console.log(mike.__proto__ === Student.prototype);
console.log(mike.__proto__.__proto__);


console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
// ======================================
// 219 Coding
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 馃槈

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/
/*
// 220
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

class Student extends PersonCl {
  // 如果子类没有新的属性，则可以省略写构造函数，当new的时候会自动执行super(fullName,birthYear);
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);

  }
}
const martha = new Student("Martha Jones", 2012, "Computer");
martha.introduce();

// 221 Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  // 只是一个普通函数
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// 手动设置对象的原型
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}
StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer");
console.log(jay);
*/

// 222

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//   }
//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   _approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }

// }


// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)
/*
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account("Jonas", "Eur", 1111);


// 这样不好，应该创建方法
// acc1.movements.push(250);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.getMovements();
console.log(acc1);


acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/