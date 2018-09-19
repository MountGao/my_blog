# HTMLElement.offset

##HTMLElement.offsetParent

### 简介

> **HTMLElement.offsetParent** 是一个**<u>只读</u>**属性，返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。如果没有定位的元素，则 `offsetParent` 为最近的 `table`, `table cell` 或根元素（标准模式下为 `html`；quirks 模式下为 `body`）。当元素的 `style.display` 设置为 "none" 时，`offsetParent` 返回 `null`。`offsetParent` 很有用，因为 `offsetTop` 和 `offsetLeft` 都是相对于其内边距边界的。

### 语法

```
var parentObj = element.offsetParent;
```

**Note: ** parentObj 是一个对象引用，当前元素相对于该对象偏移（offset）。



### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

- 在 Webkit 中，如果元素为隐藏的（该元素或其祖先元素的 `style.display` 为 "none"），或者该元素的 `style.position` 被设为 "fixed"，则该属性返回 `null`。
- 在 IE 9 中，如果该元素的 `style.position` 被设置为 "fixed"，则该属性返回 `null`。（`display:none` 无影响。）

### 参考：

1. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent

##HTMLElement.offsetLeft&HTMLElement.offsetTop

### 简介

>  **HTMLElement.offsetLeft** 是一个**<u>只读</u>**属性，返回当前元素*左上角*相对于  `HTMLElement.offsetParent` 节点的左边界偏移的像素值。

> **HTMLElement.offsetTop** 为<u>**只读**</u>属性，它返回当前元素相对于其 `offsetParent`元素的顶部的距离。



- 对**块级元素**来说，`offsetTop`、`offsetLeft`、`offsetWidth` 及 `offsetHeight` 描述了元素相对于 `offsetParent` 的边界框。
- 然而，对于可被截断到下一行的**行内元素**（如 **span**），`offsetTop` 和 `offsetLeft` 描述的是*第一个*边界框的位置（使用 `Element.getClientRects()`来获取其宽度和高度），而 `offsetWidth` 和 `offsetHeight` 描述的是边界框的尺寸（使用 `Element.getBoundingClientRect`来获取其位置）。因此，使用 `offsetLeft`、`offsetTop`、`offsetWidth`、`offsetHeight` 来对应 left、top、width 和 height 的一个盒子将不会是文本容器 span 的盒子边界。

### 语法

```javascript
var top = element.offsetTop; //返回一个整数，表示向左偏移的像素值。
var left = element.offsetLeft;//返回一个整数，表示向上偏移的像素值。
```

### 示例

![Image:offsetLeft.jpg](https://developer.mozilla.org/@api/deki/files/790/=OffsetLeft.jpg)

```javascript
//这个例子展示了蓝色边框的 div 包含一个长的句子，红色的盒子是一个可以表示包含这个长句子的span标签的边界。
<div style="width: 300px; border:blue solid 1px;">
  <span>Short span. </span>
  <span id="long">Long span that wraps withing this div.</span>
</div>

<div id="box" style="position: absolute; border:red solid 1px;z-index: 10">
</div>

<script>
  var box = document.getElementById("box");
  var long = document.getElementById("long"); 
  // 
  // long.offsetLeft这个值就是span的offsetLeft.
  // span是个行内元素，它没有absolute定位，但还是默认offsetParent就是父元素，而不是根
  //

  box.style.left = long.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = long.offsetTop + document.body.scrollTop + "px";
  box.style.width = long.offsetWidth + "px";
  box.style.height = long.offsetHeight + "px";
</script> 
```

### 应用场景

- XXX

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

### 参考：

1. https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetTop
2. https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft

## HTMLElement.offsetWidth&HTMLElement.offsetHeight

### 简介

>**HTMLElement.offsetWidth** 是一个<u>**只读**</u>属性，返回一个元素的布局宽度。一个典型的（注：各浏览器的offsetWidth可能有所不同）offsetWidth是测量包含元素的边框(border)、水平线上的内边距(padding)、竖直方向滚动条(scrollbar)（如果存在的话）、以及CSS设置的宽度(width)的值。

> **HTMLElement.offsetHeight** 是一个<u>**只读**</u>属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。

- 通常，元素的offsetHeight是一种元素CSS高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before或:after等伪类元素的高度。
- 对于文档的body对象，它包括代替元素的CSS高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。 
- `box-sizing:border-box`时，`offsetWidth`、`offsetHeight`包括border和padding

### 语法

```javascript
var offsetWidth =element.offsetWidth;
var offsetHeight =element.offsetHeight;
```

**PS:** offsetWidth/offsetHeight属性将会 round(四舍五入)为一个整数。如果你想要一个fractional(小数)值,请使用`element.getBoundingClientRect()`.

### 示例

![Image:Dimensions-offset.png](https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png)

**PS:** `offsetWidth` 是一个DHTML对象模型中的属性，由微软IE浏览器首次引入。有时候它也可以称为一个元素的物理或图形尺寸，或者<border-box>（即CSS3中的border-box模型）的宽度。

### 应用场景

- XXX

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

### 参考：

1. https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetWidth
2. https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight

## Element.clientWidth&Element.clientHeight

### 简介

> **Element.clientWidth **是只读属性，对于没有定义CSS或者内联布局盒子的元素为0；否则，它是元素的内部的宽度（以像素为单位）。它包括内边距，但不包括垂直滚动条（如果存在，如果呈现），边框和外边距。

> **Element.clientHeight** 是只读属性，对于没有定义CSS或者内联布局盒子的元素为0；否则，它是元素内部的高度（以像素为单位）。它包含内边距，但不包括水平滚动条、边框和外边距。

- `clientWidth` 可以通过 CSS `width` + CSS `padding` - 垂直滚动条高度 (如果存在)来计算.
- `clientHeight` 可以通过 CSS `height` + CSS `padding` - 水平滚动条高度 (如果存在)来计算.
- `box-sizing:border-box`时，`clientWidth`、`clientHeight`不包括border和padding



### 语法

```
var intElemClientWidth = element.clientWidth;
var intElemClientHeight = element.clientHeight;
```

**注意：**clientWidth/clientHeight属性将值舍入为整数。如果您需要小数值，请使用`element.getBoundingClientRect()`。

### 示例

![å¾çï¼å°ºå¯¸ -  client.png](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png)



### 应用场景

- XXX

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

- `clientWidth`、`clientHeight` 最初是在MS IE DHTML对象模型中引入的。

### 参考：

1. https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
2. https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth

## HTMLElement.scrollWidth& HTMLElement.scrollHeight

### 简介

>**Element.scrollWidth**是一个只读属性，是元素内容宽度的度量，包括由于溢出而在屏幕上不可见的内容。

> **Element.scrollHeight**是一个只读属性，是元素内容高度的度量，包括由于溢出而在屏幕上不可见的内容。

- scrollWidth值等于元素在不使用水平滚动条的情况下适合视口中的所有内容所需的最小宽度。 宽度的测量方法与clientWidth相同：它包括元素的填充，但不包括边框，边距或垂直滚动条（如果存在）。 它还可以包括伪元素的宽度，例如:: before或:: after。 如果元素的内容可以适合而不需要水平滚动条，则其scrollWidth等于clientWidth
- scrollHeight值等于元素在不使用垂直滚动条的情况下适合视口中的所有内容所需的最小高度。 高度的测量方法与clientHeight相同：它包括元素的填充，但不包括边框，边距或水平滚动条（如果存在）。 它还可以包括伪元素的高度，例如:: before或:: after。 如果元素的内容可以适合而不需要垂直滚动条，则其scrollHeight等于clientHeight
- `box-sizing:border-box`时，`scrollWidth`、`scrollHeight`不包括border和padding

### 语法

```
var xScrollWidth = element.scrollWidth;
var intElemScrollHeight = element.scrollHeight;
```

**注意**：`scrollWidth`、`scrollHeight `属性会进行四舍五入并返回整数，如果你需要小数形式的值，使用`element.getBoundingClientRect()`.

### 示例

![Image:scrollHeight.png](https://developer.mozilla.org/@api/deki/files/840/=ScrollHeight.png)

```javascript
//如果元素位于其滚动的末尾，则以下等效性返回true，否则返回false。
element.scrollHeight - element.scrollTop === element.clientHeight

```

```javascript
//当容器不滚动但有溢出的子容器时，这些检查确定容器是否可以滚动：
window.getComputedStyle(element).overflowY === 'visible'
window.getComputedStyle(element).overflowY !== 'hidden'
```



### 应用场景

- 监听onscroll事件，以上等式可以用来判定用户是否阅读过文本。
- 监听onscroll事件，可以进行滚动加载。

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

### 参考：

1. https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
2. https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight

