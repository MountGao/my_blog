# oninput事件&onpropertychange事件&onchange事件

## oninput事件

### 简介

> `input`，`select`，`textarea`元素值更改时引发输入事件。 
>
> 这个事件支持冒泡。如果窗口支持，则`input`，`select`，`textarea`元素也受支持。



**注意**：通过JavaScript改变`input`，`select`，`textarea`元素的值，无法触发该事件

**PS**：属性值contenteditable为true的任意元素输入，删除，剪切，粘贴操作，触发该事件

### 语法

```
window.onbeforeunload = function (event) {};
element.onbeforeunload = function (event) {};
window.addEventListener("input", function (event) {});
element.addEventListener("input", function (event) {});
```



### 示例

```
window.onbeforeunload = function (event) {
  event = event || window.event;
  console.log(event.target.value);
};

window.addEventListener("input", function (event) {
  event = event || window.event;
  console.log(event.target.value);
});

element.onbeforeunload = function (event) {
  console.log(element.value);
};

element.addEventListener("input", function () {
  console.log(element.value);
});
```

### 应用场景

- 搜索提示，获取用户的实时输入，显示相应的提示信息
- 表单验证，获取用户的实时输入，进行实时的验证，显示对应的验证信息

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE     | Opera |
| -------- | ------ | ------- | ------ | ---- | ------ | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | 9.0[1] | yes   |

[1] IE9 中都有个小BUG，那就是删除和剪切操作(通过右键菜单菜单中的剪切和删除命令删除内容的时候不会触发，键盘快捷键剪切和删除也无法触发该事件)不会触发该事件，而 IE 其他版本都是正常的。 

### 参考：

https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput

## onpropertychange事件

### 简介

> 元素属性值发生变化时触发
>
> IE浏览器独有事件，IE11以及之前的版本支持，Edge不支持，其他浏览器不支持
>
> 该事件不支持冒泡



**注意**：

- 和oninput事件和onchange事件不同的是，通过JavaScript改变元素的值，可以触发该事件。
- 该事件不支持冒泡，只能通过input元素去监听。

### 语法

```
element.onpropertychange = function (event) {};
element.attachEvent("onpropertychange", function (event) {});
```



### 示例

```
element.onpropertychange = function (event) {
  console.log(element.value);
};

element.attachEvent('onpropertychange',function(){    
	console.log(element.value);     
});
```

### 应用场景

- 搜索提示，获取用户的实时输入，显示相应的提示信息
- 表单验证，获取用户的实时输入，进行实时的验证，显示对应的验证信息

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE     | Opera |
| -------- | ------ | ------- | ------ | ---- | ------ | ----- |
| 基本支持 | no     | no      | no     | no   | yes[1] | no    |

[1] IE9 中都有个小BUG，那就是删除和剪切操作(通过右键菜单菜单中的剪切和删除命令删除内容的时候不会触发，键盘快捷键剪切和删除也无法触发该事件)不会触发该事件，而 IE 其他版本都是正常的。

### 参考：

无

## onchange事件

### 简介

> `input`，`select`，`textarea`元素值更改时引发输入事件。  
>
> 这个事件支持冒泡。如果窗口支持，则`input`，`select`，`textarea`元素也受支持。



**注意**：该事件只有在`input`，`select`，`textarea`值改变并失去焦点的情况下触发



### 语法

```
window.onchange = function (event) {};
element.onchange = function (event) {};
window.addEventListener("change", function (event) {});
element.addEventListener("change", function (event) {});
```



### 示例

```
window.onchange = function (event) {
  event = event || window.event;
  console.log(event.target.value);
};

window.addEventListener("change", function (event) {
  event = event || window.event;
  console.log(event.target.value);
});

element.onchange = function (event) {
  console.log(element.value);
};

element.addEventListener("change", function () {
  console.log(element.value);
});
```

### 应用场景



### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE     | Opera |
| -------- | ------ | ------- | ------ | ---- | ------ | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes[1] | yes   |

[1] IE8以及IE8以下版本不支持onchange事件冒泡。

### 参考：

无



###oninput事件&onpropertychange事件&onchange事件三者区别

**onchange**：

- 它在绑定对象的value值发生改变并失去焦点时，才触发onchange事件
- 如果得用javascript改变绑定对象的value值时，并不能触发onchange事件
- IE9下删除和剪切操作可以触发onchange事件

**onpropertychange**：

- 它在绑定对象的属性值发生改变时，触发onpropertychange事件。这是IE专有的，不支持其他浏览器
- 如果得用javascript改变绑定对象的value值时，可以触发onpropertychange事件
- IE9下删除和剪切操作无法触发onpropertychange事件

**oninput**：

- 它在绑定对象的value值发生改变时，触发oninput事件
- 如果得用javascript改变绑定对象的value值时，并不能触发oninput事件
- IE9下删除和剪切操作无法触发oninput事件





​                        



