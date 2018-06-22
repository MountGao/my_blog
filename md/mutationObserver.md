#  Mutation Observer

> MutationObserver翻译过来就是变动观察器，字面上就可以理解这是用来观察Node（节点）变化的。
>
> MutationObserver是在DOM4规范中定义的，它的前身是MutationEvent事件，该事件最初在DOM2事件规范中介绍，到来了DOM3事件规范中正式定义，但是由于该事件存在兼容性以及性能上的问题被弃用。

> MutationObserver在IE中最低要就是IE11，如果你的网站不需要支持IE或者只支持到IE11，那么你可以放心的使用MutationObserver。



**MutationObserver**是一个构造器，接受一个callback参数，用来处理节点变化的回调函数，返回两个参数，mutations：节点变化记录列表（sequence<MutationRecord>），observer：构造MutationObserver对象。

```
var observe = new MutationObserver(function(mutations,observer){
})
```

MutationObserver对象有三个方法，分别如下：

1. **observe**：设置观察目标，接受两个参数，target：观察目标，options：通过对象成员来设置观察选项
2. **disconnect**：阻止观察者观察任何改变，当你不再想观察目标节点的变化时可以调用observe.disconnect()方法来取消观察。
3. **takeRecords**：清空记录队列并返回里面的内容。它的一个作用是，比如你对一个节点的操作你不想马上就做出反应，过段时间在显示改变了节点的内容。

```
observe.observe(target,{ childList: true});

observe.discount();
//停止对target的观察。

var record = observe.takeRecords();              
//此时record保存了改变记录列表  
//当调用takeRecords方法时，记录队列被清空因此不会触发MutationObserver中的callback回调方法。

```

关于observe方法中options参数有已下几个选项：

1. **childList**：设置true，表示观察目标子节点的变化，比如添加或者删除目标子节点，不包括修改子节点以及子节点后代的变化
2. **attributes**：设置true，表示观察目标属性的改变
3. **characterData**：设置true，表示观察目标数据的改变
4. **subtree**：设置为true，目标以及目标的后代改变都会观察
5. **attributeOldValue**：如果属性为true或者省略，则相当于设置为true，表示需要记录改变前的目标属性值，设置了attributeOldValue可以省略attributes设置
6. **characterDataOldValue**：如果characterData为true或省略，则相当于设置为true,表示需要记录改变之前的目标数据，设置了characterDataOldValue可以省略characterData设置
7. **attributeFilter**：如果不是所有的属性改变都需要被观察，并且attributes设置为true或者被忽略，那么设置一个需要观察的属性本地名称（不需要命名空间）的列表





**MutationRecord**
变动记录中的属性如下：

1. **type**：如果是属性变化，返回"attributes"，如果是一个CharacterData节点（Text节点、Comment节点）变化，返回"characterData"，节点树变化返回"childList"
2. **target**：返回影响改变的节点
3. **addedNodes**：返回添加的节点列表
4. **removedNodes**：返回删除的节点列表
5. **previousSibling**：返回分别添加或删除的节点的上一个兄弟节点，否则返回null
6. **nextSibling**：返回分别添加或删除的节点的下一个兄弟节点，否则返回null
7. **attributeName**：返回已更改属性的本地名称，否则返回null
8. **attributeNamespace**：返回已更改属性的名称空间，否则返回null
9. **oldValue**：返回值取决于type。对于"attributes"，它是更改之前的属性的值。对于"characterData"，它是改变之前节点的数据。对于"childList"，它是null

其中 **type**、**target**这两个属性不管是哪种观察方式都会有返回值，其他属性返回值与观察方式有关，比如只有当attributeOldValue或者characterDataOldValue为true时oldValue才有返回值，只有改变属性时，attributeName才有返回值等。