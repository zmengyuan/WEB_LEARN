07_伪类选择器之后有个练习 https://flukeout.github.io/

第9题！有父子类可以只选父类

#### 元素选择器 
标签名{} p{}
####  id选择器 
 #id属性值{}  #id1{}
#### clss选择器 
.class属性值{}   .classname{} 
#### 通配选择器  
*{}

### 复合选择器
#### 交集选择器
```
选择器1选择器2选择器3{} 
```

#### 并集选择器
```
选择器1,选择器2,选择器3,选择器n{}
```
### 关系选择器

#### 子类选择器
```
父元素 > 子元素
```

#### 后代选择器
```
祖先 后代{}
```

#### 兄弟元素选择器 
语法：前一个+后一个 
    选择p元素下一个span兄弟

选择某个的后面所有兄弟
    语法： 兄 ~ 弟    


### 属性选择器
语法 [属性名]
[title=abc]
/* ^选择属性值以某值开头   $ 结尾   *含有 
         */
        [title ^=abc]

### 伪类选择器 用:开头
伪类（不存在的类，特殊的类）
    - 伪类用来描述一个元素的特殊状态
        比如：第一个子元素、被点击的元素、鼠标移入的元素...
    - 伪类一般情况下都是使用:开头
        :first-child 第一个子元素
        :last-child 最后一个子元素
        :nth-child() 选中第n个子元素
            特殊值：
                n 第n个 n的范围0到正无穷
                2n 或 even 表示选中偶数位的元素
                2n+1 或 odd 表示选中奇数位的元素
        p:only-child 规定属于其父元素的唯一子元素的每个 p 元素：
            - 以上这些伪类都是根据所有的子元素进行排序!!!

        :first-of-type
        :last-of-type
        :nth-of-type()
            - 这几个伪类的功能和上述的类似，不通点是他们是在同类型元素中进行排序

    - :not() 否定伪类
        - 将符合条件的元素从选择器中去除

### 伪元素
伪类和伪元素
        伪类的效果可以通过添加一个实际的类来达到，而伪元素的效果则需要通过添加一个实际的元素才能达到


        伪元素：表示页面中并不存在的元素，特殊位置的 。比如第一个字，第一行
        它其实就是给伪元素选中的内容加了一个标签然后设置了它的style
        ::first-letter
        ::first-line
        ::selection
        ::before 元素起始位置
        ::after 元素结束位置
        before和after必须结合一个属性content来设置，不然无法显示看出来，通过before和after添加的内容，是无法选中的。
