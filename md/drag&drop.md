#drag & drop

### 拖放事件DragEvent

### 简介

> DragEvent接口是一个DOM事件，表示拖放交互。 用户通过在触摸表面上放置指针设备（例如鼠标）然后将指针拖动到新位置（例如另一个DOM元素）来启动拖动。 应用程序可以以特定于应用程序的方式自由解释拖放交互。

### 事件类型

**dragstart**

> 当用户开始拖动元素或文本选择时，会触发`dragstart`事件。
>
> ***在拖动目标上触发***

**dragover**

> 当用户拖动元素或文本选择时，每隔几百毫秒就会触发`drag`事件。
>
> ***在拖动目标上触发***

**dragend**

> 当拖动操作结束时（通过释放鼠标按钮或按下`escape`键），将触发`dragend`事件。
>
> ***在拖动目标上触发***

**PS: ** 拖动某元素时，以上三个事件在拖动目标上依次触发

**dragenter**

> 当拖动的元素或文本选择进入有效的放置目标时，会触发`dragenter`事件。
>
> ***在放置目标上触发***

**dragover**

> 当元素或文本选择被拖动到有效的放置目标（每几百毫秒）时，将触发`dragover`事件。
>
> ***在放置目标上触发***

**dragleave**

> 当拖动的元素或文本选择留下有效的放置目标时，将触发`dragleave`事件。该事件在放置目标上触发。
>
> ***在放置目标上触发***

**drop**

> 在有效放置目标上放置元素或文本选择时会触发`drop`事件。
>
> ***在放置目标上触发***

**PS: ** 拖动一个元素放置另一个元素到时，以上四个事件在放置目标上依次触发

### 语法

```
//DOM0级
element.ondragstart = function(){}
element.ondrag = function(){}
element.ondragend = function(){}
element.ondragenter = function(){}
element.ondragover = function(){}
element.ondragleave = function(){}
element.ondrop = function(){}
//DOM2级
element.addEventListener("dragstart",function(){})
element.addEventListener("drag",function(){})
element.addEventListener("dragend",function(){})
element.addEventListener("dragenter",function(){})
element.addEventListener("dragover",function(){})
element.addEventListener("dragleave",function(){})
element.addEventListener("drop",function(){})
```



### 示例

**1.拖拽上传**

```
//css
<style>
    #container{
        width: 300px;
        height: 200px;
        border: 1px solid red;
        margin: 100px auto;
    }
 </style>
 
 //html
    <div id="box">
        <div id="container"></div>
    </div>

//javascript
<script>
	var container  = document.querySelector("#container");

    container.addEventListener("dragenter",function (evt) {
        containerEvents("dragenter",evt);
    })

    container.addEventListener("dragover",function (evt) {
        containerEvents("dragover",evt);
    })

    container.addEventListener("drop",function (evt) {
        containerEvents("drop",evt);

    })

    function containerEvents(type,evt) {
        switch (type){
            case "dragenter":
                evt.preventDefault();//!important
                console.log("dragenter");
                break;
            case "dragover":
                evt.preventDefault();//!important
                console.log("dragover");
                break;
            case "drop":
                evt.preventDefault();//!important
                console.log("drop");
                var file = evt.dataTransfer.files[0];
                file && handleDropImg(file);
                file && uploadImg(file);
                break;
            default:
                throw new Error("containerEvent type error!!!");
        }
    }
    
    function handleDropImg(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load",function () {
            var newImg = '<img src="'+ reader.result  +'">';
            document.body.insertAdjacentHTML("afterend",newImg);
        })
    }
    
    function uploadImg(file) {
        var data = new FormData();
        data.append("img",file);
        //post提交data,即可上传图片 
    }
    
    
</script>
```

**2.来回拖放图片**

```
//css
<style>
        .flex-box{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container{
            border: 1px solid red;
            width: 200px;
            height: 200px;
            margin: 10px;
        }
 </style>
 
 //html
 <div id="box" class="flex-box">
    <div class="flex-box container">
        <img src="static/img/dealgo.png" alt="" id="img">
    </div>
    <div class="flex-box container"></div>
</div>

//javascript
<script>
    var img = document.querySelector("#img"),
        box  = document.querySelector("#box");

    img.addEventListener("dragstart",function (evt) {
        handleImg("dragstart",evt);
    })

    img.addEventListener("drag",function (evt) {
        handleImg("drag",evt);
    })

    img.addEventListener("dragend",function (evt) {
        handleImg("dragend",evt);
    })

    box.addEventListener("dragenter",function (evt) {
        var target = evt.target;
        target.classList.contains("container") && handleContainer("dragenter",evt);

    })

    box.addEventListener("dragover",function (evt) {
        var target = evt.target;
        target.classList.contains("container") && handleContainer("dragover",evt);

    })

    box.addEventListener("drop",function (evt) {
        var target = evt.target;
        target.classList.contains("container") && handleContainer("drop",evt);

    })



    function handleImg(type,evt) {
        switch (type){
            case "dragstart":
                console.log("dragstart");
                evt.dataTransfer.setData("Text",evt.target.id);
                break;
            case "drag":
                console.log("drag");
                break;
            case "dragend":
                console.log("dragend");
                break;
            default:
                throw new Error("handleImg type error!!!");
        }
    }
    
    function handleContainer(type,evt) {
        switch (type){
            case "dragenter":
                evt.preventDefault();//!important
                console.log("dragenter");
                break;
            case "dragover":
                evt.preventDefault();//!important
                console.log("dragover");
                break;
            case "drop":
                evt.preventDefault();//!important
                console.log("drop");
                var id = evt.dataTransfer.getData("Text");
                evt.target.appendChild(document.getElementById(id));
                break;
            default:
                throw new Error("handleContainer type error!!!");
        }
    }
</script>
 
```



### 应用场景

- 拖拽上传文件
- 拖动调整栏目位置
- 来回拖动显示

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

- IE6-IE9均不支持`dataTransfer.files`或`.types`对象
- IE6-IE11以及Edge12-Edge17均不支持`.setDragImage`，Edge18开始支持
- IE6-IE11中`dataTransfer.setData`的受支持格式有限`getData`。
- 移动端基本不支持
- Firefox支持任何类型的DOM元素`.setDragImage`。Chrome必须将一个`HTMLImageElement`或任何类型的DOM元素附加到DOM并在浏览器的视口中`.setDragImage`。
- `dataTransfer.items`仅受Chrome支持。 
-  目前没有浏览器支持该`dropzone`属性。 

### 参考：

1. https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent
2. https://caniuse.com/#search=drag

### 自定义放置目标

在拖动元素经过某些无效放置目标时，可以看到一种特殊的光标（圆环中有一条反斜线），表示不能放置。虽然所有元素都支持放目标事件，但这些元素默认是不允许放置的。如果拖动元素经过不允许方放置的元素，无论用户如何操作，都不会发生`drop`事件。不过，你可以把任何元素变成有效的放置目标，方法是重写`dragenter`和`dragover`事件的默认行为。

```
var target = document.querySelector("#targe");
target.addEventListener("dragenter",function (evt) {
	evt.preventDefault();
	//do something
})

target.addEventListener("dragover",function (evt) {
	evt.preventDefault();
	//do something
})
```

以上代码执行后，你就会发现拖动着元素移动到放置目标上，光标变成了允许放置的符号。当然，释放鼠标也会触发`drop`事件。

### dataTransfer对象

拖拽事件周期中会初始化一个`DataTransfer`对象,用于保存拖拽数据和交互信息.以下是它的属性和方法.

- `dropEffect`: 拖拽交互类型,通常决定浏览器如何显示鼠标光标并控制拖放操作.常见的取值有`copy`,`move`,`link`和`none`。

- `effectAllowed`: 指定允许的交互类型,可以取值:`copy`,`move`,`link`,`copyLink`,`copyMove`,`limkMove`, `all`, `none`默认为`uninitialized`(允许所有操作)。

- `files`: 包含`File`对象的`FileList`对象.从操作系统向浏览器拖放文件时有用。

- `types`: 保存`DataTransfer`对象中设置的所有数据类型。

  这是一个类似数组的集合，以"text"这样的字符串形式保存着数据类型。实现这个属性的浏览器有IE10+以及其他主流浏览器。

- `setData(format, data)`: 以键值对设置数据,format通常为数据格式,如`text`,`text/html`,`url`。

- `getData(format)`: 获取设置的对应格式数据,format与setData()中一致。

- `clearData(format)`: 清除指定格式的数据。

- `setDragImage(imgElement, x, y)`: 设置自定义图标。

  指定一幅图像，当拖动发生时，显示在光标下方。这个方法接收三个参数分别是要显示的HTML元素和光标在图像中的X,Y坐标。HTML元素可以是一幅图像，也可以是其他元素。是图像则显示图像，是其他元素则显示渲染后的元素。

- `addElement(element)`：为拖动操作添加一个元素。添加这个元素只影响数据（即增加作为拖动源而响应回调的对象），不会影响拖动操作是页面元素的外观。

```
var dataTransfer = event.dataTransfer;
//设置文本
dataTransfer.setData("Text","this is a Text");
//读取文本
var text = dataTransfer.getData("Text");
//设置链接
dataTransfer.setData("url","this is a Text");
//读取链接
var url = dataTransfer.getData("url") || dataTransfer.getData("text/uri-list");

```

**注意：一定要把短数据类型放在前面，因为IE10及其之前的版本仍然不支持拓展的MIME类型名，而它们在遇到无法识别的数据类型时，会抛出错误。**

### 参考：

1. https://segmentfault.com/a/1190000002810962
2. Javascript高级程序设计(第三版) 16.2.6


## dropEffect与effectAllowed

利用`dataTransfer`对象，可不光能够传输数据，还能通过它来确定被拖动的元素以及作为放置目标的元素能够接收什么操作。为此需要范文`dataTransfer`对象的两个属性：`dropEffect`和`effectAllowed`。

### dropEffect

通过dropEffect属性可以知道被拖动的元素能够执行那种放置行为。该属性有以下四个值：

- `none`：不能把拖动元素放在这里。这是除文本框之外所有元素的默认值；
- `move`：应该把拖动的元素移动到放置目标；
- `copy`：应该把拖动的元素复制到放置目标；
- `link`：表示放置目标会打开拖动的元素（但拖动的元素必须是一个链接，有URL）。

	在元素拖动到 放置目标上时，以上每一个值都会导致光标显示为不同的符号。然而，要怎样实现实现光标所指示的动作完全取决于开发者。换句话说，如果你不介入，没什么会自动德移动、复制，也不会打开链接。总之，浏览器只能帮你改变光标的样式，而其他的都要靠你自己来实现。要使用dropEffect属性，必须在ondragenter事件处理程序中针对放置目标来设置它。

### effectAllowed

dropEffect属性只有搭配effectAllowed属性才有用。effectAllowed表示允许拖动元素的哪种dropEffect，effectAllowed属性的可能值如下：

- `uninitialized`：没有给拖动的元素设置任何放置行为；
- `none`：被拖动的元素不能有任何行为；
- `copy`：只允许值为`copy`的dropEffect；
- `link`：只允许值为`link`的dropEffect；
- `move`：只允许值为`move`的dropEffect；
- `copyLink`：只允许值为`copy`和`link`的dropEffect；
- `copyMove`：只允许值为`copy`和`move`的dropEffect；
- `linkMove`：只允许值为`copy`和`link`的dropEffect；
- `all`：允许任意dropEffect。

	必须在ondragstart事件处理程序中设置`effectAllowed`属性。

	假设你想允许用户把文本框中中的文本拖放到一个`div`元素中。首先，必须将`dropEffect`和`effectAllowed`设置为`move`。但是，由于`div`元素的放置事件的默认行为是什么也不做，所以文本不可能自动移动。重写这个默认行为，就能从文本框中移走文本。然后你就可以编写代码将文本插入到`div`中，这样整个拖放操作就完成了。如果你将`dropEffect`和`effectAllowed`的值设置为`copy`，那就不会自动移走文本框中的文本。

### 参考：

1. Javascript高级程序设计(第三版) 16.2.4

## draggable

默认情况下，图像、链接和文本是可以拖动的，也就是说，不用额外编写代码，用户就可以拖动它们。文本只有在被选中的情况下才能拖动，而图像和链接在任何时候都可以拖动。

让其他元素可以拖动也是可能的。HTML5为所有HTML元素规定了一个`draggable`属性，表示元素是否可以拖动。图像和链接的`draggable`属性自动被设置为true，而其他元素这个属性的默认值都是`false`。要想让其他元素可拖动，或者让图像和链接不可拖动，都可以设置这个属性。

```html
//让这个图片无法拖动
<img src="logo.png" draggable="false">
//让这个div元素可以拖动
<div draggable="true">...<div>
```

支持`draggable`属性的浏览器有IE10+以及其他主流浏览器。另外，为了让Firefox支持可拖动属性，还必须添加一个`ondragstart`事件处理程序，并在`dataTransfer`对象中保存一些信息。

在IE9以及更早的版本中，通过`mousedown`事件处理程序调用`dragDrop（）`能够让任何元素可拖动。

### 参考：

1. Javascript高级程序设计(第三版) 16.2.5




