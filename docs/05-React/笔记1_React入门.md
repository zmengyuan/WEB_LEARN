# React入门

## 简介
1、React是什么
用于构建用户界面的JavaScript库

本来JS要
- 发送请求获取数据
- 处理数据（过滤、整理格式等）
- 操作DOM呈现页面（React只做这个）

所以React是一个将数据渲染为HTML视图的开源JavaScript库

2、谁开发的
Facebook

3、为什么要学
- 原生JavaScript操作DOM繁琐、效率低（DOM-API操作UI）
- 使用JavaScript直接操作DOM，浏览器就会不断的重绘重排
- 原生JavaScript没有组件化编码方案，代码复用率低

4、React的特点
- 采用组件化模式、声明式编码，提高开发效率及组件复用率
- 在React Native中可以使用React语法进行移动端开发
- 使用DOM+优秀的Diffing算法，尽量减少与真实DOM的交互
  
5、学习React之前你要掌握的JavaScript的基础知识
- 判断this的指向
- class
- ES6语法规范
- npm包管理器
- 原型、原型链
- 数组常用方法
- 模块化

## React的基本使用
旧版本：16.8
我们写react不是写原生js，是写的jsx(读：JS叉)
相关js库：
- react.js：React核心库。
- react-dom.js：提供操作DOM的react扩展库。
- babel.min.js：解析JSX语法代码转为JS代码的库。

```html
<html>
  <body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>

    <!-- 引入react核心库,引入了全局就多了一个React变量 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入react-dom，用于支持react操作DOM 全局多了ReactDOM-->
    <script
      type="text/javascript"
      src="../js/react-dom.development.js"
    ></script>
    <!-- 引入babel，用于将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <!-- 此处一定要写babel -->
    <script type="text/babel">
      //1.创建虚拟DOM
      const VDOM = (<h1>Hello,React</h1>); /* 此处一定不要写引号，因为不是字符串 */
      //2.渲染虚拟DOM到页面，你把哪个虚拟DOM渲染到哪个容器
      ReactDOM.render(VDOM, document.getElementById("test"));

      // 下面两行会替换原来的，而不是追加
      // const VDOM2 = <h1>Hello,React</h1>;
      // ReactDOM.render(VDOM2, document.getElementById("test"));
    </script>
  </body>
</html>

```

打开会发现提醒：`babel.min.js:24 You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/` 这是因为浏览器打开的时候才发现它是babel,如果是真实环境就不能用，太多一起编译可能会白屏。

## JSX
为什么React要用JSX，不用原生的JS。因为原生JS创建虚拟DOM太繁琐了

```js
//jsx
const VDOM = (
  <h1 id="title">
    <span>Hello,React</span>
  </h1>
);
//对比原生js
const VDOM = React.createElement(
  "h1",
  { id: "title" },
  React.createElement("span", {}, "Hello,React")
);
```
其实JSX被babel翻译之后就是原生JS，JSX就像一种语法糖

**虚拟DOM和真实DOM**
- 本质是Object类型的对象（一般对象）
- 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
- 虚拟DOM最终会被React转化为真实DOM，呈现在页面上。