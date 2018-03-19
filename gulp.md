> http://www.ydcss.com/
>
> http://www.ydcss.com/archives/18
>
> https://www.jianshu.com/p/525f1e024915

## 关于 node 环境升级到 v8^ 以上，node-sass 报错的解决方法

```

Module build failed: Error: Missing binding /Users/fungleo/Sites/MyWork/vuedemo2/node_modules/node-sass/vendor/darwin-x64-57/binding.node
Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 8.x

Found bindings for the following environments:
  - OS X 64-bit with Node.js 6.x

This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass --force` to build the binding for your current environment.
    at module.exports (/Users/fungleo/Sites/MyWork/vuedemo2/node_modules/node-sass/lib/binding.js:15:13)
    at Object.<anonymous> (/Users/fungleo/Sites/MyWork/vuedemo2/node_modules/node-sass/lib/index.js:14:35)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Module.require (module.js:579:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/fungleo/Sites/MyWork/vuedemo2/node_modules/sass-loader/lib/loader.js:3:14)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Module.require (module.js:579:17)

 @ ./~/vue-style-loader!./~/css-loader?{"minimize":false,"sourceMap":false}!./~/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2d1bdf0c","scoped":false,"hasInlineConfig":false}!./~/sass-loader/lib/loader.js?{"sourceMap":false}!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Hello.vue 4:14-394 13:3-17:5 14:22-402
 @ ./src/components/Hello.vue
 @ ./src/router/index.js
 @ ./src/main.js
 @ multi ./build/dev-client ./src/main.js

> Listening at http://localhost:8080
```

这段代码就是告诉我们，`node-sass` 不兼容 `node v8` 的版本。那就很好解决了,在当前项目下面执行

```
npm i node-sass -D
```

> http://blog.csdn.net/fungleo/article/details/78519747

如果还不继续报错的话，把node-sass最新版本里的vendor里的binding.node文件，复制到之前的版本里替换之前版本的binding.node文件

然后项目就恢复正常了。

当项目出错之后，不要着急，仔细看下报错代码，实在不行用翻译工具翻译一下。一般来说，是很快能够找到解决方法的。