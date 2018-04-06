## chrome extension谷歌浏览器拓展、应用

####Chrome扩展及应用开发（首发版）   

> http://www.ituring.com.cn/book/1421

 #### 360极速浏览器应用开放平台 

>  http://open.chrome.360.cn/extension_dev/overview.html

## 扩展页面间的通信

Chrome提供了4个有关扩展页面间相互通信的接口，分别是`runtime.sendMessage`、`runtime.onMessage`、`runtime.connect`和`runtime.onConnect`。

`runtime.sendMessage`完整的方法为：

```
chrome.runtime.sendMessage(extensionId, message, options, callback)
```

`runtime.onMessage`完整的方法为：

```
chrome.runtime.onMessage.addListener(callback)
```

**Chrome存储API**

Chrome为扩展应用提供了存储API，以便将扩展中需要保存的数据写入本地磁盘。Chrome提供的存储API可以说是对`localStorage`的改进，它与`localStorage`相比有以下区别：

- 如果储存区域指定为`sync`，数据可以自动同步；
- `content_scripts`可以直接读取数据，而不必通过background页面；
- 在隐身模式下仍然可以读出之前存储的数据；
- 读写速度更快；
- 用户数据可以以对象的类型保存。

Chrome存储API提供了2种储存区域，分别是`sync`和`local`。两种储存区域的区别在于，`sync`储存的区域会根据用户当前在Chrome上登陆的Google账户自动同步数据，当无可用网络连接可用时，`sync`区域对数据的读写和local区域对数据的读写行为一致。

对于每种储存区域，Chrome又提供了5个方法，分别是`get`、`getBytesInUse`、`set`、`remove`和`clear`。

`get`方法即为读取数据，完整的方法为：

```
chrome.storage.StorageArea.get(keys, function(result){
    console.log(result);
});
```

`keys`可以是字符串、包含多个字符串的数组或对象。如果`keys`是字符串，则和`localStorage`的用法类似；如果是数组，则相当于一次读取了多个数据；如果`keys`是对象，则会先读取以这个对象属性名为键值的数据，如果这个数据不存在则返回`keys`对象的属性值（比如`keys`为`{'name':'Billy'}`，如果`name`这个值存在，就返回`name`原有的值，如果不存在就返回`Billy`）。如果`keys`为一个空数组（`[]`）或空对象（`{}`），则返回一个空列表，如果`keys`为`null`，则返回所有存储的数据。

`getBytesInUse`方法为获取一个数据或多个数据所占用的总空间，返回结果的单位是字节，完整方法为：

```
chrome.storage.StorageArea.getBytesInUse(keys, function(bytes){
    console.log(bytes);
});
```

此处的`keys`只能为`null`、字符串或包含多个字符串的数组。

`set`方法为写入数据，完整方法为：

```
chrome.storage.StorageArea.set(items, function(){
    //do something
});
```

`items`为对象类型，形式为键/值对。`items`的属性值如果是字符型、数字型和数组型，则储存的格式不会改变，但如果是对象型和函数型的，会被储存为“`{}`”，如果是日期型和正则型的，会被储存为它们的字符串形式。

`remove`方法为删除数据，完整方法为：

```
chrome.storage.StorageArea.remove(keys, function(){
    //do something
});
```

其中`keys`可以是字符串，也可以是包含多个字符串的数组。

`clear`方法为删除所有数据，完整方法为：

```
chrome.storage.StorageArea.clear(function(){
    //do something
});
```

请注意，上述五种完整方法中，`StorageArea`必须指定为`local`或`sync`中的一个。

Chrome同时还为存储API提供了一个`onChanged`事件，当存储区的数据发生改变时，这个事件会被激发。

`onChanged`的完整方法为：

```
chrome.storage.onChanged.addListener(function(changes, areaName){
    console.log('Value in '+areaName+' has been changed:');
    console.log(changes);
});
```

`callback`会接收到两个参数，第一个为`changes`，第二个是`StorageArea`。`changes`是词典对象，键为更改的属性名称，值包含两个属性，分别为`oldValue`和`newValue`；`StorageArea`为`local`或`sync`。