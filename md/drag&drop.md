#

# 

# drag & drop

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

**PS:**拖动某元素时，以上三个事件在拖动目标上依次触发

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

**PS:**拖动一个元素放置另一个元素到时，以上四个事件在放置目标上依次触发

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

- XXX
- XXX
- XXX

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

- IE6-IE9均不支持`dataTransfer.files`或`.types`对象
- IE6-IE11以及Edge12-Edge17均不支持`.setDragImage`，Edge18开始支持
- IE6-IE11中`dataTransfer.setData`/的受支持格式有限`getData`。
- 移动端基本不支持
- Firefox支持任何类型的DOM元素`.setDragImage`。Chrome必须将一个`HTMLImageElement`或任何类型的DOM元素附加到DOM并在浏览器的视口中`.setDragImage`。
- `dataTransfer.items`仅受Chrome支持。 
-  目前没有浏览器支持该`dropzone`属性。 

### 参考：

1. https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent
2. https://caniuse.com/#search=drag

### 自定义放置目标

	在拖动元素经过某些无效放置目标时，可以看到一种特殊的光标（圆环中有一条反斜线），表示不能放置。虽然所有元素都支持放目标事件，但这些元素默认是不允许放置的。如果拖动元素经过不允许方放置的元素，无论用户如何操作，都不会发生drop事件。不过，你可以把任何元素变成有效的放置目标，方法是重写dragenter和dragover事件的默认行为。

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

	以上代码执行后，你就会发现拖动着元素移动到放置目标上，光标变成了允许放置的符号。当然，释放鼠标也会触发drop事件。

### dataTransfer对象

### 简介

> 当用户拖动元素或文本选择时，每隔几百毫秒就会触发拖动（drag）事件。



### 语法

```

```



### 示例

```

```

### 应用场景

- XXX
- XXX
- XXX

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | 9      | 38   | 5.0  | 10    |

### 参考：



## dropEffect与effectAllowed









