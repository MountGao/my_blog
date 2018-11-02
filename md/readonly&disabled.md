# readonly & disabled

## readonly

### 简介

>readonly 属性规定输入字段为只读。

- 只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本。

- readonly 属性可以防止用户对值进行修改，直到满足某些条件为止（比如选中了一个复选框）。然后，需要使用 JavaScript 消除 readonly 值，将输入字段切换到可编辑状态。


### 语法

```html
<input type="text" readonly>

<textarea readonly></textarea>	

```



### 示例

```javascript
var ipt = document.querySelector("#ipt");
ipt.readonly = true;//设置为只读状态
ipt.readonly = false;//取消只读的设置
```

### 应用场景

- 展示用户信息
- 表单填写时，设置无法填写的内容

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

### 参考：

1. http://www.w3school.com.cn/tags/att_input_readonly.asp

## disabled

### 简介

>disabled 属性规定应该禁用元素。

- 被禁用的元素既不可用，也不可点击。可以设置 disabled 属性，直到满足某些其他的条件为止（比如选择了一个复选框等等）。然后，就需要通过 JavaScript 来删除 disabled 值，将 input 元素的值切换为可用。
- 注释：disabled 属性无法与 <input type="hidden"> 一起使用。

### 语法

```html
<input type="text" disabled>

<textarea disabled></textarea>

<button disabled>button</button>
```



### 示例

```javascript
var ipt = document.querySelector("#ipt");
ipt.disabled = true;//设置为不可用状态
ipt.disabled = false;//取消不可用设置
```

### 应用场景

- 设置表单不可提交
- 设置按钮不可点击

### 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | yes    | yes     | yes    | yes  | yes  | yes   |

### 参考：

1. http://www.w3school.com.cn/tags/att_input_disabled.asp

## readonly & disabled区别

### ReadOnly和Disabled的作用是使用户不能够更改表单域中的内容. 但是二者还是有着一些区别的： 

1. Readonly只针对input(text/password)和textarea有效，而disabled对于所有的表单元素有效，包括select,radio,checkbox,button等。 
2. 在表单元素使用了disabled后，我们将表单以POST或者GET的方式提交的话，这个元素的值不会被传递出去，而readonly会将该值传递出去（readonly接受值更改可以回传，disable接受改但不回传数据）**详见3/4**
3. 如果一个输入项的disabled设为true，则该表单输入项不能获取焦点，用户的所有操作（鼠标点击和键盘输入等）对该输入项都无效，最重要的一点是当提交表单时，这个表单输入项将不会被提交。
4. 而readonly只是针对文本输入框这类可以输入文本的输入项，如果设为true，用户只是不能编辑对应的文本，但是仍然可以聚焦焦点，并且在提交表单的时候，该输入项会作为form的一项提交。

### 一般比较常用的情况是：

1. 在某个表单中为用户预填了某个唯一识别代码，不允许用户改动，但是在提交时需要传递该值，此时应该将它的属性设置为readonly 。
2. 经常遇到当用户正式提交了表单后需要等待管理员的信息验证，这就不允许用户再更改表单中的数据，而是只能够查看，由于disabled的作用元素范围大，所以此时应该使用disabled，但同时应该注意的是要将submit button也disabled掉，否则只要用户按了这个按钮，如果在数据库操作页面中没有做完整性检测的话，数据库中的值就会被清除。如果说在这种情况下用readonly来代替disabled的话，若表单中只有input(text / password)和textarea元素，那还是可以的，如果存在其他发元素，比如select，用户可以在重新改写值后按回车键进行提交(回车是默认的submit触发按键)
3. 我们常常在用户按了提交按钮后，利用javascript将提交按钮disabled掉，这样可以防止网络条件比较差的环境下，用户反复点提交按钮导致数据冗余地存入数据库。

### 参考：

1. https://www.cnblogs.com/zcy_soft/archive/2011/09/19/2181211.html

