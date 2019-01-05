# Facebook-分享

### Open Graph Protocol

**og**是一种新的HTTP头部标记，即Open Graph Protocol：

The Open Graph Protocol enables any web page to become a rich object in a social graph.

这种协议可以让网页成为一个“富媒体对象”。用了Meta Property=og标签，就是你同意了网页内容可以被其他社会化网站引用等，目前这种协议被SNS网站如Fackbook、 renren采用。SNS已经成为网络上的一大热门应用，优质的内容通过分享在好友间迅速传播。为了提高站外内容的传播效率，2010年F8会 议上Facebook公布了一套开放内容协议(Open Graph Protocol)，任何网页只要遵守该协议，SNS就能从页面上提取最有效的信息，并呈现给用户*。*

### Facebook 和 Twitter 上的分享

Facebook提供给开发人员很多选择，可以根据网站内容来设置一个分享的网页如何显示在它的时间轴上。除非特别说明，否则每个网站会被默认成一个“网站website”。

Twitter同样有很多的方式格式化分享的网页并显示。

**每个分享的网页都有几个突出的属性:**

- 一个突出的图像
- 一个突出的标题
- 一段简短描述
- 一个网站域名

### 专有的 `Tags`

我们怎么指定这些属性? 用 `tags` 。当一个链接被分享的时候, Facebook 和 Twitter都会先获取到相关的网页，读取它的 `tags` 来展现指定的信息。

Facebook利用Open Graph协议使用`tags`，这是一个网页的分类系统，扩展自已经被定义在了HTML5中的`tags`。你可以在 [Open Graph](http://ogp.me/) 网站中查看到`tags` 的一个完整的列表。这么多选择可能会有点吓人，但是实际上只有4个是必需的：

```html
<meta property="og:title" content="European Travel Destinations">
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.htm"> 
```

Twitter有自己的`tags`，和 Open Graph 协议很相似, 但是使用了“twitter”前缀取代了“og”。至于Facebook, 只有一些是被要求的。我们从Twitter上请求的显示格式的类型也要被定义: 

```html
<meta name="twitter:title" content="European Travel Destinations ">
<meta name="twitter:description" content=" Offering tour packages for individuals or groups.">
<meta name="twitter:image" content=" http://euro-travel-example.com/thumbnail.jpg">
<meta name="twitter:card" content="summary_large_image"> 
```

**Facebook标准对象属性**

| 名称             | 描述                                                         | 必需 |
| ---------------- | ------------------------------------------------------------ | ---- |
| `og:url`         | 对象的URL，用作**规范URL**。通常与放置属性标记的页面相同的URL。它不应包含任何会话变量，用户标识参数或计数器。始终使用此标记的规范网址，或者喜欢和分享将分布在网址的所有变体中。 | 是   |
| `og:title`       | 对象的标题，标题或名称。                                     | 是   |
| `og:description` | 对象的简短描述或摘要。                                       | 是   |
| `og:image`       | 对象图像的URL（**标准的URL**）。它应该至少为**600x315**像素，但最好是1200x630或更大（**最多5MB**）。保持接近**1.91：1**的宽高比以避免裁剪（**不按照这个比例，图片会变裁剪**）。游戏图标应为**方形**，至少600x600像素。`og:image`如果您有多个可用分辨率，则可以包含多个标记。如果在发布后更新映像，请使用新URL，因为映像是基于URL缓存的，否则可能不会更新。 | 是   |
| `fb:app_id`      | 该网站应用的Facebook应用ID。                                 | 否   |
| `og:type`        | 在App Dashboard 的Action Type部分中找出对象的类型。选择对象并`og:type`在“ **高级”**下找到它。一旦对象在故事中发布，其类型就无法更改。 | 否   |
| `og:locale`      | 对象属性使用的语言区域设置。**默认值为en_US。**              | 否   |
| `og:video`       | 对象的视频的URL。如果指定多个`og:video`，则`og:video:type`每个视频都需要。要使视频在线播放，请参阅[视频类型参考](https://developers.facebook.com/docs/sharing/webmasters#media)。视频需要`og:image`在新闻Feed中显示标记。 | 否   |
| `og:determiner`  | 出现在故事中对象之前的单词（例如“煎蛋”）。该值应该是一个字符串，它是Enum {a，an，the，“”，auto}的成员。当选择“自动”时，Facebook将在“a”或“an”之间进行选择。**默认为空。** | 否   |

**Twitter卡片属性**

| 名称                  | 描述                                                         | 必需 |
| --------------------- | ------------------------------------------------------------ | ---- |
| `twitter:card`        | 必须设置为“摘要”的值                                         | 是   |
| `twitter:site`        | Twitter @username卡应归功于。                                | 否   |
| `twitter:title`       | 相关内容的简明标题。平台特定行为：iOS，Android：在时间轴和扩展的Tweet中截断为两行；Web：在时间轴中截断一行并展开Tweet | 是   |
| `twitter:description` | 简要概述内容以适合在推文中呈现的描述。您不应该重复使用标题作为描述，或使用此字段来描述网站提供的一般服务。平台特定行为：iOS，Android：不显示；Web：在时间轴中截断三行并展开Tweet | 是   |
| `twitter:image`       | 表示页面内容的唯一图像的URL（**标准的URL**）。您不应使用通用图像，例如您的网站徽标，作者照片或跨越多个页面的其他图像。此卡的图像支持1：1的宽高比，最小尺寸为144x144或最大为4096x4096像素。图像大小必须**小于5MB**。图像将在所有平台上裁剪为正方形。支持JPG，PNG，WEBP和GIF格式。仅使用动画GIF的第一帧。**不支持SVG**。 | 否   |
| `twitter:image:alt`   | 图像的文本描述，向视力受损的用户传达图像的基本性质。**最多420个字符。** | 否   |

### 协调`Tags`

虽然有很多多余的`Tags`并没有什么危害。 但是为了我们的目的, 而且为了简洁起见, 我们可以利用这个事实：Twitter允许我们使用它自己的`Tags`替代 Open Graph。所以，除了有必要指定显示格式, Twitter自定义的`Tags`其实并不需要。以下可以被认为是能满足让网页在社交媒体中被分享所需的最少的`Tags`：

```html
<meta property="og:title" content="European Travel Destinations">
<meta property="og:description" content="Offering tour packages for individuals or groups.">
<meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
<meta property="og:url" content="http://euro-travel-example.com/index.htm">
<meta name="twitter:card" content="summary_large_image"> 
```

协调图像的准则还是很简单的: 遵从Facebook的建议，最小尺寸 600x315 像素，宽高比 1.91:1, 但是还要遵守Twitter规定的文件大小不超过5MB的要求，不支持SVG格式。

### 验证 `Tags`有效性

如果你对削减成这五个标签的合法性表示怀疑的话，我们可以使用[Facebook分享调试器](https://developers.facebook.com/tools/debug/sharing/) 和 [Twitter卡片校验器](https://cards-dev.twitter.com/validator)。这两个工具都会获取部署到`Tags`相关的公共服务器上的网页，并且显示它被分享后的样子，也会列出一些错误和提供修改建议。 

PS：[另一个Facebook分享调试器](https://developers.facebook.com/tools/debug/og/object/)（个人感觉更好用）

### 额外`Tags`补充说明

Facebook 文档推荐了一个额外的`Tags`，尽管这不是必需的。这个`Tags`指示了被分享网页所属的网站的名字：

```html
<meta name="og:site_name" content="European Travel, Inc.">
```

Twitter也推荐了另外一个`Tags` ，同样也不是必需的:

```html
<meta name="twitter:image:alt" content="Alt text for image">
```

这个标签为视觉障碍患者提供了替代的图片描述。

### `Tags`最后标注

要重申的是，当你看Facebook 和 Twitter 关于分享网页的文档时,会有很多其他的`Tags`用来指定不同类型的内容。但是一般来说，以下这些就够用了： 

```html
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

###Facebook share example

1、Timeline（时间线）-分享链接

格式：https://www.facebook.com/sharer/sharer.php?u=分享地址（建议这种格式）

*example:*

```html
<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.baidu.com" target="_blank">share-facebook</a>
```

```javascript
window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.baidu.com","_blank");
```

2、Timeline（时间线）-分享链接

格式：https://www.facebook.com/dialog/feed/?app_id=应用的app_id&link=分享地址

*example:*

```html
<a href="https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=https%3A%2F%2Fwww.baidu.com" target="_blank">share-facebook</a>
```

```javascript
window.open("https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=https%3A%2F%2Fwww.baidu.com","_blank");
```

3、Timeline（时间线）-分享图片

*example:*

```html
<a href="https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=&name=&picture=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41t3LIY%2BWbL.jpg" target="_blank">share-facebook-messenger</a>
```

```javascript
window.open("https://www.facebook.com/dialog/feed/?app_id=166193257232747&link=&name=&picture=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41t3LIY%2BWbL.jpg","_blank");
```

4、Facebook Messenger（消息分享）

*example*：

```html
<a href="https://www.facebook.com/dialog/send?app_id=166193257232747&link=https%3A%2F%2Fwww.baidu.com&redirect_uri=https%3A%2F%2Fwww.baidu.com" target="_blank">share-facebook-messenger</a>
```

```javascript
window.open("https://www.facebook.com/dialog/send?app_id=166193257232747&link=https%3A%2F%2Fwww.baidu.com&redirect_uri=https%3A%2F%2Fwww.baidu.com","_blank");
```

5、Facebook Messenger（消息分享）-URL Scheme

```html
<a href="fb-messenger://share/?link=https%3A%2F%2Fwww.baidu.com" target="_blank">share-facebook-messenger</a>
```

### Twitter share example

1、Tweet（发推）

格式：https://twitter.com/intent/tweet?url=分享地址&via=分享人（可以@）&text=分享内容

*example:*

```html
<a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.baidu.com&text=Hello%20world" target="_blank">share-twitter</a>
```

```javascript
window.open("https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.baidu.com&text=Hello%20world","_blank");
```

2、Direct Messages（私信）

格式：https://twitter.com/messages/compose?recipient_id=接收者的推特ID&text=分享内容

*example:*

```html
<a href="https://twitter.com/messages/compose?recipient_id=3805104374&text=Hello%20world" target="_blank">Twitter Message @furni</a>
```

```javascript
window.open("https://twitter.com/messages/compose?recipient_id=3805104374&text=Hello%20world","_blank");
```

```html
<a href="https://twitter.com/messages/compose?text=Hello%20world" target="_blank">Twitter Message</a>
```

```javascript
window.open("https://twitter.com/messages/compose?text=Hello%20world","_blank");
```

3、Tweet（发推）-URL Scheme

```html
<a href="twitter://post?text=Hello%20world" target="_blank">share-twitter</a>
```

4、Direct Messages（私信）-URL Scheme

```html
<a href="twitter://messages/compose?recipient_id=3805104374&text=Hello%20world" target="_blank">Twitter Message @furni</a>
```

```html
<a href="twitter://messages/compose?text=Hello%20world" target="_blank">Twitter Message </a>
```

### 特别注意：

1. **以上分享需要在分享的页面上进行相应分享信息的配置**
2. **同时分享链接中的分享地址和文本必须是URL编码的。**

### 参考：

1. https://www.zcfy.cc/article/the-essential-meta-tags-for-social-media-css-tricks-658.html
2.  [css-tricks.com](https://css-tricks.com/essential-meta-tags-social-media/) 
3. Facebook分享调试器：https://developers.facebook.com/tools/debug/sharing/
4. Facebook分享调试器：https://developers.facebook.com/tools/debug/og/object/
5. Twitter卡片校验器：https://cards-dev.twitter.com/validator
6. Facebook对象属性：https://developers.facebook.com/docs/sharing/opengraph/object-properties
7. Twitter卡片属性：https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary