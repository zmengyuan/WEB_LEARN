## 1.1 历史
为了避免简单的验证也要去走服务器，所以想要开发脚本语言进行客户端验证。
由于没有规范，Netscape Navigator 中的 JavaScript，以及 IE 中的 JScript版本并存让问题突出。

1997 年，JavaScript 1.1 作为提案被提交给欧洲计算机制造商协会（Ecma）。第 39 技术委员会（TC39）承担了“标准化一门通用、跨平台、厂商中立的脚本语言的语法和语义”的任务（参见 TC39-ECMAScript）。TC39 委员会由来自网景、Sun、微软、Borland、Nombas 和其他对这门脚本语言有兴趣的公司的工程师组成。他们花了数月时间打造出 ECMA-262，也就是 ECMAScript（发音为“ek-ma-script”）这个新的脚本语言标准。
1998 年，国际标准化组织（ISO）和国际电工委员会（IEC）也将 ECMAScript 采纳为标准（ISO/IEC-16262）。自此以后，各家浏览器均以 ECMAScript 作为自己 JavaScript 实现的依据，虽然具体实现各有不同。

## 1.2 实现

### 1.2.1 核心（ECMAScript）
ECMAScript，即 ECMA-262 定义的语言，并不局限于Web浏览器，Web 浏览器只是ECMAScript 实现可能存在的一种宿主环境（host environment）。宿主环境提供ECMAScript 的基准实现和与环境自身交互必需的扩展。扩展（比如 DOM）使用 ECMAScript核心类型和语法，提供特定于环境的额外功能。其他宿主环境还有服务器端 JavaScript 平台Node.js 和即将被淘汰的 Adobe Flash。

如果不涉及浏览器的话，ECMA-262 到底定义了什么？在基本的层面，它描述这门语言的如下部分：
- 语法
- 类型
-  语句
-  关键字
-  保留字
-  操作符
-  全局对象


ECMAScript 只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript 实现了ECMAScript，而 Adobe ActionScript 同样也实现了 ECMAScript。

**ECMA-262 第6版** 俗称ES6、 ES2015，2015年6月发布，对ECMAScript来说，这一版具有重要意义，正式支持了类、模块、迭代器、生成器、箭头函数、代理等数据类型

**ECMA-262 第7版** 俗称ES7、ES2016，2016年6月发布，仅包含少量语法层面的增加（e.g. Array.prototype.includes）

**ECMA-262 第8版** 俗称ES8、ES2017，完成与2017年6月，增加了async/await、Object.values/entries，明确支持对象字面量最后的逗号，因为好多服务端语言中，是不支持字典后面还有逗号的。

**ECMA-262 第9版** 俗称ES9、ES2018，2018年6月发布，新增异步迭代、rest、Promise.finally等

**ECMA-262 第10版** 俗称ES10、ES2019，2019年6月发布，新增Array.flat()/flatMap()、String.prototype.trimStart/trimEnd等等等等

**ECMA-262 第11版** 俗称ES11、ES2020，2020年6月发布，新增类的私有属性 #、动态 import导入、bigInt、globalThis

**ECMA-262 第12版** 俗称ES12、ES2021，2021年6月发布，新增逻辑操作符 ?? ?. !.等，这个运算符真的很香

截至2022年10月19日，ECMAScript到13Edition.

每次发布新的版本之后，各大浏览器就会根据新版本的特性提供程度不一的支持。

### 1.2.2 文档对象模型（DOM）
文档对象模型（DOM，Document Object Model）是一个应用编程接口（API），用于在 HTML中使用扩展的 XML。DOM 将整个页面抽象为一组分层节点。HTML 或 XML 页面的每个组成部都是一种节点，包含不同的数据。

DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API，可以轻松地删除、添加、替换、修改节点。


为了保持 Web 跨平台的本性，必须要做点什么。人们担心如果无法控制网景和微软各行其是，那么 Web 就会发生分裂，导致人们面向浏览器开发网页。就在这时，万维网联盟（W3C，World Wide Web Consortium）开始了制定 DOM 标准的进程。
- DOM Level 1
- DOM Level 2
- DOM Level 3
- DOM Living Standard(DOM4)

**注意** DOM 并非只能通过 JavaScript 访问，而且确实被其他很多语言实现了。不过对于浏览器来说，DOM 就是使用 ECMAScript 实现的，如今已经成为 JavaScript 语言的一大组成部分。

### 1.2.3 浏览器对象模型（BOM）

IE3 和 Netscape Navigator 3 提供了浏览器对象模型（BOM） API，用于支持访问和操作浏览器的窗口，使用 BOM，开发者可以操控浏览器显示页面之外的部分。它没有相关标准的JavaScript实现。

总体来说，BOM 主要针对浏览器窗口和子窗口（frame），不过人们通常会把任何特定于浏览器的扩展都归在 BOM 的范畴内。比如，下面就是这样一些扩展：
- 弹出新浏览器窗口
- 移动、缩放和关闭浏览器
- navigator对象，提供关于浏览器的信息
- location对象，提供浏览器加载页面的信息
- screen对象，提供关于用户屏幕分辨率的信息
- performance对象，提供浏览器内存占用、导航行为、时间统计的信息
- 对cookie的支持
- 其他自定义对象，比如XMLHttpRequest等

因为很长时间都没有标准，各个厂牌浏览器都是自己实现自己的BOM，有一些默契的约定俗成，比如window对象和navigator对象，而且大家都会给他们定义自己的属性和方法，HTML5出现以后，各个厂牌应该会日趋一致。

## 1.3 JavaScript 版本
此外，多数浏览器对 JavaScript 的支持，指的是实现 ECMAScript 和 DOM 的程度。

## 1.4 小结

JavaScript 的这三个部分得到了五大 Web 浏览器（IE、Firefox、Chrome、Safari 和 Opera）不同程度的支持。所有浏览器基本上对 ES5（ECMAScript 5）提供了完善的支持，而对 ES6（ECMAScript 6）和
ES7（ECMAScript 7）的支持度也在不断提升。这些浏览器对 DOM 的支持各不相同，但对 Level 3 的支持日益趋于规范。HTML5 中收录的 BOM 会因浏览器而异，不过开发者仍然可以假定存在很大一部分公共特性。
