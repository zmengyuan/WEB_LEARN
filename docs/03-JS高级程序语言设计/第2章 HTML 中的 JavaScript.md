## 2.1 `<script>`元素
将 JavaScript 插入 HTML 的主要方法是使用`<script>`元素。这个元素是由网景公司创造出来，并最早在 Netscape Navigator 2 中实现的。后来，这个元素被正式加入到 HTML 规范。`<script>`元素有下列 8 个属性。

**async**
表示应该立即开始下载脚本，是异步的，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。

**charset**
使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。一般为UTF-8,Unicode的字符编码。 兼容ASCII。

**crossorigin**
配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin="anonymous"，默认值，配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。

**defer**
表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。

**integrity**
允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。

**language**(废弃)
最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。

**src**
表示包含要执行的代码的外部文件。它可以包含来自外部域的 JavaScript文件，比如`<script src="http://www.somewhere.com/afile.js"></script>`,浏览器在解析这个资源时，会向 src 属性指定的路径发送一个 GET 请求，以取得相应资源，假定是一个 JavaScript 文件。这个初始的请求不受浏览器同源策略限制，但返回并被执行的 JavaScript 则受限制。当然，这个请求仍然受父页面 HTTP/HTTPS 协议的限制。

**type**
代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是 module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。


**注意** 按照惯例，外部 JavaScript 文件的扩展名是.js。这不是必需的，因为浏览器不会检查所包含 JavaScript 文件的扩展名。这就为使用服务器端脚本语言动态生成 JavaScript 代码，或者在浏览器中将 JavaScript扩展语言（如TypeScript，或React的 JSX）转译为JavaScript提供了可能性。不过要注意，服务器经常会根据文件扩展来确定响应的正确 MIME 类型。如果不打算使用.js 扩展名，一定要确保服务器能返回正确的 MIME 类型。

### 2.1.1 标签位置
之前放`<head>`中，但是当js文件过多，导致页面加载慢，会出现空白，所以后来就放在`<body>`最后了。

### 2.1.2 推迟执行脚本
defer 属性只对外部脚本文件才有效。这是 HTML5 中明确规定的，因此支持 HTML5的浏览器会忽略行内脚本的 defer 属性。IE4~7 展示出的都是旧的行为，IE8 及更高版本则支持 HTML5定义的行为。

### 2.1.3 异步执行脚本
标记为 async 的脚本并不保证能按照它们出现的次序执行

### 2.1.4 动态加载脚本
因为 JavaScript 可以使用 DOM API，所以通过向 DOM 中动态添加 script 元素同样可以加载指定的脚本。

```
let script = document.createElement('script'); 
script.src = 'gibberish.js'; 
document.head.appendChild(script);
```

当然，在把 HTMLElement 元素添加到 DOM 且执行到这段代码之前不会发送请求。默认情况下，以这种方式创建的`<script>`元素是以异步方式加载的，相当于添加了 async 属性。不过这样做可能会有问题，因为所有浏览器都支持 createElement()方法，但不是所有浏览器都支持 async 属性。因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载：

```
let script = document.createElement('script'); 
script.src = 'gibberish.js'; 
script.async = false; 
document.head.appendChild(script); 
```

以这种方式获取的资源对浏览器预加载器是不可见的。这会严重影响它们在资源获取队列中的优先级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：

```
<link rel="preload" href="gibberish.js">
```

### 2.1.5 XHTML 中的变化
可扩展超文本标记语言（XHTML，Extensible HyperText Markup Language）是将 HTML 作为 XML的应用重新包装的结果。与 HTML 不同，在 XHTML 中使用 JavaScript 必须指定 type 属性且值为text/javascript，HTML 中则可以没有这个属性。XHTML 虽然已经退出历史舞台，但实践中偶尔可能也会遇到遗留代码，为此本节稍作介绍。语法校验比JavaScript更加严格。

**注意** XHTML 模式会在页面的 MIME 类型被指定为"application/xhtml+xml"时触发。并不是所有浏览器都支持以这种方式送达的 XHTML。

## 2.2 行内代码与外部文件
- 可维护
- 缓存性
- 适应未来

## 2.3 文档模式
IE5.5 发明了文档模式的概念，即可以使用 doctype 切换文档模式。最初的文档模式有两种：混杂模式（quirks mode）和标准模式（standards mode），后来增加了准标准模式（almost standards mode）

```
<!-- HTML 4.01 Strict --> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd"> 

<!-- XHTML 1.0 Strict --> 
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 

<!-- HTML5 --> 
<!DOCTYPE html>
```

## 2.4 `<noscript>`元素
针对早期浏览器不支持 JavaScript 的问题，需要一个页面优雅降级的处理方案

## 2.5 小结

## 2.6 补充 JavaScript在Html中编写的位置
1.可以编写到标签的指定属性中
```
<button onclick="alert('hello');">我是按钮</button>
<a href="javascript:alert('aaa');">超链接</a>
<a href="javascript:;">你也点我一下</a>
```
    
2.可以编写到script标签中  
```
<script type="text/javascript">
    //编写js代码
</script>
```
    
3.可以将代码编写到外部的js文件中，然后通过标签将其引入 
```
<script type="text/javascript" src="文件路径"></script>
```
    
