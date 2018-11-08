# mouseenter&mouseleave

## 简介

> `mouseenter`当指针设备（通常是鼠标）移动到连接了侦听器的元素上时，会触发该事件。
>
> `mouseover `  当指针设备（通常是鼠标）移动到附加了侦听器的元素或其子项之一上时，会触发该事件。
>
> `mouseleave`当指针设备（通常是鼠标）移出连接有侦听器的元素时，会触发该事件。
>
> `mouseout`    当指针设备（通常是鼠标）移出已连接或关闭其子节点的元素时，会触发该事件。

**注意**：

- `mouseenter`虽然类似`mouseover`，但它的不同之处在于它不会冒泡，并且当指针从其后代的物理空间之一移动到其自己的物理空间时，它不会被发送到任何后代。
- `mouseleave` 和 `mouseout`是相似的，但不同的是`mouseleave`不冒泡和`mouseout`冒泡。 这意味着`mouseleave`当指针退出元素*及其*所有后代`mouseout`时触发，而当指针离开元素*或*离开元素的后代之一时触发（即使指针仍在元素内）。
- `mouseout`当您移动到子元素时，它也会在父元素上触发，因为您移出父元素的可见空间。



                                         ![mouseenter.png](https://developer.mozilla.org/@api/deki/files/5908/=mouseenter.png)

- `mouseenter`输入时，会向层次结构的每个元素发送 一个事件。当指针到达文本时，此处将4个事件发送到层次结构的四个元素。

![mouseover.png](https://developer.mozilla.org/@api/deki/files/5909/=mouseover.png)

- 一个单独的`mouseover`事件被发送到DOM树的最深层元素，然后它会在层次结构中冒泡，直到它被处理程序取消或到达根目录。

![mouseenter.png](https://developer.mozilla.org/@api/deki/files/5910/=mouseleave.png)

- `mouseleave`离开它们时，会向层次结构的每个元素发送一个事件。当指针从文本移动到此处表示的最外部div之外的区域时，此处将4个事件发送到层次结构的四个元素。

![mouseover.png](https://developer.mozilla.org/@api/deki/files/5911/=mouseout.png)

- 一个单独的`mouseout`事件被发送到DOM树的最深层元素，然后它会在层次结构中冒泡，直到它被处理程序取消或到达根目录。

**Note：**

`mouseenter`结合其对称事件的行为`mouseleave`，`mouseenter`DOM事件以与CSS `:hover`伪类非常相似的方式起作用。

## 语法

```javascript

element.onmouseenter = function(){...code...}

element.onmouseover = function(){...code...}

element.onmouseleave = function(){...code...}

element.onmouseout = function(){...code...}

document.addEventListener("mouseenter",function () {...code...})

document.addEventListener("mouseover",function () {...code...})

document.addEventListener("mouseleave",function () {...code...})

document.addEventListener("mouseout",function () {...code...})

```



## 示例

```html
<div id="parent" class="parent">
	<div id="child" class="child">child</div>
</div>
```

```javascript
(function (){
    var button = document.getElementById("parent"),
        popup = document.getElementById("child");
    button.onmouseenter = function (e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        display.innerHTML = "button mouseenter target:"+ target.id + "<br>";
    }

    button.onmouseleave = function (e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        display.innerHTML = "button mouseleave target:"+ target.id + "<br>";
    }

    popup.onmouseenter = function (e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        display.innerHTML = "button mouseenter target:"+ target.id + "<br>";
    }

    popup.onmouseleave = function (e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        display.innerHTML = "button mouseleave target:"+ target.id + "<br>";
    }
}())
```



## 应用场景

- 鼠标事件不需要冒泡则使用mouseenter和mouseleave
- 鼠标事件要冒泡则使用mouseover和mouseout

## 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

## 参考：

1. https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter
2. https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave

