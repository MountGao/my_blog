# closest

## 简介

> 该`closest`方法返回当前元素（或当前元素本身）的最接近的祖先，该祖先与参数中给出的选择器匹配。如果没有这样的祖先，它就会返回`null`。 



## 语法

```
var elt = element .closest（selectors）; 
```



## 示例

```
<article>
  <div id="div-01">Here is div-01
    <div id="div-02">Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

```
var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");  
// 返回 div id="div-02" 的元素

var r2 = el.closest("div div");  
//  返回 el 本身

var r3 = el.closest("article > div");  
// 返回 div id="div-01" 的元素

var r4 = el.closest(":not(div)");
// 不是div的祖先元素，返回最外层的article元素
```



## 应用场景

- 获取相应的祖先节点进行操作
- 替换原来jQuery的closest方法，IE浏览器下可以引入polyfill实现该方法

  

## 浏览器兼容性

| 特征     | Chrome | Firefox | Safari | Edge | IE   | Opera |
| -------- | ------ | ------- | ------ | ---- | ---- | ----- |
| 基本支持 | 41     | 35      | 9      | 15   | no   | 28    |

## Polyfill

对于不支持  `Element.closest()`但支持  `element.matches()`（或带有前缀的等效，即IE9 +）的浏览器，存在一个polyfill： 

```
if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1); 
        return null;
    };
```

但是，如果您确实需要IE 8支持，那么以下polyfill将非常缓慢地完成工作，但最终。但是，它只支持IE 8中的CSS 2.1选择器，它可能会导致生产网站出现严重的延迟峰值。 

```
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = 
    function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
            i = matches.length;
            while (--i >= 0 && matches.item(i) !== el) {};
        } while ((i < 0) && (el = el.parentElement)); 
        return el;
    };
}
```



## 参考：

https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

