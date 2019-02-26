# 瀑布流插件(Wookmark)的使用及注意事项

*序：对一个开发来说，最难过的是不在于为自己bug主动背锅，而是为别人背锅，特别是前任开发的锅。本文记录一下神前任开发隐藏了一年多将近两年的时间的bug，还望读者珍重。*

## Wookmark

瀑布流布局非常适合大量图片的展示，一改过去裁剪图片尺寸统一的排版，每张图片都能完全展示，并错落有致，让人眼前一亮。这是一个用于布局动态网格元素的插件。

### 使用方法

**HTML结构**

```html
<div id="container">
    <header><h1>jQuery Wookmark Plug-in Example</h1></header>
    <div id="main">
      <ul id="tiles">
        <li><img src="/sample-images/image_1.jpg" width="200" height="283"><p>1</p></li>
        <li><img src="/sample-images/image_2.jpg" width="200" height="300"><p>2</p></li>
        ...
        <li><img src="/sample-images/image_7.jpg" width="200" height="200"><p>7</p></li>
      </ul>
    </div>
    <footer></footer>
  </div>
```

**加载 Javascript**

```html
 <!-- 引入jQuery库 -->
  <script src="../js/jquery.min.js"></script>

  <!-- 引入imagesLoaded插件 -->
  <script src="../js/jquery.imagesloaded.js"></script>

  <!-- 引入wookmark插件 -->
  <script src="../js.wookmark.js"></script>
```

**Javascript 逻辑**

```javascript
<!-- 页面加载完毕后，初始化插件-->
    (function ($){
      var $tiles = $('#tiles'),
          $handler = $('li', $tiles),
          $main = $('#main'),
          $window = $(window),
          $document = $(document),
          page = 1,
          isLoading = false,
          apiURL = 'http://www.wookmark.com/api/json/popular';
          options = {
            autoResize: true, // 浏览器窗口大小变化时进行重新布局。
            container: $main, // 父容器
            offset: 20, // 图片与图片之间的间距
            itemWidth: 210 // 列表项目的宽度
          };
    
      /**
       * 滚动监听
       */
      function onScroll() {
        // 是否到底部（这里是判断距离底部还有100px开始载入数据，可根据实际情况进行调整）
 
          /**
           * 特别注意
           * 修复苹果手机上的bug
           */
        var winHeight = window.innerHeight ? window.innerHeight : $window.height(), 
            closeToBottom = ($window.scrollTop() + winHeight > $document.height() - 100);

        if (closeToBottom) {
          loadData();
        }
      };

      /**
       * 更新布局
       */
      function applyLayout() {
        //表示图片资源全部加载完毕。
        $tiles.imagesLoaded(function() {
          /**
           * 特别注意，bug出处
           * 清除原来的布局
           * 如果你在前面已经绑定了事件，在重新执行之前，先清除一下。
           * 不然的话，会造成向上滚动的时候，滚动条跳动，突然跳到某个位置的后果
           */
          if ($handler && $handler.wookmarkInstance) {
            $handler.wookmarkInstance.clear();
          }
          /**
           * 特别注意
           * 创建新的wookmark对象
           * wookmark同样也可以配合ajax来实现动态加载数据，不过新增之后需要重新执行一次。
           * 不然的话，会造成布局重叠的后果
           */
          $handler = $('li', $tiles);
          $handler.wookmark(options);
          /**
           * 特别注意，bug出处
           * 重新打开可请求的开关
           * 官网的例子直接将这一步骤放在onLoadData函数内处理，这样有些情况下会产生连续请求的bug
           * 连续请求指的是连续请求好几页的数据，失去了滚动加载的意义
           */
          isLoading = false;
        });
      }
    
    /**
       * 请求数据
       */
      function loadData() {
        isLoading = true;
        $('#loaderCircle').show();

        $.ajax({
          url: apiURL,
          dataType: 'jsonp',
          data: {page: page}, //请求参数
          success: onLoadData
        });
      };
    
    /**
       * 处理数据
       */
      function onLoadData(data) {
        $('#loaderCircle').hide();

        // 增加页码
        page++;

        // 拼接数据
        var html = '';
        var i=0, length=data.length, image;
        for(; i<length; i++) {
          image = data[i];
          html += '<li>';
          
          html += '<img src="'+image.preview+'" width="200" height="'+Math.round(image.height/image.width*200)+'">';

          html += '<p>'+image.title+'</p>';

          html += '</li>';
        }

        // 将拼接后的结构添加到页面
        $('#tiles').append(html);

        // 调用更新布局函数
        applyLayout();
      };

      // 绑定滚动事件
      $window.bind('scroll.wookmark', onScroll);
    
      // 第一次加载数据
      loadData();
    })(jQuery);
```



**注意事项：**

项目中的 img 元素的 width 和 height 属性需要写，否则定位会不准确。（可以用 JavaScript 实时获取图片的宽高，但图片数量过多时，这将是一件不靠谱的事情，如果你执意要这么做，可以参考这个 [Demo](http://code.ciaoca.com/jquery/wookmark/demo/load-images.html)）

**P.S. 请注意以上代码中表示有特别注意的地方**



**option参数说明：**

| 名称                | 默认值    | 说明                                                         |
| ------------------- | --------- | ------------------------------------------------------------ |
| container           | $('body') | 父容器。自定义时需要给父容器设置 CSS 属性 "position: relative"。 |
| align               | 'center'  | 对齐方向，可设置为："left", "right", "center"。              |
| direction           | undefined | 排序方向。可设置为："left"（从左至右）, "right"（从右至左）若不设置，则判断 align 为 "right" 时，direction 为 "right"，否则默认为 "left"。 |
| autoResize          | false     | 是否在浏览器窗口大小变化时进行重新布局。                     |
| resizeDelay         | 50        | 检测自动重新布局的间隔时间 (ms)。                            |
| itemWidth           | 0         | 列表项目的宽度 (px 或 %)。太小的话图片与图片会叠加。         |
| flexibleWidth       | 0         | 列表项目自适应的最大宽度。该项设置时，itemWidth 的值作为列表项目的最小宽度。 |
| offset              | 2         | 列表项目的间距 (px)，横向纵向相同。                          |
| verticalOffset      | undefined | 列表项目纵向的间距 (px)，与 offset 配合即可分别设置横向与纵向的间距。 |
| outerOffset         | 0         | 外部间距，与父容器顶部的间距。                               |
| ignoreInactiveItems | true      | 是否隐藏被过滤的项目。                                       |
| fillEmptySpace      | false     | 是否填充底部占位符。占位符的 class 为 "wookmark-placeholder"。 |
| comparator          | null      | 自定义排序方法。                                             |
| possibleFilters     | []        |                                                              |
| onLayoutChanged     | undefined | 布局变化时触发的函数。                                       |

## 参考：

1. https://github.com/germanysbestkeptsecret/Wookmark-jQuery/blob/master/example-api/index.html
2. http://code.ciaoca.com/jquery/wookmark/
3. https://ask.csdn.net/questions/161514
4. https://www.cnblogs.com/spring_wang/p/4112862.html