# 2018.02.20

1.基础知识不扎实html,css

2.谷歌开发者工具不熟悉，不全面

3.http,https协议的概念，状态码，默认端口，优缺点，请求方式的区别等基础

4.开发模式

5.js内联和外嵌的区别

6.浏览器性能

7.cookie,localStorage,sessionStorage

8.display:none 和visibility:hidden的区别

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

