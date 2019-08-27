# H5打开应用-URL Scheme

## URL scheme

scheme 是一种页面之间跳转的协议，不仅可以用于app之间进行跳转，还可以用于 H5 页面跳转到app页面。

无论Android还是IOS，都可以通过在H5页面中打开 scheme 协议的地址，从而打开本地app。

URL Schemes 有两个单词：

- URL，`http://www.apple.com` 就是个 URL，我们也叫它链接或网址；
- Schemes，表示的是一个 URL 中的一个位置——最初始的位置，即 `://`之前的那段字符。比如 `https://www.apple.com` 这个网址的 `Schemes` 是 **https**。

**你可以完全按照理解一个网页的 URL也就是它的网址的方式来理解一个 手机应用的 URL，拿苹果的网站和 微信APP来做个简单对比：**

|                   | 网页（苹果官网）                        | 应用（微信APP）               |
| ----------------- | --------------------------------------- | ----------------------------- |
| 网站首页/打开应用 | `<https://www.apple.com>`               | `weixin://`                   |
| 子页面/具体功能   | <https://www.apple.com/mac/>（Mac页面） | weixin://dl/moments（朋友圈） |

**scheme 协议定义和 http 协议类似，都是标准的 URI 结构。**

```javascript
[scheme:][//host:port][path][?query][#fragment]
```

- scheme : 协议名称 - 必须
- host : 协议地址 - 必须
- port : 协议的端口，可以不填
- path : 协议路径，可用 / 连接多个
- query : 携带的参数可用 & 连接多个
- fragment : 锚点

**Example：**

```javascript
wexin://tencent.com:8080/dl/news/open?data=902323&params=test
```

- weixin : 协议名称
- tencent.com : 域名
- 8080 : 端口
- /dl/news/open : 页面的路径
- data, params : 传递的参数

**示例URI及其组成部分。**

```javascript
          userinfo     host        port
          ┌─┴────┐ ┌────┴────────┐ ┌┴┐ 
  https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top
  └─┬─┘ └───────┬────────────────────┘└─┬─────────────┘└──┬───────────────────────┘└┬─┘  
  scheme     authority                 path              query                      fragment

  ldap://[2001:db8::7]/c=GB?objectClass?one
  └─┬┘ └───────┬─────┘└─┬─┘ └──────┬──────┘
 scheme    authority  path       query

  mailto:John.Doe@example.com
  └──┬─┘ └─────────┬────────┘
  scheme         path

  news:comp.infosystems.www.servers.unix
  └─┬┘ └───────────────┬───────────────┘
 scheme              path

  tel:+1-816-555-1212
  └┬┘ └──────┬──────┘
scheme     path

  telnet://192.0.2.16:80/
  └──┬─┘ └──────┬──────┘│
  scheme    authority  path

  urn:oasis:names:specification:docbook:dtd:xml:4.1.2
  └┬┘ └──────────────────────┬──────────────────────┘
scheme                     path
```



### 各类URL Schemes

1. **基本 URL Schemes**，是指一个 URL 的 Schemes 部分，比如上文提到的微信的。这个部分的唯一功能，就是打开相应应用，而不能够跳转到任何功能。

   ```javascript
   weixin://
   ```

2. **复杂 URL Schemes** 有两种：一种是直接打开某个应用的某个功能，另一种是打开某个功能后直接填写预设的字符

   ```javascript
   http://images.google.com/images?q=关键字
   ```

3. **变形 URL Schemes** 是指一些应用利用了 URL Schemes 的规则和 系统的一些内置功能，来拓充**复杂 URL Schemes**，并使其中需要输入字符或参数的部分可以预设或输入后再跳转，进一步减少步骤。

   ```javascript
   OmniFocus:///add?name=任务名&note=备注
   ```

4. **x-callback-URL**

   如果我们还想让应用根据不同的结果有对应的反应，就要用到 x-callback-URL。比如当上一个 URL Schemes 运行成功以后，我是要回到跳转前的应用？还是要接另一个动作（接上另一段 URL Schemes，打开另一个应用的某个功能）？无论是跳转回上个应用还是打开另一个动作，只要你在运行完一个 URL Schemes 后还想再利用一段新的 URL Schemes 做下一件事，就要靠 x-callback-URL，它的固定语法是：

- 在一个 URL Schemes 后面接`&x-success`，表示前一个 URL 成功以后下一步做什么；
- 在一个 URL Schemes 后面接`&x-error`，表示前一个 URL 失败以后下一步做什么；
- 在一个 URL Schemes 后面接`&x-cancel`，表示取消前一个 URL 的操作结果后下一步做什么；
- 还有一个 `&x-source` 我们遇到了再说。




## URL 编码（Encode）

**URL中的参数如果包含特殊字符，需要预先进行url编码，否则的话URL可能不能打开。**

URL 中的字符可以分为两类，一部分可以在链接中正常显示，比如字母、数字还有`/`等一部分符号。除此之外，全部不能正常显示，需要进行编码才能够作为 URL 的一部分出现。比如空格，在 URL 中就必须表示为 `%20`转换的规则不用深究，网上有很多工具（比如 [FeHelper](https://www.baidufe.com/fehelper/endecode.html)提供 URL 的编码和解码功能，可以把编码过的乱七八糟的 URL 解码为我们看得清爽的字符：

```javascript
Hi%2C+%E6%88%91%E6%98%AF+%40JailbreakHum` 转换为 `Hi, 我是 @JailbreakHum
```

这些工具当然也可以反过来把我们常用的字符转换成可以在 URL 中使用的字符。

所以理论上，所有 URL 不支持的字符，都要编码。编码的任务也就是这么简单，把 URL 不支持的字符换位它支持的字符。既然如此，为什么有的时候不用编码？因为那些不用编码的时候，是 App 私下替你编了。



## 如何查找URL

其中，基本 URL Schemes 是可以由你自己手动查询的，**所有支持基本 URL Schemes 的 App 都可以用以下方法查到其基本 URL Schemes**。而其它几种 URL Schemes 因为是写进代码中的，需要查询各 App 的文档，来参照例子根据自己的需求制作 URL。

#### 查找基本 URL Schemes

1. IOS: 基本 URL Schemes 的查找方法可以通过 App 中的 `info.plist` 来查询
2. AOS: 在AndroidManifest.xml文件中查找

#### 复杂 / 变形 / x-callback-URL

*若想全知全能，唯有查询文档。*

复杂 / 变形 / x-callback-URL 这三种类型的 URL Schemes 是写入代码中的，无法通过查询 .plist 文件来获取。但支持这三种 URL Schemes 的 App 的开发者将这些功能加入到自己 App 中一般是希望用户使用的，所以针对那些希望用户使用的功能都会专门写文档来告诉读者如何使用它们。

如果你想搜索任何一个 App 的复杂 / 变形 / x-callback-URL，你只要搜 `App 名 URL Schemes`，一般就能找到该 App 的 URL Schemes 文档页面。同时，直接去这些 App 的官网查找相关网页也可以。



## Universal Link(通用链接)

IOS9+支持通用链接，IOS用户可以点击指向您网站的链接，无需通过Safari即可无缝地重定向到已安装的应用。如果您的应用未安装，点击指向您网站的链接即可在Safari中打开您的网站。

通用链接为您提供了使用自定义URL方案时无法获得的几个主要优势。具体而言，通用链接是：

- **独特**。与自定义网址方案不同，其他应用无法声明通用链接，因为它们使用指向您网站的标准HTTP或HTTPS链接。
- **安全**。当用户安装您的应用时，IOS会检查您上传到网络服务器的文件，以确保您的网站允许您的应用代表其打开网址。只有您可以创建并上传此文件，因此您的网站与应用的关联是安全的。
- **灵活**。即使您的应用未安装，通用链接也能正常工作。未安装您的应用时，点按指向您网站的链接会在用户期望的Safari中打开内容。
- **简单**。一个URL适用于您的网站和您的应用。
- **私人的**。其他应用可以与您的应用进行通信，而无需知道您的应用是否已安装。

**Android不支持Universal Link。**



## H5打开APP的流程

1. AOS中，由于不支持统一通用链接使用scheme，如果系统有安装应用则打开应用，否则无反应。
2. IOS9+中，应用有通用链接的，则使用通用链接，如果系统有安装（**系统自动识别**）应用则打开应用，否则打开网页; 没有通用链接的以及不支持通用链接的IOS，则与AOS一致;

**如何检测系统是否安装相应的应用？**

关于这个H5并不能做到。

**在不知道系统是否安装相应的应用的情况下如何实现上面的场景呢？**

通过设置延时，浏览器尝试打开URL scheme并记录时间点t1，在2秒计时后，检查当前时间t2，如果t2-t1 > 2200ms,说明唤起app成功(唤起app会是浏览器的定时器延后执行)，如果t2-t1 < 2200ms,可能没有安装app，可以**引导用户进入下载页**（IOS直接跳转APP Store, 如`itms-apps://itunes.apple.com/cn/app/id477927812`）或者直接跳转**与应用功能对应的web页面**。

```javascript
function openWithApp(){
    var openTime = Date.now(),
	timer = null,
	appLink = "twitter://messages/compose?text=hello",
    webLink = "https://twitter.com/messages/compose?text=hello",
	appDownloadURL = "you app download page"，
	
    window.location.href = appLink;

    timer = setTimeout(function () {
            if (Date.now() - openTime < 2200) {//加了200ms基准误差
                window.location.href = appDownloadURL;
            }else{
                clearTimeout(timer);
            }
        }
    }, 2000);
}
```



### 有些APP在微信中为什么无法唤醒，需要“用浏览器打开”？

**微信浏览器使用你自己APP的 url scheme 满足两个条件** 

1. 使用腾讯开放平台的微下载服务,

   在微信浏览器中使用应用宝的微下载，将当前页面重定向到应用宝的下载页面

2. 该应用在平台必须是S级应用

   将你的APP的Scheme添加到微信官方的白名单中

3. 如果不符合以上两个条件，只有引导用户用其他浏览器打开

**PS：对于下载apk这种，微信是屏蔽任何应用的，所以你想提供下载链接，都逃不过使用浏览器打开之中low的方式了.**



## 参考：

1. https://blog.csdn.net/u013517637/article/details/55251421
2. https://www.jb51.net/html5/591158.html
3. https://sspai.com/post/31500
4. https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
5. https://www.jianshu.com/p/0ead88409212



## 附录：常见应用的URL Scheme

1、记录使用过的URL Scheme

| 名称                        | URL Scheme                                                   | 对应的普通链接                                               |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Twitter发消息               | twitter://messages/compose?text=[yourText]                   | https://twitter.com/messages/compose?text=[yourText]         |
| Twitter发动态               | twitter://intent/tweet?text=[yourText]                       | https://twitter.com/intent/tweet?text=[yourText]             |
| 打开Email                   | mailto:?body=[yourText]                                      |                                                              |
| 给某人发Email               | mailto:[emailAddress]?body=[yourText]                        |                                                              |
| 发短信SMS                   | sms:body=hello（AOS）sms:&body=hello（IOS）                  |                                                              |
| whatsapp发消息              | whatsapp://send?text=[yourText]                              |                                                              |
| fbmessenger发消息(分享链接) | fb-messenger://share/?link=[yourShareURL]                    | https://www.facebook.com/dialog/send?display=popup&app_id=[yourAppID]&link=[yourShareURL]&redirect_uri=[yourShareURL] |
| fbmessenger发消息(指定对象) | fb-messenger://m.me/[yourPageID]（通用）  fb-messenger-public://user-thread/[yourPageID]（IOS） | https://www.messenger.com/t/[yourPageID] / https://m.me/[yourPageID] |
| fb打开相关主页              | fb://page/[yourPageID]                                       | https://www.facebook.com/[yourPageID]                        |
| Amazon打开产品详情页        | com.amazon.mobile.shopping://www.amazon.com/dp/[yourAsin]    | https://www.amazon.com/dp/[yourAsin]                         |
| 打开App Store中应用详情页   | itms-apps://itunes.apple.com/cn/app/[yourAppID]              | https://itunes.apple.com/cn/app/[yourAppID]                  |
| 打电话                      | tel:[telephoneNumber]                                        |                                                              |

2、系统默认应用

| 名称      | URL Scheme                                        | Bundle identifier |
| --------- | ------------------------------------------------- | ----------------- |
| Safari    | http://                                           |                   |
| maps      | [http://maps.google.com](http://maps.google.com/) |                   |
| Phone     | tel://                                            |                   |
| SMS       | sms://                                            |                   |
| Mail      | mailto://                                         |                   |
| iBooks    | ibooks://                                         |                   |
| App Store | itms-apps://itunes.apple.com                      |                   |
| Music     | music://                                          |                   |
| Videos    | videos://                                         |                   |

3、常用第三方软件

| 名称             | URL Scheme         | Bundle identifier                  |
| ---------------- | ------------------ | ---------------------------------- |
| QQ               | mqq://             |                                    |
| 微信             | weixin://          |                                    |
| 腾讯微博         | TencentWeibo://    |                                    |
| 淘宝             | taobao://          |                                    |
| 支付宝           | alipay://          |                                    |
| 微博             | sinaweibo://       |                                    |
| weico微博        | weico://           |                                    |
| QQ浏览器         | mqqbrowser://      | com.tencent.mttlite                |
| uc浏览器         | dolphin://         | com.dolphin.browser.iphone.chinese |
| 欧朋浏览器       | ohttp://           | com.oupeng.mini                    |
| 搜狗浏览器       | SogouMSE://        | com.sogou.SogouExplorerMobile      |
| 百度地图         | baidumap://        | com.baidu.map                      |
| Chrome           | googlechrome://    |                                    |
| 优酷             | youku://           |                                    |
| 京东             | openapp.jdmoble:// |                                    |
| 人人             | renren://          |                                    |
| 美团             | imeituan://        |                                    |
| 1号店            | wccbyihaodian://   |                                    |
| 我查查           | wcc://             |                                    |
| 有道词典         | yddictproapp://    |                                    |
| 知乎             | zhihu://           |                                    |
| 点评             | dianping://        |                                    |
| 微盘             | sinavdisk://       |                                    |
| 豆瓣fm           | doubanradio://     |                                    |
| 网易公开课       | ntesopen://        |                                    |
| 名片全能王       | camcard://         |                                    |
| QQ音乐           | qqmusic://         |                                    |
| 腾讯视频         | tenvideo://        |                                    |
| 豆瓣电影         | doubanmovie://     |                                    |
| 网易云音乐       | orpheus://         |                                    |
| 网易新闻         | newsapp://         |                                    |
| 网易应用         | apper://           |                                    |
| 网易彩票         | ntescaipiao://     |                                    |
| 有道云笔记       | youdaonote://      |                                    |
| 多看             | duokan-reader://   |                                    |
| 全国空气质量指数 | dirtybeijing://    |                                    |
| 百度音乐         | baidumusic://      |                                    |
| 下厨房           | xcfapp://          |                                    |

PS: 更多URL Scheme可在下列链接中查找

1. https://st3376519.huoban.com/share/1985010/VGi2N5Vf0C1MVnHCVWiBc8L9g15c9VGJbMGcFrb6/172707/list
2. https://blog.csdn.net/dengchuanjiang/article/details/52554021
3. https://blog.csdn.net/samuelltk/article/details/42290523