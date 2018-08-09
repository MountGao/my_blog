# scrollIntoView()

## 简介

> 方法将调用它的元素滚动到浏览器窗口的可见区域。 

**PS**：根据其他元素的布局，元素可能无法完全滚动到顶部或底部。 

**TIPS**：页面（容器）可滚动时才有用！ 

## 语法

```
element.scrollIntoView（）; // 等同于element.scrollIntoView(true)
element.scrollIntoView（alignToTop）; //布尔参数
element.scrollIntoView（scrollIntoViewOptions）; //对象参数
```

### 语法参数

| alignToTop | [可选]，目前之前这个参数得到了良好的支持                     |
| ---------- | ------------------------------------------------------------ |
| true       | 元素的顶部将对齐到可滚动祖先的可见区域的顶部。对应于`scrollIntoViewOptions: {block: "start", inline: "nearest"}`。这是默认值 |
| false      | 元素的底部将与可滚动祖先的可见区域的底部对齐。对应于`scrollIntoViewOptions: {block: "end", inline: "nearest"}`。 |

| scrollIntoViewOptions | [可选]，目前这个参数浏览器对它的支持并不好，可以查看下文兼容性详情 |
| --------------------- | ------------------------------------------------------------ |
| behavior              | [可选]定义过渡动画。 `"auto"`,`"instant"`或`"smooth"`。默认为`"auto"`。 |
| block                 | [可选] `"start"`，`"center"`，`"end"`或`"nearest"`。默认为`"center"`。 |
| inline                | [可选] `"start"`，`"center"`，`"end"`或`"nearest"`。默认为`"nearest"`。 |

## 示例

```
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"});
```

### 应用场景

> URL中hash标记的进化 

- 聊天窗口滚动显示最新的消息
- 往一个列表添加item后滚动显示最新的添加的item
- 回到顶部(#)
- 滚动到指定位置(#xxx)

## 兼容性

| 特征                    | Chrome | Firefox (Gecko)      | Internet Explorer | Opera | Safari (WebKit) |
| ----------------------- | ------ | -------------------- | ----------------- | ----- | --------------- |
| 基本支持 ( alignToTop ) | 29     | 1.0 (1.7 or earlier) | 8[1]              | 38    | 5.0[1]          |
| `scrollIntoViewOptions` | 61[2]  | 36[3]、[4]           | 没有支持          | 48[2] | 没有支持        |

[1]不支持`"smooth"`行为或`"center"`选项。

[2] `"block"`和`"inline"`选项支持的值`"start"`，`"center"`，`"end"`，`"nearest"`。

[3]不支持`"inline"`选项

[4]不支持选项的`"nearest"`或 `"center"`值`"block"`。

## 参考：

https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

