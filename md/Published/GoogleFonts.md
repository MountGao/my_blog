# Google Fonts

## 获取字体

Google Fonts不再屏蔽，亲测有效。

**1、打开Google fonts 访问地址：https://fonts.google.com/**

**2、点击 + 添加字体**

**3、点开下方的小弹窗，按照步骤将选择的字体进行应用**



## 使用字体

**1、要将所选字体嵌入网页，请将此代码复制到`<head>`HTML文档中。**

```html
//standard
<link href ="https://fonts.googleapis.com/css?family=Lato" rel ="stylesheet">
```

```html
//@import
<style> 
@import url（'https://fonts.googleapis.com/css?family=Lato'）;
</style>
```

**2、在CSS中指定**

使用以下CSS规则指定这些系列：

```css
font-family：'Lato'，sans-serif;
```

**3、链接基本规则**

```
https://fonts.googleapis.com/css?family=字体名称
```



## 推荐字体

**PS：中文字体还是推荐微软雅黑啊（Sincerely）**

- Lato
- Open Sans



推荐字体会不定期更新...



## Google Fonts 中文版

如果加载不了前面的链接，可以通过中文版[https://www.font.im/]加载

具体做法：将加载链接中的`googleapis.com`改为`font.im`

```html
//常规加载
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

//中文版加载
<link href="https://fonts.font.im/css?family=Lato" rel="stylesheet">
```



# Apple Fonts

苹果字体开发：https://developer.apple.com/fonts/



## 参考：

1. https://fonts.google.com
2. https://developers.google.com/fonts/docs/getting_started

