## eval

1.定义和用法
eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
先解析字符串，然后执行字符串代码

2.语法
eval(string)

3.返回值
如果语句执行结果是一个值，则返回此值，否则返回undefined。

4.说明
eval函数接收一个参数s，如果s不是字符串，则直接返回s,否则执行s语句

如果试图覆盖 eval 属性或把 eval() 方法赋予另一个属性，并通过该属性调用它，则 ECMAScript 实现允许抛出一个 EvalError 异常。

5.抛出
如果参数中没有合法的表达式和语句，则抛出 SyntaxError 异常。
如果非法调用 eval()，则抛出 EvalError 异常。
如果传递给 eval() 的 Javascript 代码生成了一个异常，eval() 将把该异常传递给调用者。





**为什么不去使用它?**

​	1.代码注入

​	2.无法进行闭包优化

​	3.后期编译

**为什么说它是有用的?**

1. JSON.parse不可用的时候
2. 浏览器的JavaScript控制台都是用eval实现的
3. 在Webkit控制台或JSBin中执行下面的代码



## with

1）简要说明  
with 语句可以方便地用来引用某个特定对象中已有的属性，但是不能用来给对象添加属性。要给对象创建新的属性，必须明确地引用该对象。  

2）语法格式  
with(object instance)  
{  

        //代码块  
}  
有时候，我在一个程序代码中，多次需要使用某对象的属性或方法，照以前的写法，都是通过:对象.属性或者对象.方法这样的方式来分别获得该对象的属性和方法，着实有点麻烦，学习了with语句后，可以通过类似如下的方式来实现：  
with(objInstance)  
{  
       var str = 属性1;  
.....  
} 去除了多次写对象名的麻烦。





    function Lakers() {
    	this.name = "kobe bryant";
        this.age = "28";
        this.gender = "boy";
    }
    var people = new Lakers();
    with(people) {
        var str = "姓名: " + name + "<br>";
        str += "年龄：" + age + "<br>";
        str += "性别：" + gender;
        document.write(str);
    }


**为什么不去使用它?**

1.意外的运行结果,可能隐式创建全局变量

2.闭包作用域解析过多消耗

3.后期编译

ES5的严格模式可以防止隐式创建全局变量(不用var),这样能减少with的一个问题.

 严格模式也不能使用with啊.



**为什么说它是有用的?**

1.构建浏览器开发者工具

          // Chrome Developer Tools
         IS._evaluateOn =
          function(evalFunction, obj, expression) {
            IS._ensureCommandLineAPIInstalled();
            expression =
              "with (window._inspectorCommandLineAPI) {\
                with (window) { " + expression + " } }";
            return evalFunction.call(obj, expression);
        }
 2.模拟块级作用域

       //使用'with'来模拟块级作用域
       var addHandlers = function(nodes) {
          for (var i = 0; i < nodes.length; i++) {
            with ({i:i}) {
              nodes[i].onclick =
                function(e) {alert(i);}
            }
          }
        };