> 笔记来源：[尚硅谷 Web 前端 HTML5&CSS3 初学者零基础入门全套完整版](https://www.bilibili.com/video/BV1XJ411X7Ud)

[toc]

# 样式继承与其他概念

## 1. 继承

样式的继承，我们为一个元素设置的样式，同时也会应用到它的后代元素上

继承是发生在祖先后后代之间的，继承的设计是为了方便我们的开发

利用继承，我们可以将一些通用的样式，统一设置到共同的祖先元素上。这样只需设置一次即可让所有的元素都具有该样式

注意，并不是所有的样式都会被继承：

- 比如背景相关的，布局相关等的这些样式都不会被继承。


我们可以再 Zeal 手册中，搜索`background-color`属性，可以看到一个定义的表格。其中就说明了其不可被继承性

![image-20210516175450407](img\277db9b5-5c59-4608-ac7f-807b88370c09.png)

## 2. 选择器的权重

当我们通过不同的选择器，选中相同的元素，并且为相同的样式设置不同的值时，此时就发生了样式的冲突。

发生样式冲突时，应用哪个样式由选择器的权重（优先级）决定选择器的权重

| 选择器         | 权重       |
| :------------- | :--------- |
| 内联样式       | 1, 0, 0, 0 |
| ID 选择器      | 0, 1, 0, 0 |
| 类和伪类选择器 | 0, 0, 1, 0 |
| 元素选择器     | 0, 0, 0, 1 |
| 通配选择器     | 0, 0, 0, 0 |
| 继承的样式     | 没有优先级 |

比较优先级时，需要将所有的选择器的优先级进行相加计算，最后优先级越高，则越优先显示（分组选择器是单独计算的）

选择器的累加不会超过其最大的数量级，类选择器再高也不会超过 ID 选择器

如果优先级计算后相同，此时则优先使用靠下的样式

可以在某一个样式的后边添加`!important`，则此时该样式会获取到最高的优先级，甚至超过内联样式，注意：在开发中一定要慎用！


```html
<style>
  #box1 {
    background-color: orange;
  }
  div {
    background-color: yellow;
  }
  .red {
    background-color: red;
  }
</style>

<div id="box1" class="red" style="background-color: skyblue;">选择器的权重</div>
```

![动画2021-5-4](https://img-blog.csdnimg.cn/img_convert/858a2f406397f3cc60881a1a1ee12a1d.gif)

## 3. 长度单位

### 像素

我们先来看下某度上关于像素（pixel,缩写 px）的介绍

> 像素是指由图像的小方格组成的，这些小方块都有一个明确的位置和被分配的色彩数值，小方格颜色和位置就决定该图像所呈现出来的样子。
>
> 可以将像素视为整个图像中不可分割的单位或者是元素。不可分割的意思是它不能够再切割成更小单位抑或是元素，它是以一个单一颜色的小格存在 [1] 。每一个点阵图像包含了一定量的像素，这些像素决定图像在屏幕上所呈现的大小。

也就是说，显示器屏幕实际上是由一个一个的小点（单位色块，即像素）构成的



**问题 1：像素和分辨率有什么关系呢？**

`分辨率 = 水平方向像素 * 垂直方向像素`

#### 屏幕分辨率

例如，屏幕分辨率是 1920×1080，则该屏幕水平方向有 1920 个像素，垂直方向有 1080 个像素

- 不同屏幕的像素大小是不同的，也就是说像素大小不像我们现行的长度单位（如米/m）那样有着固定的国际标准
- 所以同样的像素大小在不同的设备上显示效果是不一样的，像素越小的屏幕显示的效果越清晰

#### 图像分辨率

例如，一张图片分辨率是 300x200，则该图片在屏幕上按 1:1 缩放时，水平方向有 300 个像素，垂直方向有 200 个像素点

- 图片分辨率越高，1:1 缩放时面积越大
- 图片分辨率越低，1:1 缩放时面积越小

同一台设备像素大小是不变的，那把图片放大超过 100%时占的像素点就多了，但是图像也会变得模糊



**问题 2：屏幕实现图片放大或缩小的原理是什么呢？**

- 其实是设备通过算法对图像进行了像素补足；
- 同理，把图片按小于 100%缩放时，也是通过算法将图片像素减少

### 百分比

也可以将属性值设置为相对于其父元素属性的百分比，可以使子元素跟随父元素（暂且先理解成父元素，后面会详细说）的改变而改变

### em

em 是相对于元素的字体大小来计算的，`1em = <self>.font-size * 10`，也就说 em 值会根据元素本身的字体大小的改变而改变

### rem

rem 是相对于根元素的字体大小来计算，`1em = <root>.font-size * 10`，也就说 em 值会根据根元素的字体大小的改变而改变

```html
<style>
  * {
    font-size: 24px;
  }

  .box1 {
    width: 200px;
    height: 200px;
    background-color: orange;
  }

  .box2 {
    width: 50%;
    height: 50%;
    background-color: aqua;
  }

  .box3 {
    font-size: 20px;
    width: 10em;
    height: 10em;
    background-color: greenyellow;
  }

  .box4 {
    font-size: 20px;
    width: 10rem; /*当时用rem时，不管怎么改本元素的font-size都是不会变的。需要定义root元素的font-size才可以 */
    height: 10rem;
    background-color: red;
  }
</style>

<div class="box1">
  <div class="box2"></div>
</div>

<div class="box3"></div>

<div class="box4"></div>
```

![image-20210516202308458](img\b1a15285-2ffc-4108-a736-4fde99726cb6.png)

## 4. 颜色单位

**人眼能够识别多少种颜色？**

> 正常人有三种视椎细胞，是三色视觉者（红绿蓝），总共能看到大约 100 万种颜色

> 男的大约 130 万 女的大约 180 万

> 大概有经验的油漆工人辨别 1000 种左右，再高就难以分辨了。
>
> 比如红色，可以分为 50 个等级，邻近的两个等级能够别出来，说明他的眼睛辨别能力就很不错了。
>
> 过去的老工人，凭肉眼可辨别 50 种黑色，当然都要有特定的样板色做对比。



我引用了网上的一些答案，也是众说纷纭。不过我的理解是

- 人眼能至少接收 100 多万种颜色，因人而异
- 但最多只能够对 1000 多种颜色做出识别，因人而异



**css 中的颜色名称**

我们生活中会使用各种颜色名称去描述看到的各种颜色，在 css 中当然也可以直接使用颜色名来设置颜色，比如：red、orange、yellow、blue、green 等等



其中有 140 种颜色名称是所有浏览器都支持的，但是有个问题，就是在 css 中直接使用颜色名非常不方便

而且世界上有无数种颜色，人眼也不能分辨出所有颜色，更不可能对每一种颜色都进行命名

而且就算能够有办法对那么多种颜色进行命名，我们也不可能一个一个的去记或去查这种对应关系。试问下，有多少人看一眼某个颜色，就能够在调色板上快速准确的定位那个颜色或者直接叫出那种颜色的名称？这显然不现实，至少现在如此



另外，那么 css 中还可以怎么调和出更多的颜色呢？

在介绍 css 的颜色单位之前，我们首先来了解下光的三原色，因为 css 的颜色单位就是按照光的三原色来调和的

> 发现光的色散奥妙之后，牛顿开始推论：既然白光能被分解及合成，那么这七种色光是否也可以被分解或合成。于是，纷繁的实验和不停的计算充斥着他日后的生活。
>
> 一段时间后，牛顿通过计算，得出了一个结论：七种色光中只有红、绿、蓝三种色光无法被分解，于是也就谈不到合成了。
>
> 而其他四种色光均可由这三种色光以不同比例相合而成。于是红、绿、蓝则被称为“三原色光”或“光的三原色”（注意，这有别于我们熟知的三原色“红黄蓝”）。
>
> 牛顿通过计算得出上述结论后，未能完成实验，便与世长辞。

![image-20210516231231577](img\fcf2b130-ea6d-4414-8aaf-85d3f47c954d.png)

这里再科普下光的三原色和颜料的三原色的区别

> **颜料三原色**（CMYK）：品红、黄、青(天蓝)。色彩三原色可以混合出所有颜料的颜色，同时相加为黑色，黑白灰属于无色系。
>
> **光学三原色**（RGB）：红、绿、蓝(靛蓝)。光学三原色混合后，组成显示屏显示颜色，三原色同时相加为白色，白色属于无色系（黑白灰）中的一种。

![image-20210516231307287](img\97ae10b8-9f8c-47eb-9929-aa774c2eb229.png)



那看到这里有人会问了，**css 为什么不按照颜料的三原色来调和呢？**

因为道理很简单，聪明的小伙伴应该已经知道答案了。上面我们也说过，屏幕是由像素组成的，每个像素就是一个单位色块。而这个单位色块之所以能显示颜色，就是靠发光来实现的



既然光是由三种色光组成的，任何一种颜色均可以由这三种颜色调和出来的，那么为什么我们不能用三原色来表示一种颜色呢？

### RGB 值

RGB 通过三原色的不同浓度来调配出不同的颜色

- 语法：`RGB(red, green, blue)`
- 范围：每一种颜色的范围在 0 ~ 255（0% ~ 100%）之间

### RGBA

就是在 rgb 的基础上增加了一个 a 表示不透明度

- `1`表示完全不透明
- `0`表示完全透明
- `.5`半透明

### 十六进制的 RGB 值

就是 RGB 值的十六进制写法

- 语法：`#RRGGBB`
- 范围：每一种颜色的范围在 00 ~ ff 之间

如果颜色两位两位重复可以进行简写，如`#aabbcc` => `#abc`

在 vscode 中，我们可以看到其会对颜色进行预览展示。并且将鼠标移至 color 处悬浮，会智能的弹出一个 rgb 调色板，方便我们进行调色


![image-20210516231722895](img/6fe9233e-afba-4c77-b1be-3a6882cf1fa5.png)

如果我们看到某种颜色，非常喜欢，~~那么在哪里才能买得到呢？~~ 怎么知道这个颜色的 rgb 值呢？



我们可以直接搜索~~黄色~~，哦不是，取色器！有些录制软件也会自带取色功能，如 FastStone Capture

下载地址：[FastStone Capture - Download](https://faststone-capture.en.softonic.com/)

![动画2021-5-1](https://img-blog.csdnimg.cn/img_convert/4485590939fbd808a386e07146a7e7f4.gif)