# CSS隐藏滚动条

## 横向滑动/滚动隐藏滚动条

### 简介

> 移动端浏览器将页面的滚动条自动隐藏，同时又保证页面可以滚动，用户可以手动上下翻。
>
> PC端浏览器不会将页面的滚动条自动隐藏，在出现横向滚动条时候有可能会覆盖内容，直接隐藏横向滚动条会导致无法横向滚动。
>
> 如何做到既隐藏滚动条，又可以横向滚动？
>
> 设想是不是可以隐藏了滚动条的大部分，留下一小部分，用来滚动查看内容。
>
> 下面一起来实现这个hack吧

### 

### 示例

```html
//html结构
<div class="demo-tab">
  <ul id="items">
    <li class="item"><div class="item-on"></div></li>
    <li calss="item"><div></div></li>
    <li class="item"><div></div></li>
    <li class="item"><div></div></li>
  </ul>
</div>

//css
<style>
.demo-tab{
  position:fixed;
  bottom:41px;
  overflow:hidden;/*主要*/
  width:100%;
  height:50px;/*主要*/
}
.demo-tab ul{
  width:100%;
  height:60px;/*主要*/
  font-size:0;
  background:#e8e8e8;
  overflow-x:scroll;/*主要*/
  overflow-y:hidden;/*主要*/
  white-space:nowrap;
}
.item{
  display:inline-block;
  width:33.3333333%;
  height:100%;
  padding:10px 0;
  font-size:18px;
  background:#9c9c9c;
}
.item-on{
  height:12px;
  background:#04be02;
}
</style>
```

**原理：**

外层的div的高度要比里层ul/div或者其它元素的高度小，然后overflow:hidden，这样就可以隐藏了滚动条的大部分，留下一小部分，用来滚动查看内容。



### 应用场景

- 顶部或者底部的Tab比较多，需要滚动显示

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | 9+   | yes   |

### 参考：

1. https://www.cnblogs.com/youlinwd/p/5540864.html



## 纵向滑动/滚动隐藏滚动条

### 简介

> 移动端浏览器将页面的滚动条自动隐藏，同时又保证页面可以滚动，用户可以手动上下翻。
>
> PC端浏览器不会将页面的滚动条自动隐藏，在出现横向滚动条时候有可能会挤压页面内容，造成页面布局混乱。
>
> 如何做到既隐藏滚动条，又可以纵向滚动？



### 示例

```html
//html结构
<div class="outer-container">
     <div class="inner-container">
        <div class="content">
            ......
        </div>
     </div>
 </div>

//css
<style>
.outer-container,.content {
    width: 200px; height: 200px;
}
.outer-container {
    position: relative;
    overflow: hidden;
}
.inner-container {
    position: absolute; left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
}

 /* for Chrome */
.inner-container::-webkit-scrollbar {
    display: none;
}
</style>
```

**原理：**

滚动容器父级溢出隐藏，滚动容器绝对定位左对齐，滚动条超出父级元素，所以滚动条就隐藏了，只能通过鼠标滚轮滚动。



### 应用场景

- 内容较多的一个section，出现纵向滚动条影响内容布局。

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | 6+   | yes   |

### 参考：

1. https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/
2. https://www.cnblogs.com/alice626/p/6206760.html



## 推荐（好用又好看的滚动条插件）：

1、jQuery滚动条插件-jQuery custom content scroller

http://www.jq22.com/jquery-info124

2、简洁的jQuery滚动条插件scrollBar.js

http://www.jq22.com/jquery-info17348

3、nicescroll

https://github.com/inuyaksa/jquery.nicescroll

4、iScroll

https://github.com/cubiq/iscroll