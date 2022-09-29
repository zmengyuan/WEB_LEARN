1 设置文字垂直方向居中
文字在父元素垂直居中，只需要将父元素的line-height设置为和父元素height一样的值

2 元素水平方向居中
margin: 25px auto;

3 水平布局
只要没有设置width,变化水平方向的其他值不会影响盒子的大小，因为它的总和=父元素的内容区width，它会自动调整auto元素

4 文本省略
四个属性缺一不可
```html
<style>
.box2{
    width: 200px;
    /* 
        white-space 设置网页如何处理空白
            可选值：
                normal 正常
                nowrap 不换行
                pre 保留空白，保留原来的格式

    */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

<div class="box2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, minus fugit in perspiciatis reprehenderit consequuntur aspernatur repellat cumque quidem asperiores quaerat placeat, tenetur vel veritatis deserunt numquam. Dolores, cupiditate enim.
</div>
```

5 图片设置为底线对齐
```
/* 设置图片 */
.img-wrapper img{
    width: 100%;

    /* 图片默认基线对齐，所以需要去掉 */
    vertical-align: bottom;
}
```