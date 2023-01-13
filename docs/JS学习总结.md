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
### 
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