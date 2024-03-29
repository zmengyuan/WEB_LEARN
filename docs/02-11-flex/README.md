## 1 弹性盒简介

flex（弹性盒、伸缩盒）

- 是css3中的又一种布局手段，它主要用来代替浮动来完成页面的布局
- flex可以使元素具有弹性，让元素可以跟随页面的大小的改变而改变

```
<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    ul{
        width: 800px;
        border: 10px red solid;
    }
    li{
        width: 100px;
        height: 100px;
        background-color: #bfa;
        font-size: 50px;
        text-align: center;
        line-height: 100px;
        //float: left

    }
    li:nth-child(2){
        background-color: pink;
    }
    li:nth-child(3){
        background-color: orange;
    }
</style>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</body>
```
再加上浮动就会出现高度塌陷问题

### 弹性容器

- 要使用弹性盒，必须先将一个元素设置为弹性容器
- 我们通过 display 来设置弹性容器
    display:flex  设置为块级弹性容器
    display:inline-flex 设置为行内的弹性容器

```
<style>
    ul{
        ...
        /* 设置弹性容器 */
        display: flex;
    }
</style>
```

![](img\微信截图_20221020151550.png)


flex-direction 指定容器中弹性元素的排列方式
- row 默认值，弹性元素在容器中水平排列（左向右），主轴 自左向右   
- row-reverse 弹性元素在容器中反向水平排列（右向左），主轴 自右向左   
- column 弹性元素纵向排列（自上向下）
- column-reverse 弹性元素方向纵向排列（自下向上）

主轴：弹性元素的排列方向称为主轴
    
侧轴：与主轴垂直方向的称为侧轴
    

### 弹性元素
- 弹性容器的子元素是弹性元素（弹性项）(只有直接子元素是弹性元素)
- 弹性元素可以同时是弹性容器

flex-grow 指定弹性元素的伸展的系数
- 当父元素有多余空间的时，子元素如何伸展
- 父元素的剩余空间，会按照比例进行分配

flex-shrink 指定弹性元素的收缩系数
- 当父元素中的空间不足以容纳所有的子元素时，如果对子元素进行收缩
