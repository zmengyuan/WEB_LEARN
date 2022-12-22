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
