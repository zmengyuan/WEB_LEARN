- Linking a JavaScript File；Values and Variables；Data Types；let, const and var；Basic Operators；Operator Precedence；Strings and Template Literals；Taking Decisions: if / else Statements；Type Conversion and Coercion；Truthy and Falsy Values；Equality Operators: == vs. ===；Logical Operators；The switch Statement；Statements and Expressions；The Conditional (Ternary) Operator；Activating Strict Mode；Functions；Function Declarations vs. Expressions；Arrow functions；Functions Calling Other Functions；Reviewing Functions；Coding Challenge #1；Introduction to Arrays；Basic Array Operations (Methods)；Coding Challenge #2；Introduction to Objects；Dot vs. Bracket Notation；Object Methods；Coding Challenge #3；Iteration: The for Loop；Looping Arrays, Breaking and Continuing；Looping Backwards and Loops in Loops；The while Loop；Coding Challenge #4
- Using Google, StackOverflow and MDN；Debugging with the Console and Breakpoints；Coding Challenge #1
- Part 5 What's the DOM and DOM Manipulation；Selecting and Manipulating Elemetns；Handling Click Events；Manipulating CSS Styles
- Part 9 Destructuring Arrays；Destructuring Objects；The Spread Operator (...)；Rest Pattern and Parameters；Short Circuiting (&& and ||)；The Nullish Coalescing Operator；Logical Assignment Operators；Coding Challenge #1；The for-of Loop；Enhanced Object Literals；Optional Chaining (?.)；Looping Objects: Object Keys, Values, and Entries；Set；Map；String
- Part 10 Function.


# 变量
## 变量类型
**PRIMITIVE DATA TYPES**
- Number
- String
- Boolean
- Undifined
- Null
- Symbol (ES2015)
- BigInt (ES2020)

**typeof**
对一个值使用 typeof 操作符会返回下列字符串之一
|  数据类型   | typeof 返回  |
|  ----  | ----  |
| Undefined  | "undefined" |
| Boolean  |  "boolean" |
| String  | "string" |
| Number  | "number" |
| Null  | "object" |
| Object  | "object" |
| Symbol  | "symbol" |
|   | "function" |

**falsy values**
5 falsy values: 0, '', undefined, null, NaN

## 操作符
### 操作符
- 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
- `...`spread operator 展开运算符（一变多）
  - 不可用于模板字符串中
  - 置于赋值运算符右边：变成多个值逗号隔开
  - `...arr` ,可以用于将类数组对象转为数组对象，可以轻松连接数组等
  - `...obj`,浅拷贝
  - `...str`
  - 用于函数传参
    ```js
    const f = (foo, bar) => {}
    const a = [1, 2]
    f(...a)
    ```
- `...`rest operator 剩余操作符（多变一）
  - 定义函数时，表示参数个数不确定，`function sum(a,b,...args){}`,arguments是伪数组，args是数组
  - 解构时打包对象 `const { first, second, ...others } = {  first: 1,  second: 2,  third: 3,  fourth: 4,  fifth: 5}first // 1second // 2others // { third: 3, fourth: 4, fifth: 5 }
  - 解构时打包数组 `let array = [1,2,3,4,5];let [a,b,...c] = array;  // a 1,b 2, c [3,4,5]`
- Short Circulting
  - `||` 可以用来设置默认值
  - `&&` 可以用来设置第一个值为true，第二个就实际调用
  - `??` Nullish: null and undefined (NOT 0 or '') (ES2020出来的)
    ```
    restaurant.numGuests = 0;
    const guestCorrect = restaurant.numGuests ?? 10;
    console.log(guestCorrect); //0
    ```
- ES2021
  - `||=`
  - `?? =`
  - `&& =`
- `?.` Optional Chaining,一种对象和数组的更新的特性，也称为可选链接。ES2020引入，遇到null和undefined，都会直接返回。比如`restaurant.openingHours.mon`中restaurant是null或者undefined都会直接返回
### 操作符优先级
[Operator precedence - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## 变量转换
**type conversion**
类型转换只需要 Number(),String(),Boolean()即可。
**type coercion**
```js
const a = 'I am' + 23 + 'years old'; //数字强转字符串
const b = '23'-'10'-3;//10 减法会自动转数字
const c = '23' / '2' // 11.5
const d = '1' + 1;// 11
```
## 解构
其实就是数组用[],对象用{}，不想要的可以置空
```js
//数组解构=================================
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

// 不想要某个值可以留空
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//对象=====================================
// 变量名要和对象中的属性名一致
const {
  name,
  openingHours,
  categories
} = restaurant;
console.log(name, openingHours, categories);

//定义与对象属性名不一致的变量
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//注意这两种写法都可以
const {
  odds: {
    team1,
    x: draw,
    team2
  },
} = game;
console.log(team1, draw, team2);
const {team1,x:draw,team2} = game.odds;

// Default values
const {
  menu = [], starterMenu: starters = []
} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23,b: 7,c: 14};
{a,b} = obj;//这里会报错，要修改为 ({a,b} = obj);
console.log(a, b);

//函数表达式=============================================
const restaurant = {
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // }
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
```



# 函数
JavaScript does not hava passing by reference ,only passing by value. (对象也实际传的是地址的值，是值)
First-Class Functions 表示该函数享有与变量同等的待遇


## 函数声明与表达式
```js
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

//默认值 不传参数和传递undefined是同样的效果
const createBooking = function (flightNum, numPassengers = 1, price = 199) {

};
createBooking("LH123", undefined, 1000);
```
## Higher-Order Function   
接受函数作为参数或者返回函数的函数。
回调函数其实表现了抽象，比如transformer这个函数，我们不知道具体执行的细节，我们只是定义了抽象，这个函数对字符串要做一些处理，具体什么处理是由传入的函数值决定的
```js
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
//接收函数
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', oneWord);

//返回函数 这里已经涉及闭包了
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');
```
## Immediately Invoked Function Expressions (IIFE)
最开始是用来设置变量范围，不让外部访问。但是现代JS后，可以直接快作用域了，这个功能也一般不使用了。一般仅用于直接调用一次函数即可。
```js
(function () {console.log("This will never run agein");})();

(() => {console.log("This will also never run again");})();
```
## Closures
A closure is not a feature that we explicitly use, so we do not create closures manually(手动). A closure simply happens automatically .

闭包不是我们手动创建的，它只是在一些情形下创造，我们需要记住这些情形。

> Any function always has access to the variable environment of the execution context in which the function was created. 任何函数都可以访问该函数被创建时候的执行上下文的变量(即使这个创建时候的执行上下文已经消失)

JS如果在当前作用域没有查询到变量，会查询闭包，然后再是作用链。
我们不能直接访问闭包变量，只是说有这个机制使得我们在操作函数的时候仍然能访问到那个变量。




# This关键字
- 对象.method() :method中的this指调用对象
- 简单调用函数: 函数中的this是undefined
- 箭头函数: 箭头函数中没有this，但是因为scope chain的关系，它会往外找
- 函数名.call(obj,...arr) this指向obj
- 函数名.apply(obj,arr) this指向obj,参数以数组传递
- 函数名.bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
```
// 如果这样，this就会指向buy那个元素！！！所以需要bind修改
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane);

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

```

# JS原始类
## Array

### 实例化
```js
const friends = ['Michael', 'Steven', 'Peter'];
const array = new Array(1991, 1984, 2008, 2020);
```

### 实例操作
- obj = arr[index]
- obj = arr.at(index) index可以为负数 （ES2022）
- const length = arr.length()
- const index = arr.indexOf(obj) 
- const boolean = arr.includes(obj)
- const str = arr.join(str) 以str连接为字符串
- const Array Iterator = arr.entries()

操作数组、改变数组
- const newLength = arr.push(obj) 添加到末尾
- const newLentgh = arr.unshift(obj) 添加到开头
- const obj = arr.pop() 删除最后一个元素，返回该元素
- const obj = arr.shift() 删除第一个元素，返回该元素
- const nousearr = arr.splice(start, deleteCount, item1, item2, itemN) 删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容，改变原数组
- const arr = arr.reverse() :改变原数组

操作数组、不改变数组
- const newarr = arr.slice(startIndex,endIndex) :包含start，不包含end提取，不改变原数组
- const newarr = arr.concat(arr2);


## Object
### 实例化
```js
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  }
};
console.log(jonas.lastName);
console.log(jonas['lastName']);
console.log(jonas.calcAge());
```
### 类操作
- `Object.keys(obj)`:返回一个由一个给定对象的自身可枚举属性组成的数组
- `Object.values(obj)`:返回一个给定对象自身的所有可枚举属性值的数组
- `Object.entries(obj)`:返回一个给定对象自身可枚举属性的键值对数组,Object的entries是属性名+属性值的数组

### Enhanced Object Literals
1、属性名简写：如果属性名和属性值的变量名一样
2、属性为函数的简写
```
{
    order:function(){}
}
//可以写为
{
    order(){}
}
```
3、属性名可计算
```
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
```
### Looping Objects
```js
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, {open,close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
```

## Math

### 类操作
- `Math.random()` 返回一个浮点数，伪随机数在范围从0 到小于1，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1）
- `Math.trunc()` 将数字的小数部分去掉，只保留整数部分


## Set
### 实例化
```js
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
```
### 实例操作
- `set.size`
- `set.has(obj)`
- `set.add(obj)`
- `set.delete(obj)`
- `set.clear()`

### 循环
```js
set.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
```


## Map
Object的键只能是字符串，Map的键可以是任何类型。
### 实例化
```js
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set(true, 'We are open :D');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
]);
```
### 实例操作
- map.set(key,value)
- map.get(key)
- map.has(key)
- map.delete(key)

### loop
```
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 馃帀'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
for (const [key, value] of question) {
 
}

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


question.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
```
#### Convert object to map
#### Convert map to array

## String 
为什么primitive type也有方法呢？这是因为它包装成了`new String()`，只要调用slice()方法，方法执行完成，它又从对象转换成了`string`
### 实例化
```js
String str = new String('jonas');
```

### 实例操作
- `str[index]` :第几个字符（从0开始）
- `str.length`
- `str.indexOf('r')`
- `str.lastIndexOf('r')`
- `str.slice(startIndex)`:包含start (-1表示最后一个)
- `str.slice(startIndex,endIndex)` :包含start,不包含end,长度=end-start`
- `str.toLowerCase()`
- `str.toUpperCase()`
- `str.trim()`
- `str.replace(oldstr,newstr)`
- `str.replaceAll(oldstr,newstr)` ES2021
- `str.includes(str)`
- `str.startsWith(str)`
- `str.endsWith(str)`
- `str.split(str)`
- `str.padStart(length,str)`:把str重复加在字符串最前面，保证字符串length长度
- `str.padEnd(length,str)`
- `str.repeat(5)`:重复几次



# 循环
## fori循环
```js
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];
for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

```

## while循环
## for of 循环 可迭代对象
ES6提出
- for (const obj of arr) 
- for (const [i, obj] of arr.entries())
```js
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);//打印每一项

for (const item of menu.entries()) {
  console.log(item); //每个item都是一个数组 [index,F] 角标index表示索引，角标F表示数据
}
console.log(menu.entries()); //Array Iterator
console.log([...menu.entries()]); //可以将Iterator展开

//因为是数组，所以可以使用数组解构，i是索引，el是元素
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
```
## forEach 
ES5提出，break和continues不在forEach中起作用，可迭代对象原型上的方法
```js
arr.forEach(function (obj, i, arr) {
  
},json);
//json表示回调函数中的this指向，obj是必选
```

# DOM
**Document——Element——Text**
DOM操作其实是WEB API，它是用JS编写的库。（有浏览器实现的官方的DOM规范）除了DOM操作，WEB API还包含其他很多，例如计时器、获取API等等

## Document
### 实例操作
- element = document.querySelector(selectors) ：当通过此方法获取element后，该元素就可以看作html中的一个元素，所以对html该元素的操作都可以获取和赋值了
- Keyboard events are called global events, bacause they do not happen on one specific element.所以我们都在document上添加键盘事件。有三种键盘事件：keydown(只要按) keypress(要是能产生字符的键) keyup

## Element
`Element` 是一个通用性非常强的基类，所有 `Document` 对象下的对象都继承自它。
所有属性继承自它的祖先接口 `Node`，并且扩展了 `Node` 的父接口 `EventTarget`，
### 实例操作
- `element.style.元素属性`
- `element.innerHTML`
- `element.classList` 
  - `remove("className")`
  - `add("className")`
  - `contains("className")`
  - `toggle("className")`：如果这个属性有，就remove,没有就add
- `element.addEventListener("事件名称",function(){})`
- `element.insertAdjacentHTML(position, text)`,使用 insertAdjacentHTML 插入用户输入的 HTML 内容的时候，需要转义之后才能使用
  ```js
  <!-- beforebegin -->
  <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
  </p>
  <!-- afterend -->
  ```

## Node
### 实例操作
- `textContent` 属性表示一个节点及其后代的文本内容
> textContent、innerText、innerHTML的区别和差异
> 
> 1 、textContent属性可以获取指定节点的文本及其后代节点中文本内容，也包括`<script>`和`<style>`元素中的内容；
> innerText也是获取指定节点的文本及其后代节点中文本内容，但不能获取`<script>`和`<style>`元素中的内容。
> innerHTML是获取HTML文本结构内容。
> 
> 2、textContent会获取display:none的节点的文本；而innerText好像会感知到节点是否呈现一样，不作返回。
> 也就是说，textContent能够获取元素的所有子节点上的文本，不管这个节点是否呈现；而innerText只返回呈现到页面上的文本。
> 
> 3、要注意设置文本时被替换的可不只是文本了；这时textContent 、innerText属性相当于innerHTML属性，会把指定节点下的所有子节点也一并替换掉。
> 
> 4、由于 innerText 受 CSS 样式的影响，它会触发重排（reflow），但 textContent 不会。









