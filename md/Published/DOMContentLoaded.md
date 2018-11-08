# **DOMContentLoaded** 

## 简介

> 当初始的 **HTML** 文档被完全加载和解析完成之后，**DOMContentLoaded** 事件被触发，而无需等待样式表、图像和子框架的完成加载。另一个不同的事件 `load `应该仅用于检测一个完全加载的页面。 在使用 `DOMContentLoaded` 更加合适的情况下使用 `load` 是一个令人难以置信的流行的错误，所以要谨慎。
>

**注意**：**DOMContentLoaded** 事件必须等待其所属script之前的样式表加载解析完成才会触发。 

**Note:** 同步 JavaScript 会暂停 DOM 的解析。

## 语法

```javascript
document.addEventListener("DOMContentLoaded", function(event) {});
```

## 示例

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");
});
```

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");
});

for(var i=0; i<1000000000; i++){
    // i太大容易导致网页奔溃
	// 这个同步脚本将延迟DOM的解析。
	// 所以DOMContentLoaded事件稍后将启动。
} 
```

```php+HTML
//模拟的css文件：CSS.php
<?php sleep(3);
```

```javascript
//测试代码
<link rel="stylesheet" href="css.php">
<script>
document.addEventListener('DOMContentLoaded',function(){
    console.log('3 seconds passed');
});
</script>
```



## 应用场景

- jQuery 中经常使用的 $(document).ready(function() { // ...code... }); 
- 在文档解析完成之后立即执行的任务
- 如果您希望 DOM 在用户请求页面后尽可能快地解析，你可以做的一些事情是把你的 [JavaScript 异步化](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) 以及 [优化样式表的加载](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery), 由于被并行加载而减慢页面加载，从主 html 文档“窃取”流量。

## 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | 9    | yes   |

**兼容性解决方案：**

-  IE8支持`readystatechange`事件，可用于检测DOM何时就绪。在早期版本的Internet Explorer中，可以通过反复尝试执行来检测此状态`document.documentElement.doScroll("left");`，因为此代码段将抛出错误，直到DOM准备就绪。 
- 诸如jQuery这样的通用JS库，会提供跨浏览器的方法来检测DOM是否加载完成。也有其他专门实现该功能的脚本:[contentloaded.js](https://github.com/dperini/ContentLoaded/blob/master/src/contentloaded.js) (只能添一个时间监听函数)以及[jquery.documentReady.js](https://github.com/addyosmani/jquery.parts/blob/master/jquery.documentReady.js) (并不依赖jQuery,虽然名字中有jquery).

## 参考：

1. https://www.cnblogs.com/caizhenbo/p/6679478.html

2. https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded



## Load

###简介

> 当一个资源及其依赖资源已完成加载时，将触发load事件。

### 语法示例

```
//通用
window.onload = function(){
	console.log("All resources finished loading!");
}

//IE9+
window.addEventListener("load",function(event) {
    console.log("All resources finished loading!");
});
```

```javascript
<script>
  var script = document.createElement("script");
  script.addEventListener("load", function(event) {
    console.log("Script finished loading and executing");
  });
  script.src = "http://example.com/example.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);
</script>
```



### 兼容性

所有浏览器都支持

### 参考：

https://developer.mozilla.org/en-US/docs/Web/Events/load



## readyState

###简介

> 一个`document`的 **Document.readyState** 属性描述了文档的加载状态。

###返回值

一个文档的 **readyState** 可以是以下之一：

- loading / 加载

  `document`仍在加载。

- interactive / 互动

  文档已经完成加载，文档已被解析，但是诸如图像，样式表和框架之类的子资源仍在加载。

- complete / 完成

  文档和所有子资源已完成加载。状态表示 `load` 事件即将被触发。

当这个属性的值变化时，`document`对象上的`readystatechange` 事件将被触发。

### 语法示例

```javascript
switch (document.readyState) {
  case "loading":
    // document还在加载
    break;
  case "interactive":
    // document已经加载完毕
    // 可以操作DOM节点了
    var box = document.getElementById("box");
        console.log("box",box);
    break;
  case "complete":
    // 页面加载完毕
    let CSS_rule = document.styleSheets[0].cssRules[0].cssText;
    console.log(`The first CSS rule is: ${CSS_rule }`);
    break;
}
```

### 兼容性

所有浏览器都支持

### 参考：

https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState



## readystatechange

###简介

> 当文档的`readyState`属性发生改变，`readystatechange`事件会被触发。

###语法示例

```javascript
//通用
document.onreadystatechange = function () {...code...}

//IE9+
document.addEventListener("readystatechange",function(event) {...code...});
```

```javascript
// 模拟 DOMContentLoaded/ jquery ready
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
}

// 模拟 load/onload 事件
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "interactive") {
    initLoader();
  }
  else if (event.target.readyState === "complete") {
    initApp();
  }
});
```

### 兼容性

所有浏览器都支持

### 参考：

https://developer.mozilla.org/zh-CN/docs/Web/Events/readystatechange



```javascript
//jQuery ready的实现
function ready(fn){

    if(document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function() {
            document.removeEventListener('DOMContentLoaded',arguments.callee, false);
            fn();
        }, false);
    } 

    // 如果IE
    else if(document.attachEvent) {
        // 确保当页面是在iframe中加载时，事件依旧会被安全触发
        document.attachEvent('onreadystatechange', function() {
            if(document.readyState == 'complete') {
                document.detachEvent('onreadystatechange', arguments.callee);
                fn();
            }
        });

        // 如果是IE且页面不在iframe中时，轮询调用doScroll 方法检测DOM是否加载完毕
        if(document.documentElement.doScroll && typeof window.frameElement === "undefined") {
            try{
                document.documentElement.doScroll('left');
            }
            catch(error){
                return setTimeout(arguments.callee, 20);
            };
            fn();
        }
    }
};
```

