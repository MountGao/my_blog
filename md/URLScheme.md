# URL Scheme

利用外部链接打开APP并传递一些附带信息是现在很多APP都有的功能，我在这把这部分的知识记录一下。

1、什么是URL Scheme？

android中的scheme是一种页面内跳转协议，是一种非常好的机制，通过自己在AndroidManifest.xml文件里面定义自己的scheme协议，可以非常方便的跳转到App的各个页面。通过scheme协议，甚至可以跳转到App的某个页面，可以通过直接输入URL进行跳转，也可以把URL写进HTML页面进行跳转。

2、实现的大致流程

我们手机的APP可以向操作系统注册一个URL Scheme，该scheme用于从浏览器或其他应用中启动本应用。

3、URL Scheme的协议格式

tlqp://my.app/openwith?roomID=123456

scheme:tlqp 代表Scheme的协议名称（必须）

host:my.app 代表host

path:openwith 代表path

query:roomID=123456 代表URL传递的值
--------------------- 
作者：活在阳光下 
来源：CSDN 
原文：https://blog.csdn.net/u013517637/article/details/55251421 
版权声明：本文为博主原创文章，转载请附上博文链接！



IOS Universal Link 

Android APP Link



### 微信浏览器使用自己app的 url scheme 满足两个条件 

1，使用腾讯开放平台的微下载服务 

2，该应用在平台必须是S级应用