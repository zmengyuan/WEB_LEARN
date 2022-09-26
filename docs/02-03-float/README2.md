> 笔记来源：[尚硅谷 Web 前端 HTML5&CSS3 初学者零基础入门全套完整版](https://www.bilibili.com/video/BV1XJ411X7Ud)

https://www.yuque.com/u21195183/hfcamg/cfsk0r

[toc]

# 高度塌陷与 BFC

## 1. 高度塌陷

在浮动布局中，父元素的高度默认是被子元素撑开的

当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失

父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱

![动画2021-41](img\a92d5e72-aee5-4961-aa51-81ded41e7e89.gif)

所以高度塌陷是浮动布局中比较常见的一个问题，这个问题我们必须要进行处理！



别急，我们接着往下看

## 2. BFC

BFC（Block Formatting Context）块级格式化环境

- BFC 是一个 CSS 中的一个<mark>隐含的属性</mark>，可以为一个元素开启 BFC
- 开启 BFC 该元素会变成一个<mark>独立的布局区域</mark>

元素开启 BFC 后的特点：

- <mark>不会被浮动元素覆盖</mark>
- <mark>父子元素外边距不会重叠</mark>
- <mark>可以包含浮动的元素</mark>



可以通过一些特殊方式来开启元素的 BFC：

- 设置为<mark>浮动（不推荐）</mark>：很明显下方元素被覆盖了，总不能让所有元素都浮动吧

  ![动画2021-40](img\744f32ad-c97e-4bd8-b85b-dc30e17013e4.gif)

- 设置为<mark>行内块元素（不推荐）</mark>：不再独占一行，宽度变了，同时与下方元素产生了一点空隙

  ![动画2021-39](img\33855b6b-314b-40fe-b5b8-929ed7fc8e2f.gif)

- 设置<mark>`overflow`为非`visible`值</mark>：既没有覆盖元素，也保持了独占一方的特性（保持了宽度），与下方元素也保持了最初的间隙

  常用的方式为元素设置`overflow:hidden`（`overflow:auto`也是 ok 的） 开启其 BFC， 以使其可以包含浮动元素

  `overflow:scroll` 会有滚动条，可能并不需要的，所以不太推荐

  ![动画2021-38](img\09c1ac30-a504-4e0b-9f4a-4b1abf4f1122.gif)

  不过，这种方式也存在一定问题，如下，`overflow`并没有完全清除 div2 布局上受到的影响

  ![动画2021-34](img\3659fdf4-4e73-4676-a901-53af0acb6a4c.gif)

**总结**

- 可以通过变成浮动元素，来防止自身被浮动元素覆盖（有点“以毒攻毒”那味了）
- 可以设置行内块，来防止自身及其他元素被浮动元素覆盖（如果说浮动是“独善其身”，那行内块就有点“兼济天下”的意思）
- 可以设置`overflow`属性，包含浮动元素（既“独善其身”，又“兼济天下”，但仍有缺陷）

![img](https://img-blog.csdnimg.cn/img_convert/b4e408068ab82a6ecab73a1fbc25f9b5.png)



我们可以打开`Zeal`手册（《02-前端开发准备》有介绍），查看关于 BFC 的说明文档

![image-20210526210723927](img\558b7981-93d8-4ff5-ae90-2fe3a3371647.png)

打开`Block formatting context`模块后，可以看到有很多开启 BFC 的方式

![image-20210526210843339](img\d58c242a-eb4d-4af2-ae77-ae1ff4970b39.png)

我这里大概翻译了一下，并整理了一份表格，应该看起来更直观一点（有些概念因为还没有学习，翻译和理解有误的地方还望谅解）

| 元素或属性                                                                                                                                                               | 说明                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `<html>`                                                                                                                                                                 | 文档根元素                                                                       |
| <mark>`float: left`</mark><br/><mark>`float: right`</mark>                                                                                                               | 浮动元素（`float`不为`none`）                                                    |
| <mark>`position: absolut`</mark><br/><mark>`position: fixed`</mark>                                                                                                      | 绝对定位元素                                                                     |
| <mark>`display: inline-block`</mark>                                                                                                                                     | 行内块元素                                                                       |
| `display: table-cell`                                                                                                                                                    | 表格单元，默认值                                                                 |
| `display: table-caption`                                                                                                                                                 | 表格标题，默认值                                                                 |
| `display: table`<br/>`display: table-row`<br/>`display: table-row-group`<br/>`display: table-header-group`<br/>`display: table-footer-group`<br/>`display: inline-table` | 匿名的表格单元，分别是 HTML 表格、表行、表体、表头和表脚的默认值                 |
| <mark>`overflow: hidden`</mark><br/><mark>`overflow: scroll`</mark><br/><mark>`overflow: auto`</mark>                                                                    | `overflow`不为`visible`和`clip`的块元素                                          |
| `display: flow-root`                                                                                                                                                     |                                                                                  |
| `contain: layout`<br/>`contain: content`<br/>`contain: paint`                                                                                                            |                                                                                  |
| `display: flex`<br/>`display: inline-flex`的直接子元素                                                                                                                   | Flex 项，如果它们本身既不是`flex`，也不是`grid`或`table`容器                     |
| `display: grid`<br/>`display: inline-grid`的直接子元素                                                                                                                   | Grid 项，如果它们本身既不是`flex`，也不是`grid`或`table`容器                     |
| `column-count`不为`auto`<br/>`column-width`不为`auto`                                                                                                                    | Multicol 容器，包含`column-count: 1`                                             |
| `column-span: all`                                                                                                                                                       | 应该总是创建一个新的格式化上下文，即使`column-span: all`元素不在 multicol 容器中 |

但是，注意不管哪种方式，多多少少都会有些隐患、缺陷或者说“副作用”


## 3. clear

我们这里设计三个兄弟元素，对前两个元素进行`float`的浮动属性设置，看下效果

![动画2021-36](img\e953643f-6457-4ba4-b392-92db7d65ee62.gif)

由于 box1 的浮动，导致 box3 位置上移也就是 box3 受到了 box1 浮动的影响，位置发生了改变（注意，这里文字并没有被覆盖，《09-浮动》一节说过浮动的特点，其中第 7 点就是“文字环绕”的问题）

那怎么办？

如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过`clear`属性来清除浮动元素对当前元素所产生的影响

`clear`作用：<mark>清除浮动元素对当前元素所产生的影响（本质是为元素添加一个`margin-top`属性，值由浏览器自动计算）</mark>

可选值：

- `left` 清除左侧浮动元素对当前元素的影响
- `right ` 清除右侧浮动元素对当前元素的影响
- `both` 清除两侧中影响较大一侧元素的影响（注意，这里不是同时清除两侧的影响）

![动画2021-37](img\f61ee467-1de2-4d90-b307-f8175ca63c28.gif)

## 4. after

我们学习了上面知识后，了解了高度塌陷问题的解决方式，其中主要有

- 通过`overflow: hidden`等可以为元素开启 BFC

  ![动画2021-35](img\5b6d15f9-f7dd-44e0-b885-3e0794201a16.gif)

- 通过`clear: both`等可以清除浮动对元素产生的影响

  ![动画2021-33](img\ce65e2e3-483a-484d-a43d-c504c6bab745.gif)

同时也了解到，这两种方式都有一定的弊端和隐患。那有没有一种更好的方式去解决高度塌陷的问题呢？

答案当然是：有！



我们直接上效果图

![动画2021-32](img\bd3d1415-775f-4f27-b5bc-f8fc55ed61d6.gif)

**Q1：这里使用了一个伪元素选择器`::after`，那有人会问了，跟在 box2 下直接定义一个 box3 有什么区别呢？**

A：我们知道，网页的结构思想是：结构+表现+行为。在 box2 下直接定义一个 box3，属于结构；而使用伪元素选择器，属于表现

而高度塌陷问题属于表现问题，定义 box3 的目的是为了撑起 box1 的内容，属于表现，而不是结构，所以在 css 中定义`::after`更符合网页的编程思想

**Q2：为什么需要使用`display: block`呢？**

A：因为默认情况下，`::after`伪元素是一个行内元素，如果不转为块元素，将仍然撑不起 box1 的高度



## 5. clearfix

我们在前面《06-盒模型》一节中说过垂直布局中边距重叠的问题：相邻的垂直方向外边距会发生重叠现象

![动画2021-30](img\a0d340a1-d243-4a96-a00c-e3328d75afae.gif)

如上图所示，子元素设置了一个`margin-top`之后，父元素跟随子元素一起进行了移动

即我们之前说的<q>父子元素间相邻外边距，子元素会传递给父元素（上外边距）</q>

聪明的小伙伴已经想到了，用刚才说的伪元素选择器啊


好，我们先来看下效果

![动画2021-29](img\2adf7878-1a0c-44e0-bd41-41932a118ab3.gif)

貌似是没有任何变化，到底是什么地方不对呢？



我们再来回顾下使用`after`伪元素的心路历程：

- 使用无内容的 box3 撑起 box1 ==》表现代替结构（`::after`代替 box3）
- `clear`清除浮动对元素产生的影响（还记得`clear`的原理么？）



其实就是给元素设置了一个`margin-top`属性，不过这个在开发者工具中是看不到的

既然如此，就相当于在 box2 下面添加一个 box3，然后给 box3 设置一个`margin-top`属性

到此为止，

∵ <q>相邻的垂直方向外边距</q> 这个条件仍然满足

∴ <q>会发生重叠现象</q>这个结论也依然成立

具体点就是，<q>父子元素间相邻外边距，子元素会传递给父元素（上外边距）</q>，表现为 box1 和 box2 同步往下移动

那我们应该怎么做才能解决这个问题？ ~~凭你们朴素的情感，应该怎么判？~~ 当然就是让上述条件不满足呗！

怎么能够不满足？当然是让两个元素垂直外边距不相邻啊！

好，多说无益，我们直接上代码看效果！

![动画2021-28](img\12cad4ee-12f5-477c-a19f-1b1e1e697ba7.gif)

我们用了`before`伪元素选择器，目的当然是让 box1 和 box2 的外边距不相邻，但是好像并没有效果

我们再换成`display: inline-block`属性看看

![动画2021-27](img\4ae813a3-3709-4aaa-a41d-d751e12c421a.gif)

好像是解决了父元素布局的问题，但是子元素怎么还往下跑了一段距离？ ~~是谁给的勇气？~~

因为`inline-block`兼顾行内元素和块元素的特点，既可以设置宽高也不独占一行

在没有设置宽高时，会存在一个默认高度，所以`inline-block`仍然行不通

还有一个属性，`display: table`

![动画2021-26](img\65df83b1-8f47-4a78-844b-1dbb1cd4b28b.gif)

Bingo！实现了我们最终想要的效果

**Q1：为什么没有使用 clear 属性？**

A：不是说了吗？`clear`是为了清除浮动对布局的影响，我们现在没有浮动的元素啊，我们要讨论的也不是浮动的问题

**Q2：display 不是还有一个`none`属性么，为什么不用呢？**

A：`none`属性是不占据位置，但是也不能让元素相邻的外边距分离啊

**Q3：为什么`table`值就可以呢？**

A：这个问题问的非常好，算是问到点上了！我们上面在讲开启 BFC 的一些方法的时候，也提到了该属性。而且，应该牢记的是，元素开启 BFC 后的其中一个特点就是 <q><mark>父子元素外边距不会重叠</mark></q>。当然，这里也需要合理选择伪元素选择器，使其外边距不相邻才行

另外，总结一下：

- 高度塌陷问题，一般用`::after`
- 外边距重叠问题，一般用`::before`

不知道到这里，大家能不能想明白这两件事情



那么问题来了，有没有一个两全其美的办法，既可以解决高度塌陷，又可以解决外边距重叠呢？



当然有！`clearfix` 这个样式就可以同时解决高度塌陷和外边距重叠的问题

当你在遇到这些问题时，直接使用`clearfix`这个类即可，他就可以帮你轻松搞定 css 中的两大难题

```css
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

其中`.clearfix::before`是为了解决外边距重叠问题

```css
.clearfix::before {
  content: "";
  display: table;
}
```

`.clearfix::after`是为了解决高度塌陷问题

```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

两者合在一起，就可以完美地解决高度塌陷和外边距重叠这两大“世纪难题”了

![image-20210528030932616](img\8555acd4-0faa-4417-8647-03cf8e41666f.png)
