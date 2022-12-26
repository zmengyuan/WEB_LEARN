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
