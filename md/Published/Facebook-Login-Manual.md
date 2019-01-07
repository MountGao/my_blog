# Facebook-手动构建登录流程

实现Facebook登录的最简单，最快捷的方式是使用[JavaScript](https://developers.facebook.com/docs/howtos/login/getting-started/)，[iOS](https://developers.facebook.com/docs/facebook-login/login-flow-for-ios/)和[Android的](https://developers.facebook.com/docs/facebook-login/android)官方SDK 。建议您按照这些平台的单独指南进行操作。

但是，如果您需要在不使用SDK的情况下为应用程序实现基于浏览器的登录，例如在本机**桌面应用程序的Webview（例如Windows 8）**中，或者**使用完全服务器端代码的登录流程**，又或者**平台的SDK失效**的情况下，您可以构建使用浏览器重定向为您自己创建登录流程。

**PS：下面的登录流程是根据Facebook官方文档-[手动构建登录流程](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow)进一步细化，是在平台的SDK失效的情况下使用的。**

### 1、创建一个Facebook应用程序。

点击[穿越门](https://developers.facebook.com/apps/)，进入创建页面，点击Add a New App，填写相应的信息。

### 2、应用Products添加Facebook Login

点击进入创建好的应用，点击Products的添加按钮，将Facebook Login添加到应用

### 3、配置有效的OAuth重定向URI（Valid OAuth Redirect URIs）

进入Products的Facebook Login的Client OAuth Settings，配置有效的OAuth重定向URI（Valid OAuth Redirect URIs）

**注意：目前URL强制https，所以应用网站必须是https协议，否则无法继续下一步**

### 4、模拟用户单击以下身份验证URL以允许该应用访问用户的数据

按钮点击跳转或者a标签href跳转下面的地址

```javascript
https://www.facebook.com/v2.8/dialog/oauth?client_id=<app id>&redirect_uri=https://example.com/login-fb
```

### 5、单击`ok/accept/whatever`以授予访问权限。

获取用户信息需要授权。如果不进行授权，则无法进行下一步。

**注意：可以在Facebook的应用与网站里面看到授权过的应用及网站，可以在取消相应应用及网站的授权，之后再访问被取消授权的应用及网站，则需要重新授权。**

### 6、页面将被Facebook重定向到以下URL： 

```javascript
https://example.com/login-fb?code=<code>
```

### 7、在重定向回来的页面获取代码并调用下面的API： 

```javascript
https://graph.facebook.com/v2.8/oauth/access_token?client_id=<app id>&redirect_uri=https://example.com/login-fb&client_secret=<app secret>&code=<code>
```

返回结果示例：

```javascript
{"access_token":"<access token>","token_type":"bearer","expires_in":5183924}
```

**注意：App ID 和App Secret在应用的设置里面可以获取**

### 9、然后使用访问令牌来调用与为您的应用授予权限的用户相关的API：

```javascript
https://graph.facebook.com/v2.8/me?access_token=<access token>
```

返回结果示例：

```javascript
{"name":"MountGao","id":"<app related user id>"}
```

### 参考：

1. Manually Build a Login Flow：https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow
2. https://stackoverflow.com/questions/43478726/how-to-simply-use-facebook-login-for-my-app-without-using-the-sdks