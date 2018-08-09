# oninput事件&onpropertychange事件&onchange事件

## oninput事件

### 简介

> `input`元素值更改时引发输入事件。 
>
> 这个事件支持冒泡。如果窗口支持，则`input`元素也受支持。



**注意**：通过JavaScript改变`input`元素的值，无法触发该事件



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

| 特征     | Chrome | Firefox | Safari | Edge | Internet Explorer | Opera |
| -------- | ------ | ------- | ------ | ---- | ----------------- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | 9.0[1]            | yes   |

[1] IE9 中都有个小BUG，那就是删除和剪切操作(通过右键菜单菜单中的剪切和删除命令删除内容的时候不会触发，键盘快捷键剪切和删除也无法触发该事件)不会触发该事件，而 IE 其他版本都是正常的。 

### 参考：

https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput

## onpropertychange事件

### 简介

> 元素属性值发生变化时触发
>
> IE浏览器独有事件，IE11以及之前的版本支持，Edge不支持，其他浏览器不支持



**PS**：和oninput事件和onchange事件不同的是，通过JavaScript改变`input`元素的值，可以触发该事件。

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

| 特征     | Chrome | Firefox | Safari | Edge | Internet Explorer | Opera |
| -------- | ------ | ------- | ------ | ---- | ----------------- | ----- |
| 基本支持 | no     | no      | no     | no   | yes[1]            | no    |

[1] IE9 中都有个小BUG，那就是删除和剪切操作(通过右键菜单菜单中的剪切和删除命令删除内容的时候不会触发，键盘快捷键剪切和删除也无法触发该事件)不会触发该事件，而 IE 其他版本都是正常的。

### 参考：



## onchange事件

### 简介

> 



### 语法

```

```



### 示例

```

```

### 应用场景



### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | Internet Explorer | Opera |
| -------- | ------ | ------- | ------ | ---- | ----------------- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | 9.0               | yes   |

### 参考：





onchange：1.它在触发对象失去焦点时，才触发onchange事件

​                      2.如果得用javascript改变触发对象的属性时，并不能触发onchange事件

onpropertychange：property(属性)change(改变)的时候，触发事件。这是IE专有的

​                                    只要当前对象属性发生改变，都会触发事件

oninput：onpropertychange的非IE浏览器版本，支持firefox和opera等浏览器，支持IE11,

​                 但有一点不同，它绑定于对象时，并非该对象所有属性改变都能触发事件，

​                 它只在对象value值发生改变时奏效。

oninput 事件：不但JS 改变 value 值时不能触发，有从浏览器的自动下拉提示中选值时，也不会触发。

​                          将oninput写在JS代码中分离出来时与普通事件注册的方法有些不同，必须使用addEventListener来注册。

​                         document.getElementById("wb_comment_content").addEventListener("input",set_alert_wb_comment(),false);





