# 2018.02.20

1.基础知识不扎实html,css

2.谷歌开发者工具不熟悉，不全面

3.http,https协议的概念，状态码，默认端口，优缺点，请求方式的区别等基础

4.开发模式

5.js内联和外嵌的区别

6.浏览器性能

7.cookie,localStorage,sessionStorage

8.谷歌开发者工具如何查看js函数的调用

9.display:none 和visibility:hidden的区别

| **CSS元素隐藏** | display:none                             | visible:hidden                           |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| 相同点         | 都能把网页上某个元素隐藏起来                           | 都能把网页上某个元素隐藏起来                           |
|             |                                          |                                          |
| 空间占据        | 不占据空间，看不见也摸不到                            | 占据空间，看不见但摸得到                             |
| 回流与渲染       | 有，影响前端性能                                 | 无                                        |
| 株连性         | 一旦父节点元素应用了display:none，父节点及其子孙节点元素全部不可见，而且无论其子孙元素如何不屈地挣扎都无济于事。 | 我们给一个父元素应用visibility:hidden，则其子孙后代也都会全部不可见 。如果子孙元素应用了visibility:visible，那么这个子孙元素又会刘谦般地显现出来 |

#### **对比总结**： 

**display:none**是个相当惨无人道的声明，子孙后代全部搞死（株连性），而且连块安葬的地方都不留（不留空间），导致全体民众哗然（渲染与回流）。 
**visibility:hidden**则具有人道主义关怀，虽然不得已搞死子孙，但是子孙可以通过一定手段避免（伪株连性），而且死后全尸，墓地俱全（占据空间），国内民众比较淡然（无渲染与回流）。

> http://www.jb51.net/web/73987.html

9.head标签里面必须的一个标签是什么

```
<title></title>
```

10.console.log()和console.dir()的区别

```
1.console.log()可以取代alert()或document.write()，在网页脚本中使用console.log()时，会在浏览器控制台打印出信息。

2.console.dir()可以显示一个对象所有的属性和方法。
```



## HTTPS优缺点、原理解析：我们的网站该不该做HTTPS？

> http://www.chinaz.com/web/2017/0224/663236.shtml

###HTTPS和HTTP的区别是什么

​    1、HTTPS是加密传输协议，HTTP是名文传输协议;
​    2、HTTPS需要用到SSL证书，而HTTP不用;
​    3、HTTPS比HTTP更加安全，对搜索引擎更友好，利于SEO

（1）[为保护用户隐私安全,谷歌优先索引HTTPS网页](http://www.wosign.com/news/2015-1225-01.htm)、

（2）[百度开放收录https站点，https全网化势不可挡】](http://www.wosign.com/News/baidu-https.html);
​    4、 HTTPS标准端口443，HTTP标准端口80;
​    5、 HTTPS基于传输层，HTTP基于应用层;
​    6、 HTTPS在浏览器显示绿色安全锁，HTTP没有显示;

> http://blog.csdn.net/hherima/article/details/52469267

## 谷歌开发者工具使用

1.如果代码压缩了，可以在sources面板左下方的小括号prity print格式化代码，方便查看

> ### 谷歌Chrome浏览器开发者工具教程—JS调试篇
>
> http://blog.csdn.net/cyyax/article/details/51242720

### console.dir()和console.log()的区别

1.console.log()可以取代alert()或document.write()，在网页脚本中使用console.log()时，会在浏览器控制台打印出信息。

2.console.dir()可以显示一个对象所有的属性和方法。

3.可以看看console方法的详细介绍：https://segmentfault.com/a/1190000004528137[点击打开链接](https://segmentfault.com/a/1190000004528137)



### HTML中的html head body标签有且只能有一个，为什么不可以直接省略？

> https://www.zhihu.com/question/48132049



### 关于HTTP协议，一篇就够了

> https://www.cnblogs.com/ranyonsue/p/5984001.html







# 2018.02.21

1.vue为什么子组件里面的data属性是retrurn回来的？

2.为什么能通过圆形实现继承?

3.es6的promise与callback有什么区别，什么时候用callback,什么时候用户promise?

# 2018.03.22

1.h5的pushstate的用途？

2.简述页面从加载到渲染，webview和直接用浏览器访问有什么区别？

3.作用域和作用域链



# C/S和B/S两种架构区别与优缺点分析

> http://www.jb51.net/article/56605.htm

# LAMP与J2EE与 .NET三者的比较

> https://blog.csdn.net/lonsegdi/article/details/47204315

1、ASP.NET

ASP.NET 的开发框架是 Windows server +IIS+SQL Server+ASP的组合，主要开发语言有C#.NET和VB.NET。

2、J2EE开发平台

J2EE的开发架构是 UNIX/windows+Tomcat+Orecle+JSP的组合，主要是用JAVA编写程序。比如Android平台级应用的网页后台用户管理端

3、LAMP开发平台

LAMP的开发架构是 Linux+Apache+MySQL+PHP，主要是用PHP来编写程序。比如Facebook



| 性能比较 | LAMP                 | J2EE     | ASP.NET   |
| ---- | -------------------- | -------- | --------- |
| 运行速度 | 较快                   | 快        | 快         |
| 开发速度 | 快                    | 慢        | 快         |
| 运行耗损 | 一般                   | 较小       | 较大        |
| 难易程度 | 简单                   | 难        | 简单        |
| 运行平台 | Linux/UINX/Windows平台 | 绝大多数平台均可 | Windows平台 |
| 扩展性  | 好                    | 好        | 较差        |
| 安全性  | 好                    | 好        | 较差        |
| 应用程度 | 较广                   | 较广       | 较广        |
| 建设成本 | 非常低                  | 非常高      | 高         |



## localStorage,sessionStorage,cookie使用场景和区别

> https://www.cnblogs.com/zmj-blog/p/7120282.html

#### 1.localStorage/sessionStorage：HTML5新增的在浏览器端存储数据的方法

localStorage和sessionStorage使用时使用相同的API：

localStorage.setItem("key","value");//以“key”为名称存储一个值“value”

localStorage.getItem("key");//获取名称为“key”的值

localStorage.removeItem("key");//删除名称为“key”的信息。

localStorage.clear();//清空localStorage中所有信息

**web Storage不但可以用自身的setItem,getItem等方便存取，也可以像普通对象一样用点(.)操作符，及[]的方式进行数据存储**

```
var storage = window.localStorage; storage.key1 = "hello"; 
storage["key2"] = "world"; 
console.log(storage.key1); 
console.log(storage["key2"]);
```

#### 2.cookie：浏览器和服务器端都可以设置cookie，传统的用来存储数据的方法。

cookie默认的有效期是浏览器会话期间，作用域是整个浏览器而不仅仅局限于窗口或标签页

设置cookie：

```
function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
}
```

读取cookie：

```
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
　　 return (arr=document.cookie.match(reg))?unescape(arr[2]):null;
}
```

删除cookie（将cookie设置过期即可）：

```
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}
```



**escape(string) 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。**
**unescape(string) 函数可对通过 escape() 编码的字符串进行解码。**

#### 3.三者的关系

- cookie在浏览器和服务器端来回传递数据，而localStorage和sessionStorage不会自动把数据发送给服务器，仅会保存在本地。cookie会在浏览器请求头或者ajax请求头中发送cookie内容。


- cookie可以设置过期日期；sessionStorage是会话级的数据，浏览器窗口关闭即清除；localStorage是永久性的数据，一旦赋值，不管多长时间这值都是存在的，除非手动清除或者代码清除。


- cookie的存储大小受限制，一般不超过4k，而localStorage和sessionStorage的存储大小一般不超过5M，大大提高了存储的体积。


- sessionStorage不跨窗口，在另外一个窗口打开sessionStorage就不存在了，它只在当前窗口有效，而cookie和localStorage都是跨窗口的，即使浏览器的窗口关闭，这两个值还是存在的。

#### 4.使用场景：

- localStorage可以用来统计页面访问次数。


- sessionStorage可以用来统计当前页面元素的点击次数。


- cookie一般存储用户名密码相关信息，一般使用escape转义编码后存储。

####5.跨域问题

- LocalStorag是不能跨域的，也无法让子域名继承父域名的localstorage数据，

  但是，可以借助postMessage和iframe来实现跨域的数据读取。

> https://blog.csdn.net/simong_zhang/article/details/79362139

- 一级域名相同，只是二级域名不同的情况下，浏览器允许通过设置document.domain共享Cookie。也就是说，Cookie只能跨二级域名来访问，不能跨一级域名来访问。

#### 6.但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。

####7.localStorage,sessionStorage的优势与局限

localStorage,sessionStorage统称**web Storage**

**优势**

- localStorage拓展了cookie的4K限制


- localStorage会可以将第一次请求的数据直接存储到本地，这个相当于一个5M大小的针对于前端页面的数据库，相比于cookie可以节约带宽，但是这个却是只有在高版本的浏览器中才支持的
- web Storage的api接口使用更方便


- web Storage支持事件通知机制，可以将数据更新的通知发送给监听者 

  storage事件storage还提供了storage事件，当键值改变或者clear的时候，就可以触发storage事件，如下面的代码就添加了一个storage事件改变的监听：

  ```
  if(window.addEventListener){ 
  window.addEventListener("storage",handle_storage,false); 
  }
  else if(window.attachEvent)
  { 
  window.attachEvent("onstorage",handle_storage); 
  } 
  function handle_storage(e){
  if(!e){e=window.event;} 
  }
  ```

**局限**

1、浏览器的大小不统一，并且在IE8以上的IE版本才支持localStorage这个属性

2、目前所有的浏览器中都会把localStorage的值类型限定为string类型，这个在对我们日常比较常见的JSON对象类型需要一些转换（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。

3、localStorage在浏览器的隐私模式下面是不可读取的

4、localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡

5、localStorage不能被爬虫抓取到

**区别**

localStorage与sessionStorage的区别就是

- localStorage属于永久性存储，作用范围当前浏览器同源所有窗口。


- sessionStorage属于会话级存储，作用范围当前浏览器同源当前窗口。
- sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了

#### 8.**sessionStorage与页面js数据对象的区别** 

- 页面中一般的js对象的生存期仅在当前页面有效，因此刷新页面或转到另一页面这样的重新加载页面的情况，数据就不存在了 

- 而sessionStorage只要同源的同窗口中，刷新页面或进入同源的不同页面，数据始终存在，也就是说只要浏览器不关闭，数据仍然存在

  ​

####9.cookie和session的区别： 

1、cookie数据存放在客户的浏览器上，session数据放在服务器上 
2、cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑到安全应当使用session 
3、session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie 
4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie 
5、建议将登录信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中 
6、session保存在服务器，客户端不知道其中的信心；cookie保存在客户端，服务器能够知道其中的信息 
7、session中保存的是对象，cookie中保存的是字符串 
8、session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到，而cookie中如果设置了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的



### 反向代理概念

反向代理（Reverse Proxy）方式是指以代理服务器来接受Internet上的连接请求，然后将请求转发给内部网络上的服务器；并将从服务器上得到的结果返回给Internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器。

　　反向代理服务器对于客户端而言它就像是原始服务器，并且客户端不需要进行任何特别的设置。客户端向反向代理 的命名空间(name-space)中的内容发送普通请求，接着反向代理将判断向何处(原始服务器)转交请求，并将获得的内容返回给客户端，就像这些内容 原本就是它自己的一样。

##HTML中href、src区别

- href是Hypertext Reference的缩写，表示超文本引用。用来建立当前元素和文档之间的链接。常用的有：link、a。例如：

```
<link href="reset.css" rel=”stylesheet“/> 
```

浏览器会识别该文档为css文档，并行下载该文档，并且不会停止对当前文档的处理。这也是建议使用link，而不采用@import加载css的原因。

- src是source的缩写，src的内容是页面必不可少的一部分，是引入。src指向的内容会嵌入到文档中当前标签所在的位置。常用的有：img、script、iframe。例如

```
<script src="script.js"></script> 
```

当浏览器解析到该元素时，会暂停浏览器的渲染，知道该资源加载完毕。这也是将js脚本放在底部而不是头部得原因。

-  简而言之，src用于替换当前元素；href用于在当前文档和引用资源之间建立联系

# 如何理解HTML语义化？

### 为什么要语义化？语义化的好处

1、为了在没有css代码时，也能呈现很好的内容结构，代码结构，以至于达到没有编程基础的非技术人员，也能看懂一二。（其实，就是为了不穿CSS外衣，裸奔依然好看）。
2、提高用户体验，比如：title，alt用于解释名词和图片信息。
3、利于SEO，语义化能和搜索引擎建立良好的联系，有利于爬虫抓取更多的有效信息。爬虫依赖于标签来确定上下文和各个关键字的权重。
4、方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。
5、便于团队开发和维护，语义化更具可读性，如果遵循W3C标准的团队都遵循这个标准，可以减少差异化，利于规范化。

6、更符合W3C统一的规范标准，是技术趋势。

### 基于语义化，在写页面结构时，我们应该注意什么呢？

1、尽可能少的使用没有语义的div和span元素。
2、在对语义要求不明显时，技能使用div也能使用p,那就使用p，以为p默认有上下边距，可以兼容特殊终端。
3、不要使用纯样式标签，如：b、font、u等，改用css设置。
4、需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b，因为没语义），em是斜体（不用i同b）；
5、使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头标题用th，内容单元格用td；

## CSS中link和@import的区别是：

- link是HTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
- link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。@import有执行效率问题，它会打破浏览器并行加载资源，导致加载页面速度变慢。尽量不要使用@import。
- ink支持使用Javascript控制DOM去改变样式；而@import不支持。
- 因为@import只能放在css文件开头部分，所以link方式的样式的权重 高于@import的权重。同等权重的样式的优先级：行内样式、内联样式、外联样式、导入样式 

##HTML与XHTML——二者有什么区别，你觉得应该使用哪一个并说出理由。

主要区别：

-  XHTML 元素必须被正确地嵌套

-  XHTML 元素必须被关闭，空标签也必须被关闭，如 <br>必须写成 <br />

-  XHTML 标签名必须用小写字母

-  XHTML 文档必须拥有根元素

-  XHTML 文档要求给所有属性赋一个值

-  XHTML 要求所有的属性必须用引号""括起来

-  XHTML 文档需要把所有 < 、>、& 等特殊符号用编码表示

-  XHTML 文档不要在注释内容中使“--”

-  XHTML 图片必须有说明文字

-  XHTML 文档中用id属性代替name属性

  ​

## Doctype作用? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义?

1、<!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器的解析器，用什么文档类型 规范来解析这个文档。 

2、严格模式的排版和 JS 运作模式是,以该浏览器支持的最高标准运行。

3、在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

4、DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。

## CSS的盒子模型

1、CSS有两种盒子模型， IE 盒子模型、标准 W3C 盒子模型；

2、标准 W3C 盒子模型： 内容(content) + 填充(padding) + 边界(margin) + 边框(border)

3、 IE 盒子模型（怪异模式）：IE 的content部分包含了 border 和 pading; 

## 列出display的值，说明他们的作用。position的值， relative和absolute定位原点是？

1. display的值

- block 象块类型元素一样显示。


- inline 缺省值 。向行内元素类型一样显示。


- inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。


- list-item 象块类型元素一样显示，并添加样式列表标记。


- none 此元素不会被显示。


- inherit规定应该从父元素继承 display 属性的值。

    2. position的值

-   absolute 


​        生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 

-   *fixed* （老IE不支持）


​        生成绝对定位的元素，相对于浏览器窗口进行定位。 

  * relative 

​        生成相对定位的元素，相对于其正常位置进行定位。 

  * static  默认值。没有定位，元素出现在正常的流中

    （忽略 top, bottom, left, right z-index 声明）。

  * inherit 规定从父元素继承 position 属性的值。
  ###chrome extension谷歌浏览器拓展、应用
  ####Chrome扩展及应用开发（首发版）   
  http://www.ituring.com.cn/book/1421
  
  ####360极速浏览器应用开放平台
  http://open.chrome.360.cn/extension_dev/overview.html
