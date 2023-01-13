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