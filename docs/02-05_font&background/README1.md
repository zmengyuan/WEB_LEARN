> 笔记来源：[尚硅谷 Web 前端 HTML5&CSS3 初学者零基础入门全套完整版](https://www.bilibili.com/video/BV1XJ411X7Ud)

https://www.yuque.com/u21195183/hfcamg/vy661k
[toc]

# 字体

## 1. 字体相关的样式

我们前面讲过字体的两个属性

- `color`用来设置字体颜色

- `font-size`字体的大小
  - `em` 相当于当前元素的一个`font-size`
  - `rem` 相对于根元素的一个`font-size `

当然，字体的属性并不止这些

## 2. font-family

`font-family` 字体族（字体的格式）

- `serif` 衬线字体

- `sans-serif` 非衬线字体

- `monospace` 等宽字体

- `cursive` 手写体

- `fantasy` 梦幻字体

上述字体均不表示具体的某种字体，而是字体的分类

我们经常使用的一些字体，如`微软雅黑`、`黑体`、`楷体`、`宋体`、`Consolas`等，才是具体的某种字体

也就是说，<mark>`font-family` 指定字体的类别，浏览器会自动使用该类别下的字体 </mark>

`font-family`可以同时指定多个字体，多个字体间使用`，`隔开

字体生效时优先使用第一个，第一个无法使用则使用第二个，以此类推

```css
font-family: "Courier New", Courier, monospace;
```

## 3. 几种字体（随便看看，不看也可以）

我是乱分类的，随便看看就好

### 手写体

**Indie Flower**

![image-20210530150501201](https://img-blog.csdnimg.cn/img_convert/5e61429db239e98963586c869c27aead.png)

**Ink Free**

![image-20210530150547525](https://img-blog.csdnimg.cn/img_convert/01ef23c34bee2c9e4cbe1f043dd3b6da.png)

**Nanum Pen**

![image-20210530151638440](https://img-blog.csdnimg.cn/img_convert/1f564db206d5a9e14aa60b3ee24091d0.png)

**MV Boli**

![image-20210530151419977](https://img-blog.csdnimg.cn/img_convert/4bb92b873db63ecca98511778c0b17d7.png)

**Segoe Print**

![image-20210530151937732](https://img-blog.csdnimg.cn/img_convert/b2ee8359722a57602592764f02e8d1cb.png)

**Shadows Into**

![image-20210530152032865](https://img-blog.csdnimg.cn/img_convert/ea4759bf9241a3c272f60185d83a64d7.png)

### 艺术体

**Barrio**

![image-20210530144925484](https://img-blog.csdnimg.cn/img_convert/529e00359270f5ed6c76ab7aefab510d.png)

**Julius Sans One**

![image-20210530150656102](https://img-blog.csdnimg.cn/img_convert/08bc039ec67f480b350f611b03e73b4d.png)

**Lobster**

![image-20210530150750662](https://img-blog.csdnimg.cn/img_convert/fe49ec07bc69acc0821ad786a4bde82d.png)

**Monoton**

![image-20210530151219084](https://img-blog.csdnimg.cn/img_convert/0e23afa75c7a2435a4ef811e666f9ce3.png)

**Poiret One**

![image-20210530151802098](https://img-blog.csdnimg.cn/img_convert/134a20c01b52b7bf3e956e3797f2cd7b.png)

### 乱码字体

**MT Extra**

![image-20210530151339624](https://img-blog.csdnimg.cn/img_convert/2fc9c72c2fe29ec6b128cf4f658804ad.png)

**Symbol**

![image-20210530152221092](https://img-blog.csdnimg.cn/img_convert/4f1970f3d6c33a4d3aa954a454b0f4b9.png)

**Webdings**

![image-20210530152413018](https://img-blog.csdnimg.cn/img_convert/baa93c39706e92685e08bc86e5eeae79.png)

**Wingdings**

![image-20210530152450136](https://img-blog.csdnimg.cn/img_convert/be8c184600f286f23c67bca3ca173cd4.png)

### 中文字体

**方正粗黑宋简体**

![image-20210530153059327](https://img-blog.csdnimg.cn/img_convert/97d9fc2e7c6ef6e292ef60c1bce24992.png)

**微软雅黑**

![image-20210530153435455](https://img-blog.csdnimg.cn/img_convert/9c2cdbaf3d24848c92930a656497fa2c.png)

**黑体**

![image-20210530153142702](https://img-blog.csdnimg.cn/img_convert/cb88ce51af854d0495ad383713fd42bf.png)

**楷体**

![image-20210530153207163](https://img-blog.csdnimg.cn/img_convert/82bca9d833d14e4d61338e2f3109fd7d.png)

**宋体**

![image-20210530153247029](https://img-blog.csdnimg.cn/img_convert/cf7281c1fe37b4a32d2702e85a1047d1.png)

**仿宋**

![image-20210530153119913](https://img-blog.csdnimg.cn/img_convert/b97ebc4ded090976518db193123a04f3.png)

## 4. @font-face

我们除了可以使用系统自带的字体样式外，还可以在服务器端自定义字体位置

`@font-face`可以将服务器中的字体直接提供给用户去使用

```css
@font-face {
  /* 指定字体名字 */
  font-family: "myFont1";
  /* 服务器中字体路径 */
  src: url("/font/ZCOOLKuaiLe-Regular.woff"),
    url("/font/ZCOOLKuaiLe-Regular.otf"),
    url("/font/ZCOOLKuaiLe-Regular.ttf") format("truetype"); /* 指定字体格式，一般不写 */
}

p {
  font-size: 30px;
  color: salmon;
  font-family: myFont1;
}
```


**问题**

1. 加载速度：受网络速度影响，可能会出现字体闪烁一下变成最终的字体
2. 版权：有些字体是商用收费的，需要注意
3. 字体格式：字体格式也有很多种（woff、otf、ttf），未必兼容，可能需要指定多个

## 5. 图标字体（iconfont）

### 图标字体简介

在网页中经常需要使用一些图标，可以通过图片来引入图标但是图片大小本身比较大，并且非常的不灵活

所以在使用图标时，我们还可以将图标直接设置为字体，然后通过`@font-face`的形式来对字体进行引入

这样我们就可以通过使用字体的形式来使用图标

### fontawesome

官方网站：[https://fontawesome.com/](https://fontawesome.com/)

下载解压完毕之后，直接将 css 和 webfonts 移动到项目中即可使用

**示例**

```html
<link rel="stylesheet" href="/font/fontawesome/css/all.css" />
<style>
  i {
    color: green;
  }

  .fa-venus-mars,
  .fa-mars-double {
    color: red;
  }

  .fa-html5 {
    color: #e34d22;
  }

  .fa-css3 {
    color: blue;
  }

  .fa-js {
    color: #d1b514;
  }
</style>

<!-- 大小 -->
<i class="fab fa-weixin fa-lg"></i>
<i class="fab fa-weixin fa-2x"></i>
<i class="fab fa-weixin fa-3x"></i>
<br />

<!-- 边框 -->
<i class="fab fa-weixin fa-2x fa-border"></i>
<br />

<!-- 旋转 -->
<i class="fab fa-weixin fa-2x  fa-rotate-90 "></i>
<!-- 水平对称 -->
<i class="fab fa-weixin fa-2x fa-flip-horizontal "></i>
<!-- 垂直对称 -->
<i class="fab fa-weixin fa-2x fa-flip-vertical "></i>
<br />

<!-- 动画 -->
<i class="fa fa-venus-mars fa-3x fa-spin"></i>
<i class="fa fa-mars-double  fa-3x fa-pulse"></i>
<br />

<!-- 列表 -->
<ul class="fa-ul">
  <li><i class="fa-li fa fa-check-square"></i>can be used</li>
  <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
  <li><i class="fa-li fa fa-square"></i>in lists</li>
</ul>
<br /><br /><br />

<!-- 组合 -->
<span class="fa-stack fa-lg">
  <i class="fab fa-html5 fa-stack-1x fa-10x"></i>
  <i class="fab fa-css3 fa-stack-1x fa-4x"></i>
  <i class="fab fa-js fa-stack-1x fa-2x"></i>
</span>
```

**效果**

![动画](img\51536d1a-6e4c-46f3-99a9-b45ba4620372.gif)

其中`fas`/`fab`是免费的，其他是收费的

### 图标字体其他使用方式

#### 通过伪元素设置

1. 找到要设置图标的元素通过`::before`或`::after`选中
2. 在`content`中设置字体的编码
3. 设置字体的样式
   - `fab`：`font-family: 'Font Awesome 5 Brands';`
   - `fas`：`font-family: 'Font Awesome 5 Free'; font-weight：900;`

**示例**

```html
<style>
  .poem {
    width: 200px;
    height: 300px;
    margin: auto;
  }

  li {
    list-style: none;
    margin-left: -40px;
  }

  li::before {
    content: "\f130";
    /* font-family: 'Font Awesome 5 Brands'; */
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
    color: gray;
  }
</style>

<div class="poem">
  <h1>武陵春·春晚</h1>
  <p>[宋] 李清照</p>
  <ul>
    <li>风住尘香花已尽，</li>
    <li>日晚倦梳头。</li>
    <li>物是人非事事休，</li>
    <li>欲语泪先流。</li>
    <li>闻说双溪春尚好，</li>
    <li>也拟泛轻舟。</li>
    <li>只恐双溪舴艋舟，</li>
    <li>载不动、许多愁。</li>
  </ul>
</div>
```

**效果**

![image-20210530185058977](img\0b6de8e2-24f3-4cd7-9147-506d9b651be3.png)

#### 通过实体设置

通过实体来使用图标字体：`&#x图标编码;`

**示例**

```html
<i class="fas">&#xf025;</i>
```

**效果**

![image-20210530185606771](img\9983affd-2d85-473d-9118-e0214c73610b.png)

### iconfont

官方网站：[https://www.iconfont.cn/](https://www.iconfont.cn/)

iconfont 是阿里的一个图标字体库，海量图标库，图标字体非常丰富

但是版权有点模横两可，如果需要商用，最好联系作者

不过一般情况下，公司企业都会有自己的 UI 设计团队，会自己去进行设计

这里使用方式大同小异，不过

- iconfont 需要添加购物车后再添加至项目然后下载，下载包中有 demo.html，详细介绍了使用方式
- iconfont 也提供了一种在线方式，直接在`我的项目`中选择`在线链接`可以复制出一份`@font-face`的 css 代码

![image-20210530193808551](img\0dd00dd2-da2c-40e4-b48d-9ff023ad584c.png)

后续步骤与前面介绍的一致

**示例**

```html
<!-- <link rel="stylesheet" href="/font/iconfont/iconfont.css"> -->
<style>
  i.iconfont {
    font-size: 100px;
  }

  p::before {
    content: "\e811";
    font-family: "iconfont";
    font-size: 50px;
  }

  /* 3、通过在线连接：这里link和@font-face择其一即可  */
  @font-face {
    font-family: "iconfont";
    /* Project id 2580407 */
    src: url("//at.alicdn.com/t/font_2580407_c0kpuhebb7r.woff2?t=1622373966454")
        format("woff2"), url("//at.alicdn.com/t/font_2580407_c0kpuhebb7r.woff?t=1622373966454")
        format("woff"),
      url("//at.alicdn.com/t/font_2580407_c0kpuhebb7r.ttf?t=1622373966454")
        format("truetype");
  }
</style>

<!-- 1、通过字符实体设置 -->
<i class="iconfont">&#xe810;</i>
<i class="iconfont">&#xe811;</i>
<i class="iconfont">&#xe812;</i>
<i class="iconfont">&#xe813;</i>

<!-- 2、通过伪元素设置 -->
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam deserunt
  tempore fugit quos eaque, ipsa rerum suscipit iure cumque aspernatur esse
  cupiditate nihil quas nulla odit? Sequi accusantium labore maiores.
</p>
```

**效果**

![image-20210530192058860](img\bc33b46f-51eb-47d6-874e-0b991ab41f0b.png)

## 6. 行高

### 行高`line height`

文字占有的实际高度，可以通过`line-height`来设置行高

- 可以直接指定一个大小 `px`/`em`
- 也可以直接为行高设置一个小数（字体大小的倍数）

行高经常还用来设置文字的行间距：`行间距 = 行高 - 字体大小`

### 字体框

字体框就是字体存在的格子，设置`font-size`实际上就是在设置字体框的高度

行高会在字体框的上下平均分配

![image-20210601223707187](img\9a77bf59-7ff6-4e46-a511-5849f89e3518.png)

**示例**

```css
border: 1px black solid;
font-size: 100px;
/* line-height: 100px; */
```

不指定行高时，`content`高度`131.556px`：说明`line-height`默认值大约是`1.31` ~ `1.32`(倍数)

![image-20210601221951343](img\eba6ad86-c39f-4c79-b1dd-ed4f5ca293f1.png)

指定行高时，`content`高度`99.556px`：少了`0.444px`，并且字母`p`下面溢出

![image-20210601222500138](img\a6b8dc38-7572-4821-aff4-c597c3b2adfc.png)

**存疑问题**

经测试，`line-height`大约比`100.444px`略大一点时，`content`高度才会大于`100px`，暂未知原因

### 字体的简写属性

`font` 可以设置字体相关的所有属性：

`font: font-style font-variant font-weight font-size/line-height font-family`

其中某些值可以不写，会用默认值

**默认值**

| 属性           | 默认值       | 其他常用值       |
| :------------- | :----------- | :--------------- |
| `font-style`   | `normal`     | `italic`         |
| `font-variant` | `normal`     | `small-caps`     |
| `font-weight`  | `normal`     | `bold`           |
| `font-size`    | `medium`     | `small`、`large` |
| `line-height`  | `normal`     |                  |
| `font-family`  | 取决于浏览器 |                  |

**示例 1**

```css
/* font-size: 50px;
font-family: 'Courier New', Courier, monospace; */
font: 50px "Courier New", Courier, monospace;
```

![image-20210601230239887](img\124c656e-ac4f-4b37-9b92-3999256f87d5.png)

**示例 2**

```css
/* small-caps值设置小型大写字母字体，所有小写变大写，同时字体尺寸更小（了解即可） */
font: bold small-caps italic 50px "Courier New", Courier, monospace;
```

![image-20210601230211370](img\9a9bf83f-6150-42a9-8d70-6a92e7cf43ac.png)

**注意 Pay Attention：简写属性省略的值会使用默认值，所以会覆盖前面的非简写属性（不仅仅对于字体而言）**

## 7. 文本对齐方式

### 水平对齐

`text-align` 文本的水平对齐

| `text-align`属性值 | 对齐方式说明 |
| :----------------- | :----------- |
| `left`             | 左侧对齐     |
| `right`            | 右侧对齐     |
| `center`           | 居中对齐     |
| `justify`          | 两端对齐     |

**`left` 左侧对齐**

![image-20210601232940646](img\d3532209-c738-4720-9d41-e908dd9c6a05.png)

**`right` 右侧对齐**

![image-20210601233019483](img\0de71131-550a-4758-a544-722540c06c54.png)

**`center` 居中对齐**

![image-20210601233048435](img\044b3b85-237a-4190-8e8a-4b1836b6cae5.png)

**`justify` 两端对齐**

![image-20210601233114528](img\361c08e4-ff4a-4848-a5bd-de54a3879e60.png)

### 垂直对齐

`vertical-align` 设置元素垂直对齐的方式

| `vertical-align` 属性值 | 对齐方式说明 |
| :---------------------- | :----------- |
| `baseline`              | 基线对齐     |
| `top`                   | 顶部对齐     |
| `bottom`                | 底部对齐     |
| `middle`                | 居中对齐     |

**`baseline` 基线对齐**

![image-20210601234706602](img\0ed1cc44-31e1-4721-a86f-44475662a378.png)

**`top` 顶部对齐**

![image-20210601234726066](img\b8c3c56c-8761-4da8-b6d7-8ce3877f8e8b.png)

**`bottom` 底部对齐**

![image-20210601234744834](img\6242deb7-373b-4617-b59e-e1cdab15fd5f.png)

**`middle` 居中对齐**

![image-20210601234759927](img\f827f5ea-96e7-4fdc-ade0-f0d9112be4e5.png)

这里的居中对齐高度 = 基线高度 + x 的高度 / 2

这种居中对齐并非实际上的居中对齐，一般也不会用这种方式对文字进行垂直方向的对齐

**`vertical-align` 还可以设置 px 值设置垂直对齐方式**

```css
vertical-align: 10px;
```

![image-20210601235427136](https://img-blog.csdnimg.cn/img_convert/77cbc76d13c88a4ba90c06fd813b3e71.png)

**图片的垂直对齐问题**

```html
<style>
  .imgDiv {
    border: 5px seagreen solid;
  }

  .imgDiv img {
    width: 400px;
    height: 300px;
  }
</style>

<div class="imgDiv">
  <img src="/assets/news.png" alt="" />
</div>
```

![image-20210602000108245](img\def27a72-4b56-47e4-8293-d79c2c724f76.png)

明显默认情况下，图片底部有一定缝隙，我们稍作修改，给 img 元素添加`vertical-align`属性值

```css
/* 只要不是基线对齐，就能消除底部缝隙 */
vertical-align: top;
vertical-align: bottom;
vertical-align: middle;
```

![image-20210602000431348](img\786d6de8-a8c5-4db1-a599-37e1b288e4a8.png)

**Q：为什么图片会有缝隙？**

A：图片属于替换元素，特点与文本一致，也有自己的基线，默认也是基线对齐。而基线位置不在最底部，所以会出现缝隙
