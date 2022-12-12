'use strict';

// 只有函数声明和函数表达式可以build构造函数
const Person = function (firstName, birthYear) {
  console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never do this，多少对象就会创建多少这个方法的副本，为了解决这个问题，我们使用原型和原型继承
  this.calcAge = function () {
    console.log(2017);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1、a new empty object is created
// 2 the function is called,and in this function call the this keyword will be set to this newly created object, this = {}
// 3 {}创建的对象 linked to prototype
// 4 function automatically returns that empty object from the beginning .但是实际上此时对象不再为空，返回的都是this指向的对象

console.log(jonas instanceof Person);
