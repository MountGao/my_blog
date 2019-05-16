# 浏览器实现后退记忆浏览位置

## 需求简介

> 当触发浏览器的后退按钮时，用户希望页面能返回到与上次离开时分毫不差的状态，这样便可继续浏览与操作；
>
> 用户先是在列表页浏览，而后进入详情页浏览，后退返回列表页希望回到刚才的浏览位置继续浏览。



## 浏览器现状

| 浏览器                                | 行为表现                                                     |
| ------------------------------------- | ------------------------------------------------------------ |
| PC端浏览器                            | 不重新请求页面本体，图片 / js / css 等没有改变的静态资源使用缓存（有小几率重新请求页面上全部的图片资源），重新执行 js，尝试返回到上次浏览位置 |
| 移动端 chrome                         | 全部使用缓存，不发送新请求，不执行 js，准确返回到上次浏览位置（ bfcache ） |
| 移动端 safari                         | 全部使用缓存，不发送新请求，不执行 js，准确返回到上次浏览位置（ bfcache ） |
| 移动端 webkit                         | 全部使用缓存，不发送新请求，不执行 js，准确返回到上次浏览位置（ bfcache ） |
| IOS 微信浏览器/IOS FB-Messenger浏览器 | **重新请求页面本体**，图片 / js / css 等没有改变的静态资源使用缓存（有小几率重新请求页面上全部的图片资源），重新执行 js，尝试返回到上次浏览位置 |
| AOS微信浏览器/AOS FB-Messenger浏览器  | 不重新请求页面本体，图片 / js / css 等没有改变的静态资源使用缓存（有小几率重新请求页面上全部的图片资源），重新执行 js，尝试返回到上次浏览位置 |

1. 对于静态页面，在浏览器中点击后退，可以返回到离开时浏览位置。
2. 对于异步加载和带有下拉加载的页面，一些浏览器就做不到了：浏览器要重新执行 js，页面要重新渲染。
3. 移动端webkit浏览器因为具有 BFcache，页面前进时会把页面状态完整保存在内存里，后退时直接取缓存，不用做任何操作，即可完美实现“后退时返回到上次浏览位置”。

**备注**：Bfcache:（Backward/Forward Cache, BF Cache）是指浏览器在前进后退过程中，会应用更强的缓存策略，表现为DOM，window，甚至JavaScript对象被缓存，以及同步XHR被缓存。

## 解决方案

1. 做单页应用，比如Vue中的keepAlive
2. 多页面（静态页面）- 原生history.scrollRestoration，现代浏览器都是会争取帮你恢复滚动位置的
3. 多页面 - 开新的窗口，这样根本没有恢复位置的需要
4. 多页面 - 不开新窗口， js重新执行时恢复数据

Vue的单页面应用思路:

```html
<div v-if="loginSuccess">
    <!-- 不需要刷新的视图 -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 需要刷新的视图 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>

```

```javascript
//在router中配置
path: '/main',
name: '主界面',
component: Index,
children: [{
        path: "/",
        name: "机会列表",
        component: require("@/components/main-panel/AllChanceList").default,
        meta: {
            keepAlive: true //注意这里
        }
    },
    {
        path: "/analysis",
        name: "详细信息",
        component: require("@/components/main-panel/Analysis").default,
        meta: {
            keepAlive: false //注意这里
        }
    }
]
```

传统的多页面网站，上述的第四种解决方案：主要针对异步加载和有下拉刷新且后退执行js的的页面

思路：由于js要重新执行，所以可以在 js 中加两部分的逻辑：

1. 在页面前进时，将当前状态缓存下来；

2. 后退到该页面时，取出状态并手动复原。

   

#### 如何缓存数据

1、当页面发生跳转的时候缓存数据到本地

- `cookie`存储量小
- `localStorage`除非手动清除或代码清除否则会一直存在
- `sessionStorage`会在当前的窗口（选项卡）关闭后清除

**所以我们选择将数据缓存到`sessionStorage`。**

2、**如何在页面跳转之前进行这些操作？**页面不使用a链接进行跳转，而是绑定点击事件，在处理完缓存逻辑之后进行页面跳转。当然也可以在beforeunload事件里面处理（有的浏览器为了用户想要离开页面的时候不被劫持，阉割了这个事件，比如 **IOS 微信浏览器 / IOS FB-Messenger浏览器**）这些操作。

3、缓存的数据格式

```javascript
let main = {
    pageNum: 10,
    pageTotal: 50,
    scrollTop: 1130,
    timestamp: 1557904803127,
    list: [{...}]
};

sessionStorage.setItem("main", JSON.stringify(main));
```



#### 如何判断页面后退

1、页面跳转之前利用`history.replaceState`替换现在的链接，在链接上加上一些参数，然后进行跳转，点击后退按钮的时候，浏览器后退时显示的链接是你之前离开时设置的链接，接收参数进行判断是否后退，是则进行数据恢复，否则重新请求数据。

```javascript
baiduBtn.addEventListener("click", evt => {
    history.replaceState({timestamp: Date.now() }, "timestamp", "?is_back=1");
    window.location.href = "https://www.baidu.com";
})
```

2、**如果浏览器不支持`history.replaceState`怎么办？**对于不支持`history.replaceState`的浏览器，比如PHP渲染前端页面的时候往前端页面分配一个时间戳，然后页面发生跳转的时候将这个时间戳缓存到`sessionStorage`里，点击浏览器后退按钮的时候，不请求服务器并重新执行js，取出缓存的时间戳和页面上的时间戳进行对比，如果相同则进行数据恢复，否则重新请求数据。



## 参考：

1. <https://www.404forest.com/2016/08/09/%E5%BE%AE%E4%BF%A1%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%9E%E7%8E%B0%E5%90%8E%E9%80%80%E8%AE%B0%E5%BF%86%E6%B5%8F%E8%A7%88%E4%BD%8D%E7%BD%AE/>
2. https://www.zhihu.com/question/61967786

