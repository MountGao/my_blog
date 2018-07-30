## 如何消除inline-block产生的元素间空隙



有时候排版需要，会把一些块状元素的display属性设置为inline-block 

浏览器中显示的结果 ：内联元素之间却留有空隙 

空隙产生原因：*HTML中的换行符、空格符、制表符等空白符，字体大小不为0的情况下，空白符占据一定宽度，使用inline-block会产生元素间的空隙。* 



解决方法 ：

1. 父元素的font-size设置为0，子元素的font-size设置为实际大小； 

2. 子元素设置浮动； 

3. 移除标签间的空格：把所有的子元素写在一行； 

   ```
   <div class="parent"> 
   　　<div class="child">111</div><div class="child">222</div><div class="child">333</div><div class="child">444</div>
   </div>
   ```

   

4. 移除标签间的空格：有时候子元素内容较长，所有子元素写在一行导致代码的可读性很差，这时候采用下面的写法（用HTML注释符把子元素连接起来）： 

```
<div class="parent"> 
　　　 <div class="child">111</div><!--
　　--><div class="child">222</div><!--
　　--><div class="child">333</div><!--
　　--><div class="child">444</div>
</div>
```

5. 移除标签间的空格：还可以像下面这样

   ```
   <div class="parent"> 
   　　　 <div class="child">111
   　　　 </div><div class="child">222
   　　　 </div><div class="child">333
   　　　 </div><div class="child">444</div>
   </div>
   ```

   

6. 取消标签闭合：

   ```
   <div class="parent"> 
   　　<div class="child">111
   　　<div class="child">222
   　　<div class="child">333
   　　<div class="child">444
   </div>
   ```

   