# beforeunload事件

## 简介

> 当窗口，文档及其资源即将卸载时，将触发该事件。该文档仍然可见，此时事件仍可取消。

> 如果为`returnValue`Event属性分配了一个字符串，则会出现一个对话框，要求用户确认离开该页面（参见下面的示例）。IE浏览器在对话框中显示返回的字符串，但其他浏览器会显示自己的消息。如果未提供任何值，则以静默方式处理事件。 



**注意**：为了防止不需要的弹出窗口，浏览器可能不会显示在beforeunload事件处理程序中创建的提示，除非页面已与之交互，甚至根本不显示它们。 



**PS**：如果进入当前页面后没有用户没有与页面进行任何交互（比如鼠标在页面上点击），直接关掉或者刷新当前页面是没有弹窗提示。**一定要与页面进行交互之后，才能在页面卸载的时候触发beforeunload事件**。



## 语法

```
//通用
window.onbeforeunload = function (event) {};
//IE9+
window.addEventListener("beforeunload", function (event) {});
```

### beforeunload事件对象属性

| 属性              | 类型          | 描述                                 |
| ----------------- | ------------- | ------------------------------------ |
| `target` 只读     | `EventTarget` | 事件目标（DOM树中最顶层的目标）。    |
| `type` 只读       | `DOMString`   | 事件的类型。                         |
| `bubbles` 只读    | `Boolean`     | 事件通常会冒泡吗？                   |
| `cancelable` 只读 | `Boolean`     | 可以取消活动吗？                     |
| `returnValue`[1]  | `DOMString`   | 事件的当前返回值（显示用户的消息）。 |

**[1]为了防止网站欺骗用户，谷歌浏览器和火狐浏览器已经废弃设置`returnValue`，谷歌浏览器和火狐浏览器弹窗只显示各自系统通用字符串，忽略自定义字符串，IE依然可以显示自定义字符串，Edge(IE12+)依然可以显示自定义字符串。**

**PS**：不用再怀疑为什么设置了`returnValue`没有效果了。

**google声明：**

https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs

## 示例

```
window.onbeforeunload = function (event) {
  event = event || window.event;
  event.returnValue = "xxxxxxx";
};

window.addEventListener("beforeunload", function (event) {
  event = event || window.event;
  event.returnValue = "xxxxxxx";
});

window.addEventListener("beforeunload", function (event) {
  event = event || window.event;
  event.preventDefault();
});
```



## 事件触发场景

1. 关闭浏览器窗口 
2. 通过地址栏或收藏夹前往其他页面的时候 
3. 点击返回，前进，刷新，主页其中一个的时候 
4. 点击 一个前往其他页面的url连接的时候 
5. 使用document.write() 方法（输出内容）
6. 使用document.open() 打开一个新的空白文档
7. 使用document.close() 方法可关闭一个由open()方法打开的输出流，并显示选定的数据。
8. 当使用window.open() 打开一个页面，并把本页的window的名字传给要打开的页面的时候。
9. 使用window.close() 关闭页面的时候
10. 重新赋予window.location.href的值的时候。
11. 通过input type=”submit”按钮提交一个具有指定action的表单的时候。
12. 使用form.submit() 提交表单的时候

## 应用场景

onbeforeunload对话框用于现代Web上的两件事：

1. 防止用户无意中丢失数据。
2. 欺骗用户。

## 参考：

[https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload](https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload)

