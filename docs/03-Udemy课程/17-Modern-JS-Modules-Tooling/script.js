// import {
//   addToCart,
//   totalPrice as price,
//   tq as totalQuantity,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, totalQuantity);

import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// default import,随便自己命名
// import add from './shoppingCart.js';
// 还可以把默认和命名混写，但是不要这样
import add, { addToCart, totalPrice, tq } from './shoppingCart.js';
add('pizza', 2);
console.log(totalPrice);

// import 不是 export 的副本，他们是live connection
import { cart } from './shoppingCart.js';

console.log(cart);
/*
///////////////////////////////////////
// Top-Level Await (ES2022)

console.log('Start fetching');
// 这实际上阻止了整个模块的执行
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');

// 假如有异步动作，需要返回一些数据
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost); //实际上这是一个Promise(pending)

// Not very clean 方式一
lastPost.then(last => console.log(last));

// 如果有await，就更简单的获取了
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
///////////////////////////////////////
// The Module Pattern

// 设置有的变量可返回，有的不可返回
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// 因为是module范围，所以在控制台不能访问ShoppingCart2
// 为什么在这里还可以操控ShoppingCart2，即使这个函数已经在之前运行完毕并返回了。因为闭包！闭包允许函数访问对所有存在的变量基本上它的出生地
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
// 不能访问 undefined
console.log(ShoppingCart2.shippingCost);
*/
/*
///////////////////////////////////////
// CommonJS Modules
// nodeJS Export 无法在浏览器中运行
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/

///////////////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// 使用了构建工具后，就会自动在node文件中找到，不需要完整的路径了。这适用于html\css\js模块|CommonJS模块\img等
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone); //stateClone的也跟着变了
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jons' ?? null);

// 这个编译之后ES6的find()方法还在，没有被编译成ES5,同样的Promise也不会被转，
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log(x));

// 这些新特性根本不会转换，所以对于这些新功能，我们必须进行polyfill
//npm i core-js
import 'core-js/stable';

// polifilling async functions
import 'regenerator-runtime/runtime';
