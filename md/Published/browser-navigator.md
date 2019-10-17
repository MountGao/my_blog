# 浏览器检测

> 只读属性 **Window.navigator** 会返回一个 [`Navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) 对象的引用，可以用于请求运行当前代码的应用程序的相关信息。

 **Last updated by:** MountGaoJiang, 2019/09/27 17:36 

全球各大主流浏览器

```javascript
var sBrowser, sUsrAg = navigator.userAgent;

// The order matters here, and this may report false positives for unlisted browsers.

if (sUsrAg.includes("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
  sBrowser = "Samsung Internet";
  // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
  sBrowser = "Opera";
  // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
  // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
  // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
  // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
  sBrowser = "unknown";
}

```

Facebook App 内置浏览器

```javascript
function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}
```

微信内置浏览器

```javascript
function isWXApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("MicroMessenger") > -1);
}
```

IOS系统Chrome

```javascript
function isCriOS() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("Safari") > -1) && 
        	!(ua.indexOf("Chrome") > -1) && 
        	(ua.indexOf("CriOS") > -1);
}
```

IOS系统FireFox

```javascript
function isFxiOS() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("Safari") > -1) && 
        	!(ua.indexOf("Firefox") > -1) && 
        	(ua.indexOf("FxiOS") > -1);
}
```

Android系统

```javascript
function isAOS() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("Android") > -1) || (ua.indexOf("Linux") > -1);
}
```

移动端浏览器

```javascript

function isMobile() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return 			/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(ua);
}
```

华为手机内置浏览器

```javascript
function isHUAWEI() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("HUAWEI") > -1)；
}
```

国内主流浏览器

```javascript
// UC
function isUCBrowser() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("UCBrowser") > -1)；
}

// QQ
function isMQQBrowser() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("MQQBrowser") > -1)；
}

```

## 参考：

1. https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator