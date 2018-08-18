# getBoundingClientRect()

## 简介

>  `Element.getBoundingClientRect()` 方法返回元素的大小及其相对于视口的位置。 



## 语法

```
var domRect = element.getBoundingClientRect（）;
```

#### 返回值

- 返回的值是一个`DOMRect`对象，它是`getClientRects()`元素返回的矩形的并集，即与元素关联的CSS边框。其结果是，其包含整个元件，具有只读的最小矩形`left`，`top`，`right`，`bottom`，`x`，`y`，`width`，和`height`性质描述在像素整体边界框。除视口左上角`width`和`height`相对于视口左上角的属性。
- 空边框完全被忽略。如果所有元素的边框都为空，则返回一个带有 `width`和`height`都为0的矩形，其中`top`和`left`是该元素的第一个CSS框（按内容顺序）的border-box的左上角。
- 在计算边界矩形时，考虑了视口区域（或任何其他可滚动元素）已完成的滚动量。这意味着，矩形的边界边（`top`，`left`，`bottom`和`right`）改变它们的值，每次滚动位置的变化（因为它们的值是相对于视而不是绝对的）。如果需要相对于文档左上角的边界矩形，只需将当前滚动位置添加到`top`和`left`属性（这些可以使用`window.scrollX`和`window.scrollY`获取）以获得与当前滚动位置无关的边界矩形。



- 需要高跨浏览器兼容性的脚本可以使用`window.pageXOffset`和`window.pageYOffset`而不是`window.scrollX`和`window.scrollY`。无法访问这些属性的脚本可以使用如下代码：

```
// For scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft
  
// For scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.scrollTop == 'number' ? t : document.body).scrollTop
```

**注意**：所有的返回值都没有单位，纯数值

## 示例

```
// rect is a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
var rect = obj.getBoundingClientRect();
```

## 应用场景

- 获取指定节点元素的大小及其相对于视口的位置。

## 笔记

- `DOMRect`可以在现代浏览器中修改返回的对象。对于有效返回的旧版本，情况并非如此`DOMRectReadOnly`。使用IE和Edge，无法向返回的`ClientRect`  `MSDN: ClientRect` 对象添加缺少的属性可防止回填`x`和`y`。
- 由于兼容性问题（见下文），它是最安全的依靠唯一性`left`，`top`，`right`，和`bottom`。 
- 返回的DOMRect对象中的属性不是自己的属性。 当in运算符和for ... in将找到返回的属性时，其他API（如Object.keys（））将失败。 而且，出乎意料的是，ES2015和更新的功能（如Object.assign（）和对象rest / spread）将无法复制返回的属性。

```
rect = elt.getBoundingClientRect()
// The result in emptyObj is {} 
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{width, ...emptyObj} = rect
```

- DOMRect属性左上角右下角是根据其他属性值计算的。
- 由于IE8以下版本浏览器不支持box-sizing，所以`left`，`top`，`right`，和`bottom`四个值也不尽相同



## 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge  | IE       | Opera |
| -------- | ------ | ------- | ------ | ----- | -------- | ----- |
| 基本支持 | yes    | yes     | yes    | 12[3] | (见注释) | yes   |

[1] 返回的对象缺乏`width`和`height`属性。

[2] 返回的对象不能添加新属性; 它不可扩展。

[3] 返回的对象缺少`x`＆`y`值，但可以使用现有的`top`＆`left`值。

**注意IE**：

- IE6、IE7不支持[1,3]
- IE8不支持[1,2,3]
- IE9+不支持[3]



## 参考：

https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

