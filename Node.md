### nodejs body-parser不支持charset=GBK，报415错误问题

> https://blog.csdn.net/qingkong999/article/details/48441489

**解决方案**：找到项目中node_modules/body-parser/lib/urlencoded.js和json.js注释代码即可：

```
//urlencoded.js

// assert charset
var charset = getCharset(req) || 'utf-8'
// if (charset !== 'utf-8') {
//   debug('invalid charset')
//   next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
//     charset: charset,
//     type: 'charset.unsupported'
//   }))
//   return
// }
```

```
//json.js

// assert charset per RFC 7159 sec 8.1
var charset = getCharset(req) || 'utf-8'
// if (charset.substr(0, 4) !== 'utf-') {
//   debug('invalid charset')
//   next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
//     charset: charset,
//     type: 'charset.unsupported'
//   }))
//   return
// }
```