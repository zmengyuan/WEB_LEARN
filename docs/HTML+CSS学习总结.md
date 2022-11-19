# 标签分类

- table
- thead
- tbody
- tr
- th
- td

## 块级元素

- h1~h6
- hgroup
- p
- blockquote
- ol
- ul
- li
- embed：IE8不能使用audio
- dl
- dt
- dd

**h5提供**

- header
- footer
- nav
- main
- article
- section
- aside：和主体相关的其他内容（侧边栏）
- summary
- figure
- figcaption
- source
- video

**特点**

- 总会独占一行

- 默认宽度是父元素的全部，父元素多宽，它就多宽

- 默认高度是被子元素撑开

## 行内元素

- q
- br
- em
- strong
- a

**h5提供**

- mark
- details
- time

**特点**

- 自左向右水平排列，只占自身大小
- 如果一行不能容下所有的行内元素，元素会自动换行，继续自左向右。（和我们书写习惯一样）
- 默认宽度和高度都是被内容撑开

**行内元素盒子模型**

- 不支持设置高度和宽度
- 行内元素可以设置`padding`，但是垂直方向`padding`不会影响页面的布局 
- 行内元素可以设置`border`，垂直方向的`border`不会影响页面的布局
- 行内元素可以设置`margin`，垂直方向的`margin`不会影响页面的布局

## 替换元素

兼具行内和块状元素的特点

**img**

不独占一行

对齐问题

```css
<style>
    .imgDiv {
        border: 5px seagreen solid;
    }

    .imgDiv img {
        width: 400px;
        height: 300px;
        /* 只要不是基线对齐，就能消除底部缝隙 */
vertical-align: top;
vertical-align: bottom;
vertical-align: middle;
    }
</style>

<div class="imgDiv">
    <img src="/assets/news.png" alt="">
</div>
```



## iframe

## 行内块元素

- 可以设置高度和宽度
- 不独占一行
- 当用inline-block的时候,设置了宽高的两个a标签如果在body里面换行写了,页面表现就是有个缝,如果在body里面没有换行挨着写的,就不会有缝隙!!!

# 属性

## 基本通用属性

- width
- height
- border（border-四方向）：其顺序是按顺时针方向设置的，剩下的可以由矩形的对称性推导出来
  - border-width
  - border-color：默认使用color的颜色值
  - border-style
- padding（padding-四方向）
- margin（margin-四方向）：如果我们设置的左和上外边距会移动元素自身，设置下和右外边距会移动其他元素
- overflow（overflow-两坐标）：设置父元素如何处理溢出的子元素
- display：`inline`,`block`,`inline-block`,`table`,`none`
- visibility:`visible`,`hidden`
- box-sizing：`content-box`，`border-box`
- outline：不会改变布局
- box-shadow：水平偏移量，垂直偏移量，阴影的模糊半径，阴影的颜色
- border-radius：可以分别指定四个角的圆角，只要记住遵循顺时针方向和矩形中心点对称原则，与`border`不同的是，`border`是从`上`开始顺时针设置，而圆角是从`左上`开始
- float
- clear 清理浮动影响,（本质是为元素添加一个`margin-top`属性，值由浏览器自动计算）
- position
- z-index
- transform
  - scale(1.5)：变为原来的1.5倍，并且不改变原来布局
  - translate(-50%, -50%)：相对于自身移动水平与垂直
- filter
- opacity
- role
- aria-label
- backdrop-filter

**字体**

- color
- font-size
- font-family
- @font-face
- line-height（认真看！！）它会把除了字体本身大小以外多余的平均分配
  - 它的基准是字本身的大小，推荐使用数字设置
- font-style
- font-variant
- font-weight
- text-align：文本的水平对齐
- vertical-align：元素的垂直对齐

**背景**

- background-color

- background-image

  - linear-gradient
  - repeating-linear-gradient()
  - radial-gradient()
  - url

- background-repeat

- background-position

- background-clip：设置底图的范围

- - `border-box` 默认值，背景会出现在边框的下边

- - `padding-box` 背景不会出现在边框，只出现在内容区和内边距

- - `content-box` 背景只会出现在内容区

- `background-origin` 背景图片的偏移量计算的原点
- `background-size` 设置背景图片的大小 
- `background-attachment` 背景图片是否跟随元素移动 

**定位之后**

- left
- top

## 特殊标签属性

# 选择器

## 单个选择器

**通用选择器**

```css
*{}
```

**元素选择器**

elementname{}

```css
p{}
```

**类选择器**

.classname{}

```css
.bule{}
```

**ID选择器**

#idname{}

```css
#red{}
```

**属性选择器**

- 语法1：`[属性名]` 选择含有指定属性的元素

- 语法2：`[属性名=属性值]` 选择含有指定属性和属性值的元素

- 语法3：`[属性名^=属性值]` 选择属性值以指定值开头的元素

- 语法4：`[属性名$=属性值]` 选择属性值以指定值结尾的元素

- 语法5：`[属性名*=属性值]` 选择属性值中含有某值的元素

```css
p[title]{
    color: orange;
}
p[title=e]{
    color: orange;
}
p[title^=e]{
    color: orange;
}
p[title$=e]{
    color: orange;
}
p[title*=e]{
    color: orange;
}
```

## 复合选择器

**交集选择器**

选中同时复合多个条件的元素

选择器1选择器2选择器3选择器n{}

```css
div.red{
    font-size: 30px;
}

.a.b.c{
    color: blue;
}
```

**并集选择器**

同时选择多个选择器对应的元素

选择器1,选择器2,选择器3,选择器n{}

```css
h1,span{
    color: green;
}
```

## 关系选择器

- 父元素：直接包含子元素的元素叫做父元素

- 子元素：直接被父元素包含的元素是子元素

- 祖先元素：直接或间接包含后代元素的元素叫做祖先元素；一个元素的父元素也是它的祖先元素

- 后代元素：直接或间接被祖先元素包含的元素叫做后代元素；子元素也是后代元素

- 兄弟元素：拥有相同父元素的元素是兄弟元素

**子元素选择器**

父元素 > 子元素

```css
div.box > p > span{
}
```

**后代元素选择器**

祖先 后代

```css
div span{}
```

**兄弟元素选择器**

前一个 + 下一个：选择前一个的下一个兄弟

前一组 ~ 下一组：选择前一个的后面所有兄弟

```css
p + span{
}
p ~ span{
}
```

## 伪类选择器

- `:first-child` 第一个子元素
- `:last-child` 最后一个子元素
- `:nth-child()` 选中第n个子元素 
- `:first-of-type` 同类型中的第一个子元素

- `:last-of-type` 同类型中的最后一个子元素

- `:nth-of-type()` 选中同类型中的第n个子元素
- `:not()`否定伪类，将符合条件的元素从选择器中去除
- `:link` 未访问的链接

- `:visited` 已访问的链接 

- - 由于隐私的原因，所以`visited`这个伪类只能修改链接的颜色

- `:hover` 鼠标悬停的链接

- `:active` 鼠标点击的链接

## 伪元素选择器

伪元素，表示页面中一些特殊的并不真实的存在的元素（特殊的位置）

- `::first-letter` 表示第一个字母

- `::first-line` 表示第一行

- `::selection` 表示选中的内容

- `::before` 元素的开始

- `::after` 元素的最后

- `::before`和`::after` 必须结合`content`属性来使用



# 样式的继承

字体类属性一般会继承

# 选择器的权重

内联样式  1,0,0,0

id选择器  0,1,0,0

类和伪类选择器 0,0,1,0

元素选择器 0,0,0,1

通配选择器 0,0,0,0

继承选择器 没有优先级

# 水平方向布局

一个元素在其父元素中，水平布局必须要满足以下的等式：

`margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 其父元素的宽度`

如果没有auto，会自动调整margin-right，只有width，margin-left，margin-right可以设置auto。

- 只要width设置了auto就调整它
- margin两个方向都设置了，就自动均分

元素设置浮动以后，水平布局的等式便不需要强制成立

# 垂直方向布局

子元素是在父元素的内容区中排列的，如果子元素的大小超过了父元素，则子元素会从父元素中溢出

## 父子元素的外边距折叠问题

解决思路：把父元素和子元素的边距分离

```css
.clearfix::before,.clearfix::after{
    content: '';
    display: table;
    clear: both;
}
```



# 浮动

## 特点

1. 浮动元素会完全脱离文档流，不再占据文档流中的位置 

2. 设置浮动以后，元素会向父元素的左侧或右侧移动 

3. 浮动元素默认不会从父元素中移出
4. 浮动元素向左或向右移动时，不会超过前边的浮动元素（先来后到的顺序）
5. 浮动元素不会超过上边的浮动的兄弟元素，最多就是和它一样高 
6. 如果浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移
7. 浮动元素不会盖住文字，文字会自动环绕在浮动元素的周围，所以我们可以利用浮动来设置文字环绕图片的效果

# 脱离文档流

## 块元素

- 不再独占一行
- 脱离文档流以后，块元素的宽度和高度默认都被内容撑开

## 行内元素

- 行内元素脱离文档流以后会，特点和块元素一样，比如可以设置宽高了

脱离文档流以后，不需要再区分块和行内了

# 高度塌陷解决方案

```css
.box1::after {
    content: '';
    display: block;
    clear: both;
}
```



# BFC

BFC（Block Formatting Context）块级格式化环境，

**特点**

1. 开启BFC的元素不会被浮动元素所覆盖
2. 开启BFC的元素子元素和父元素外边距不会重叠
3. 开启BFC的元素可以包含浮动的子元素（主要是利用这个）

有很多方式开启BFC，注意积累。

- float: left；float: right
- position: absolut；position: fixed
- display: 
  -  inline-block
  - table-cell
  - table-caption
  - table
  - table-row
  - table-row-group
  - table-header-group
  - table-footer-group
  - inline-table
  - flow-root
  - flex
  -  inline-flex的直接子元素
  - grid
  - inline-grid的直接子元素

- overflow
  - visible：默认
  - hidden
  - scroll
  - auto

# 定位

## 相对定位

1.  当元素开启相对定位以后，如果不设置偏移量元素，则元素不会发生任何变化（这里注意，不仅仅是位置） 
2. 相对定位是参照于元素在文档流中的位置进行定位的（可以理解为相对于自身原始位置） 
3. 相对定位会提升元素的层级（表现为可以覆盖其他元素） 
4. 相对定位不会改变元素的性质：块还是块，行内还是行内 
5. 相对定位不改变页面布局！！

## 绝对定位

1. 开启绝对定位后，如果不设置偏移量，元素的位置不会发生变化
2. 开启绝对定位后，元素会从文档流中脱离
3. 绝对定位会改变元素的性质：行内变成块，块的宽高被内容撑开（与相对定位相反）
4. 绝对定位会使元素提升一个层级
5. 绝对定位元素是相对于其包含块进行定位的（与相对定位不同）（包含块就是离当前元素最近的开启了定位的祖先元素）

### 水平布局

left + margin-left + border-left + padding-left + width + padding-right + border-right + margin-right + right = 其父元素的宽度

当发生过度约束时

- 如果9个值中没有`auto`，则自动调整`right`值以使等式满足（之前7个值是`margin-right`）

- 如果9个值中有`auto`，则自动调整`auto`的值以使等式满足

### 垂直布局

top + margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom + top = 其父元素的高度

## 固定定位

与绝对定位相同，唯一不同的是，固定定位永远参照于浏览器的视口（viewport，可视窗口）进行定位，不会随网页的滚动条滚动

## 粘滞定位TODO

