- Linking a JavaScript File
- Values and Variables
- Data Types
- let, const and var
- Basic Operators
- Operator Precedence
- Strings and Template Literals
- Taking Decisions: if / else Statements
- Type Conversion and Coercion
- Truthy and Falsy Values
- Equality Operators: == vs. ===
- Logical Operators
- The switch Statement
- Statements and Expressions
- The Conditional (Ternary) Operator
- Activating Strict Mode
- Functions
- Function Declarations vs. Expressions
- Arrow functions
- Functions Calling Other Functions
- Reviewing Functions
- Coding Challenge #1
- Introduction to Arrays
- Basic Array Operations (Methods)
- Coding Challenge #2
- Introduction to Objects
- Dot vs. Bracket Notation
- Object Methods
- Coding Challenge #3
- Iteration: The for Loop
- Looping Arrays, Breaking and Continuing
- Looping Backwards and Loops in Loops
- The while Loop
- Coding Challenge #4


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

# 函数
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
- const length = arr.length()
- const newLength = arr.push(obj) 添加到末尾
- const newLentgh = arr.unshift(obj) 添加到开头
- const obj = arr.pop() 删除最后一个元素，返回该元素
- const obj = arr.shift() 删除第一个元素，返回该元素
- const index = arr.indexOf(obj) 
- const boolean = arr.includes(obj)

## Object
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

## Math

### 类操作
- `Math.random()` 返回一个浮点数，伪随机数在范围从0 到小于1，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1）
- `Math.trunc()` 将数字的小数部分去掉，只保留整数部分


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

# DOM
**Document——Element——Text**
DOM操作其实是WEB API，它是用JS编写的库。（有浏览器实现的官方的DOM规范）除了DOM操作，WEB API还包含其他很多，例如计时器、获取API等等

## Document
### 实例操作
- element = document.querySelector(selectors) ：当通过此方法获取element后，该元素就可以看作html中的一个元素，所以对html该元素的操作都可以获取和赋值了

## Element
### 实例操作
- `element.style.元素属性`
- element.addEventListener("事件名称",function(){})

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









