#facebook share

1、https://www.facebook.com/sharer/sharer.php?u=你的分享的页面地址

*example:*

```
<a href="https://www.facebook.com/sharer/sharer.php?u=http://47.254.26.178/dealgogogo-extension-b" target="_blank" style="font-size: 30px;">J-share-facebook-message-2</a>

window.open("https://www.facebook.com/sharer/sharer.php?u=http://47.254.26.178/dealgogogo-extension-b","_blank");
```

##### 注意：需要在分享的页面上进行配置

```
<meta property="og:site_name" content="dealgogogo" />
<meta property="og:url" content="http://dolphin.com/happy-new-year/" />
<meta property="og:title" content="In 2016,you will get a gift - Dolphin Browser" />
<meta property="og:description" content="Enter your name and see what you might encounter in the new year." />
<meta property="og:image" content="http://47.254.26.178/assets/static/landingPage/img/landing-img-01.png">//分享对话框的封面图片
<meta property="og:locale" content="en_US">
<meta property="og:type" content="website">

```

**og**是一种新的HTTP头部标记，即Open Graph Protocol：

The Open Graph Protocol enables any web page to become a rich object in a social graph.

这种协议可以让网页成为一个“富媒体对象”。用了Meta Property=og标签，就是你同意了网页内容可以被其他社会化网站引用等，目前这种协议被SNS网站如Fackbook、 renren采用。SNS已经成为网络上的一大热门应用，优质的内容通过分享在好友间迅速传播。为了提高站外内容的传播效率，2010年F8会 议上Facebook公布了一套开放内容协议(Open Graph Protocol)，任何网页只要遵守该协议，SNS就能从页面上提取最有效的信息，并呈现给用户*。*

2、https://www.facebook.com/dialog/feed/?app_id=你的app_id&link=你的分享的页面地址

*example:*

```
<a href="https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=http://47.254.26.178/dealgogogo-extension-b" target="_blank" style="font-size: 30px;">J-share-facebook-message-2</a>

window.open("https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=http://47.254.26.178/dealgogogo-extension-b","_blank");
```

3、分享图片

*example:*

```
<a href="https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=&name=&picture=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41t3LIY%2BWbL.jpg" target="_blank" style="font-size: 30px;">J-share-facebook-message-2</a>

window.open("https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=&name=&picture=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41t3LIY%2BWbL.jpg","_blank");
```

4、message分享

*example*：

```
<a href="https://www.facebook.com/dialog/send?app_id=166193257232747&link=http://47.254.26.178/dealgogogo-extension-b&redirect_uri=http://47.254.26.178/dealgogogo-extension-b" target="_blank" style="font-size: 30px;">J-share-facebook-message-2</a>

window.open("https://www.facebook.com/dialog/send?app_id=166193257232747&link=http://47.254.26.178/dealgogogo-extension-b&redirect_uri=http://47.254.26.178/dealgogogo-extension-b","_blank");
```

# twitter share

分享twitter不需要访问html头中的meta，直接指定，如果需要动态生成分享的标题头，则需要在js中动态的生成标题头，并在js中拼接给href属性。

*example*：

```
<a class="twitter" href="https://twitter.com/intent/tweet?
        url=http%3A%2F%2Fdolphin.com%2Fhappy-new-year%2F&text=" 
   target="_blank" id="J-share-twitter">J-share-twitter
</a>
```