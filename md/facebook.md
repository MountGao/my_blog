Manually Build a Login Flow  [手动构建登录流程](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow) 

> https://stackoverflow.com/questions/43478726/how-to-simply-use-facebook-login-for-my-app-without-using-the-sdks

1. 创建一个Facebook应用程序。
2. 模拟用户单击以下身份验证URL以允许该应用访问用户的数据： `https://www.facebook.com/v2.8/dialog/oauth?client_id=<app id>&redirect_uri=http://localhost/`
3. 单击`ok/accept/whatever`以授予访问权限。
4. 您将被Facebook重定向到以下URL： `http://localhost/?code=<code>`
5. 获取代码并调用以下内容： `curl 'https://graph.facebook.com/v2.8/oauth/access_token?client_id=<app id>&redirect_uri=http://localhost&client_secret=<app secret>&code=<code>'`
6. 您得到如下结果： `{"access_token":"<access token>","token_type":"bearer","expires_in":5183924}`
7. 然后，您可以使用访问令牌来调用与为您的应用授予权限的用户相关的API。例：`curl 'https://graph.facebook.com/v2.8/me?access_token=<access token>'`
8. 响应示例： `{"name":"Alik Elzin","id":"<app related user id>"}`

*请记住添加`http://localhost/`到应用程序`Valid OAuth redirect URIs`- 在应用程序设置下。 