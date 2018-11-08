# focus /blur/focusin /focusout  事件

## 简介

> `focus`当 **focusable** 元素获得焦点时会触发该事件，不支持冒泡（不完全对）。 
>
> `focusin`当 **focusable** 元素即将获得焦点时会触发该事件，和`focus`一样，只是`focusin`支持冒泡。 
>
> `blur`当 **focusable** 元素失去焦点时会触发该事件，不支持冒泡（不完全对）。 
>
> `focusout`当 **focusable** 元素即将失去焦点时会触发该事件，和`blur`一样，只是`focusout`支持冒泡。 
>



**注意：在focusable元素的`focus`和`blur`两个事件会冒泡到父级元素，但是不会继续向上冒泡。**

## 语法

```
//通用
element.onfocus = function(){//some code}
element.onblur = function(){//some code}
element.onfocusin = function(){//some code}
element.onfocusout = function(){//some code}

//IE9+
element.addEventListener("focus",function(){//some code})
element.addEventListener("blur",function(){//some code})
element.addEventListener("focusin",function(){//some code})
element.addEventListener("focusout",function(){//some code})
```



## 示例

```
//html
<div id="box">
    <h1>focus、blur、focusin、focusout</h1>
    <div id="iptWrapper">
        <input type="text" id="ipt" placeholder="test"/>
    </div>
</div>
```

```
//javascript
var ipt         = document.getElementById("ipt"),
    iptWrapper  = document.getElementById("ipt"),
    box         = document.getElementById("box");
    ipt.onfocus = function () {
        console.log("onfocus");
    }

    ipt.onblur = function () {
        console.log("onblur");
    }

    ipt.onfocusin = function () {
        console.log("onfocusin");
    }

    ipt.onfocusout = function () {
        console.log("onfocusout");
    }

    ipt.addEventListener &&
    ipt.addEventListener("focusin",function () {
        console.log("addEventListener-focusin");
    })

    ipt.addEventListener &&
    ipt.addEventListener("focusout",function () {
        console.log("addEventListener-focusout");
    })
    
    iptWrapper.onfocus = function () {
        console.log("onfocus-iptWrapper");
    }

    iptWrapper.onblur = function () {
        console.log("onblur-iptWrapper");
    }

    iptWrapper.addEventListener &&
    iptWrapper.addEventListener("focusin",function () {
        console.log("addEventListener-focusin-iptWrapper");
    })

    iptWrapper.addEventListener &&
    iptWrapper.addEventListener("focusout",function () {
        console.log("addEventListener-focusout-iptWrapper");
    })
```

**测试结果分析：**

- 除微软家的IE和Edge支持DOM0级事件处理程序外，其他浏览器都只支持DOM2级事件处理程序 ，其他浏览器都只能用`addEventListener`进行绑定`focusin`、`focusout`事件。
- 事件触发顺序不一样：IE和Edge的触发顺序`focusin`->`focus`->`focusout`->`blur`，其他浏览器则是`focus`->`focusin`->`blur`->`focusout`
- document.body绑定`focus`和`blur`事件之后，window也绑定`focus`和`blur`事件，则document.body无法监听`focus`和`blur`事件，反之亦然。但是对`focusin`和`focusout`无影响。
- focusable元素绑定`focus`和`blur`事件之后，其父级元素也绑定`focus`和`blur`事件，则focusable元素无法监听`focus`和`blur`事件，反之亦然。但是对`focusin`和`focusout`无影响。

**PS**：其他浏览器指的是除微软家的IE和Edge外的主流浏览器。

## 应用场景

- 绝大多数用于输入框，文本域，对用户的输入进行验证，提示等
- 可以用来获取用户点击活跃的区域
- 统计在当前页面停留的时间（窗口非隐藏状态的时长）

## 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

**PS**：浏览器表现差异见上文

### focusable元素

默认情况下，只有部分html元素能获得鼠标焦点如`input`，很大一部分html元素是不能获得鼠标焦点的如`div`，这些能够获得鼠标焦点的元素就是**focusable** 元素。要想一个元素获得焦点，可以通过三种方式：

- 鼠标点击
- Tab 键
- 调用focus()方法
- 表单元素设置autofocus属性，自动获取焦点，浏览器支持IE10+。
- 页面加载

那么默认情况下，哪些元素是**focusable** 元素

- window：当页面窗口从隐藏变成前置可见时，focus 事件就会触发；当窗口隐藏时触发blur事件。
- 表单元素(form controllers)：input/option/textarea/button
- 链接元素(links)：a标签、area标签（必须要带 href 属性，包括 href 属性为空）
- 设置了 tabindex 属性（属性值为数字）的元素
- 设置了contenteditable = "true"属性的元素

**PS**：用户通常可以使用tab键移动焦点，使用空格键激活焦点。比如，如果焦点在一个链接上，此时按一下空格键，就会跳转到该链接 

### `tabindex`属性

默认情况下就能 focusable 的元素太少，如果想让一个 `div` 元素成为 focusable 的元素怎么做呢？很简单，设置 tabindex 属性即可！
tabindex 有2个作用：

- 使一个元素变成 focusable 只要在元素上设置了 tabindex 属性，不管此属性的值设为多少，此元素都将变成focusable元素。
- 定义多次按下 TAB 键时获得焦点的元素顺序tabindex 属性的值可以正数、0、负数，当多次按下TAB键，首先是tabindex为正数的元素获得焦点，顺序是：tabindex=1、tabindex=2、tabindex=3、tabindex=...，最后是tabindex=0的元素获得焦点。注意：tabindex为负数的元素不能通过 TAB 键获得焦点，只能通过鼠标点击或者调用focus()方法才能获得焦点。示例代码如下：

```
<ul>
    <li tabindex="1">1</li>
    <li tabindex="0">0</li>
    <li tabindex="2">2</li>
    <li tabindex="-1" id="minusOne">-1</li>
    <li tabindex="-2" id="minusTwo">-2</li>
</ul>
```

```
//使用Tab键时，li元素获得焦点的顺序是1、2、0
//tabindex为负数的元素可以调用focus()获取焦点
var minusOne = document.getElementById("minusOne");
minusOne.onclick = function(){
    minusOne.focus();
}
```

## document.activeElement

> 返回当前页面中获得焦点的元素,也就是说,如果此时用户按下了键盘上某个键,会在该元素上触发键盘事件.该属性是只读的.

- 很多情况下,该属性会返回一个`input`或者`textarea`元素,于此同时,如果用户在文本输入框中选中了一些文本,还可以使用该元素的`selectionStart`和`selectionEnd`属性获得准确的选中文本内容.
- 该属性的值还可能是一个`select`(下拉菜单)或者`type`属性为`button`,`checkbox`或`radio`的`input`元素.
-  在IE9中获取iframe中的activeElemet时会抛出异常，比如： parent.document.activeElement 会抛出异常。 
- 默认情况下，文档刚刚加载完成时，document.activeElement中保存的是body元素的引用。文档加载期间，document.activeElement的值为null
- 如果没有某个元素获得焦点,则该属性的值为当前页面中的`body`元素.  
- 浏览器支持良好

```
<head>
	<script>
        console.log(document.activeElement);//null
    </script>
</head>
<body>
    <script>
        console.log(document.activeElement);//<body>
    </script>
</body>
```

## document.hasFocus()

> `Document.hasFocus()` 方法返回一个布尔值，表明当前文档或者当前文档内的节点是否获得了焦点。该方法可以用来判断当前文档中的活动元素是否获得了焦点。 

- 返回值：如果当前文档的活动元素获得了焦点，返回` true`，否则返回`false`。
- 当查看一个文档时，当前文档中获得焦点的元素一定是当前文档的活动元素，但一个文档中的活动元素不一定获得了焦点。例如， 一个在后台的窗口中的活动元素一定没有获得焦点。 
- 浏览器支持良好

```
if (document.hasFocus()) {
	console.log("该页面获得了焦点.");
	//some
}
else {
	console.log("该页面没有获得焦点.");
}
```



## 参考：

https://www.cnblogs.com/RuMengkai/p/6230917.html

https://www.cnblogs.com/xiaohuochai/p/5874447.html

