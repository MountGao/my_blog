## Facebook 和 Twitter 上的分享

原文链接： [css-tricks.com](https://css-tricks.com/essential-meta-tags-social-media/) 

中文链接：https://www.zcfy.cc/article/the-essential-meta-tags-for-social-media-css-tricks-658.html

**og**是一种新的HTTP头部标记，即Open Graph Protocol：

The Open Graph Protocol enables any web page to become a rich object in a social graph.

这种协议可以让网页成为一个“富媒体对象”。用了Meta Property=og标签，就是你同意了网页内容可以被其他社会化网站引用等，目前这种协议被SNS网站如Fackbook、 renren采用。SNS已经成为网络上的一大热门应用，优质的内容通过分享在好友间迅速传播。为了提高站外内容的传播效率，2010年F8会 议上Facebook公布了一套开放内容协议(Open Graph Protocol)，任何网页只要遵守该协议，SNS就能从页面上提取最有效的信息，并呈现给用户*。*

### 专有的 `Tags`

我们怎么指定这些属性? 用 `tags` 。当一个链接被分享的时候, Facebook 和 Twitter都会先获取到相关的网页，读取它的 `tags` 来展现指定的信息。

Facebook利用Open Graph协议使用`tags`，这是一个网页的分类系统，扩展自已经被定义在了HTML5中的`tags`。你可以在 [Open Graph](http://ogp.me/) 网站中查看到`tags` 的一个完整的列表。这么多选择可能会有点吓人，但是实际上只有4个是必需的：

```
<meta property="og:title" content="European Travel Destinations">
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.htm"> 
```

Twitter有自己的`tags`，和 Open Graph 协议很相似, 但是使用了“twitter”前缀取代了“og”。至于Facebook, 只有一些是被要求的。我们从Twitter上请求的显示格式的类型也要被定义: 

```
<meta name="twitter:title" content="European Travel Destinations ">
<meta name="twitter:description" content=" Offering tour packages for individuals or groups.">
<meta name="twitter:image" content=" http://euro-travel-example.com/thumbnail.jpg">
<meta name="twitter:card" content="summary_large_image"> 
```

**Title 标题**

网页的题目，标题或名称。 相关内容的简明标题。[最多70个字符.]

**Description 描述** 

对网页的简短描述或总结。 [2到4句话] 一个描述应该简要的总结内容，以便在Tween中可以恰当地展示。 你不应该把标题重复用做描述，或者使用此字段来描述网站提供的一般性服务。 [最多200个字符]

**Image 图像** 

网页图像的URL。至少 600x315 像素, 但是 1200x630 或者再大一点的话更好 (最大不超过5MB)。保持接近 1.91:1 的宽高比，避免被裁剪。

是代表这个页面内容的专属图像的URL。你不应该使用一个通用的图像，比如你的网站logo，作者照片，或者其他可用到多个页面的图像。卡片中的图像至少宽280px，高150px。图像大小必须小于1MB。

**URL 网页的规范 URL**

这应该是一个标准的 URL, 没有session变量, 用户标识参数, 或者计数器。

### 协调`Tags`

虽然有很多多余的`Tags`并没有什么危害。 过多的信息并不会伤害任何人，也就是向HTML文件里加入了一些额外的字节而已。

但是为了我们的目的, 而且为了简洁起见, 我们可以利用这个事实：Twitter允许我们使用它自己的`Tags`替代 Open Graph。所以，除了有必要指定显示格式, Twitter自定义的`Tags`其实并不需要。以下可以被认为是能满足让网页在社交媒体中被分享所需的最少的`Tags`：

```
<meta property="og:title" content="European Travel Destinations">
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.htm">
<meta name="twitter:card" content="summary_large_image"> 
```

协调图像的准则还是很简单的: 遵从Facebook的建议，最小尺寸 1200x630 像素，宽高比 1.91:1, 但是还要遵守Twitter规定的文件大小不超过1MB的要求。 

### 验证 `Tags`有效性

如果你对削减成这五个标签的合法性表示怀疑的话，我们可以使用[Facebook分享调试器](https://developers.facebook.com/tools/debug/sharing/) 和 [Twitter卡片校验器](https://cards-dev.twitter.com/validator)。这两个工具都会获取部署到`Tags`相关的公共服务器上的网页，并且显示它被分享后的样子，也会列出一些错误和提供修改建议。 

另一个Facebook分享调试器https://developers.facebook.com/tools/debug/og/object/（个人感觉更好用）

### 补充说明

Facebook 文档推荐了一个额外的`Tags`，尽管这不是必需的。这个`Tags`指示了被分享网页所属的网站的名字：

```
`<meta name="og:site_name" content="European Travel, Inc.">`
```

Twitter也推荐了另外一个`Tags` ，同样也不是必需的:

```
`<meta name="twitter:image:alt" content="Alt text for image">`
```

这个标签为视觉障碍患者提供了替代的图片描述。

### 最后标注

要重申的是，当你看Facebook 和 Twitter 关于分享网页的文档时,会有很多其他的`Tags`用来指定不同类型的内容。但是一般来说，以下这些就够用了： 

```
<!--  必需的 META Tags -->

<meta property="og:title" content="European Travel Destinations">
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.htm">
<meta name="twitter:card" content="summary_large_image">

<!--  非必需，但是推荐的 -->

<meta name="og:site_name" content="European Travel, Inc.">
<meta name="twitter:image:alt" content="Alt text for image">

<!--  非必需，但是分析要用的 -->

<meta property="fb:app_id" content="your_app_id" />
<meta name="twitter:site" content="@website-username"> 
```



#facebook share

1、https://www.facebook.com/sharer/sharer.php?u=你的分享的页面地址

*example:*

```
<a href="https://www.facebook.com/sharer/sharer.php?u=http://47.254.26.178/dealgogogo-extension-b" target="_blank" style="font-size: 30px;">J-share-facebook-message-2</a>

window.open("https://www.facebook.com/sharer/sharer.php?u=http://47.254.26.178/dealgogogo-extension-b","_blank");
```

##### 注意：需要在分享的页面上进行相应分享信息的配置

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

##### 注意：需要在分享的页面上进行相应分享信息的配置

*example*：

```
<a class="twitter" href="https://twitter.com/intent/tweet?
        url=http%3A%2F%2Fdolphin.com%2Fhappy-new-year%2F&text=" 
   target="_blank" id="J-share-twitter">J-share-twitter
</a>
```
