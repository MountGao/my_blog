#技术脱离业务就是耍流氓。

#原型: 

prototype 是函数中一个自带的属性我们创建的每个函数都有一个prototype(原型)属性，这个属性是一个对象，它的用途是: 可以让同一个构造函数创建的所有对象共享属性和方法。也就是说，你可以不在构造函数中定义对象的属性和方法，而是可以直接将这些信息添加到原型对象中。

```
function Box() {}    //声明一个构造函数
Box.prototype.name = 'zhang';	//在原型里添加属性
Box.prototype.age = 100;
Box.prototype.show = function () {	//在原型里添加方法
	return this.name + this.age;
};

比较一下原型内的方法地址是否一致

var box1 = new Box();
var box2 = new Box();
alert(box1.show == box2.show); //true，方法的引用地址一致

```



###constructor属性:

是原型对象的一个属性, 指向原型对象所属的构造函数;

```
console.log(Box.prototype.constructor === Box);
```



###__proto__属性:

是实例对象指向原型对象的一个指针，它的作用就是指向构造函数的原型。IE 浏览器在脚本访问__proto__会不能识别，火狐和谷歌浏览器及其他某些浏览器均能识别。

```
console.log(box1.proto);   //[object Object]console.log(box1.proto === Box.prototype);
```



###isPrototypeOf(): 

判断一个对象是否指向了该构造函数的原型对象

```
console.log(Box.prototype.isPrototypeOf(box)); //true, 实例对象都会指向
```



##原型模式的执行流程：

1.先查找实例对象里的属性或方法，如果有，立刻返回；2.如果实例对象里没有，则去它的原型对象里找，如果有就返回；

```
function Box() {}
Box.prototype.name = "张三";

var box1 = new Box();
box1.name = "李四";
console.log(box1.name); //李四, 找到了实例对象的值
console.log(box1.__proto__.name); //张三

```

hasOwnProperty(): 

判断实例对象中是否存在该属性

```
alert(box.hasOwnProperty('name'));  //实例对象里有返回true，否则返回falsein操作符: 
```

判断属性是否存在于该实例对象或者该对象的原型中

```
alert('name' in box);	//true，存在实例中或原型中
```

如果要判断某属性是否存在原型中, 则可以根据in操作符和hasOwnProperty()来判断

```
function isInPrototype(obj, name){     
	return (name in obj) && (!obj.hasOwnProperty(name));
}
var box = new Box();
console.log(isInPrototype(person1, "name")); //true，如果原型有,返回true
```

使用构造函数创建原型对象和使用字面量创建对象在使用上基本相同，但还是有一些区别，字面量创建的方式使用constructor属性不会指向实例对象，而会指向 Object。

```
var box = new Box();alert(box.constructor == Box); //字面量方式，返回 false，否则，truealert(box.constructor == Object);  //字面量方式，返回 true，否则，false如果想让字面量方式的constructor指向实例对象，那么可以这么做：
Box.prototype = {     constructor : Box  //直接强制指向即可};
```



##原型模式创建对象也有自己的缺点:

1, 它省略了构造函数传参初始化这一过程，带来的缺点就是初始化的值都是一致的。2, 原型对象共享的属性或者方法是公用的, 在一个对象修改后,会影响其他对象对该属性或方法的使用。

```
function Box() {};
Box.prototype = {
	constructor : Box, 
	name : '张三',
	age : 100,
	family : ['父亲', '母亲', '妹妹'],   //添加了一个数组属性 
	run : function () {
		return this.name + this.age + this.family;
	}
};
var box1 = new Box();
box1.family.push('哥哥');	   //通过box1给原型中的family数组添加了一个元素'哥哥'
alert(box1.run());
var box2 = new Box();
alert(box2.run());   //共享带来的麻烦，也有'哥哥'了

```



##构造函数+原型模式:

使用构造函数添加私有属性和方法,

 使用原型添加共享的属性和方法

```
function Box(name, age) {
     this.name = name;
     this.age = age;
     this.family = ["爸爸", "妈妈"];
}
Box.prototype = {
     constructor: Box,
     show: function() {
          console.log("姓名:" + this.name + ", 年龄:" + this.age);
     }
}

上面创建不同的对象只能共享show方法; 
这种混合模式很好的解决了传参和引用类型共享的问题.

```



## 优点: 

1, 实例对象都有自己的独有属性

2, 同时共享了原型中的方法,最大限度的节省了内存

3, 支持向构造函数传递参数



#继承:

是面向对象编程(OOP)语言的一个非常重要的功能。继承可以使用现有类的所有属性和方法，并在无需重新编写原来的类的情况下对这些属性和方法进行扩展。

##继承的特点:

1, 子类拥有父类的属性和方法；

2, 子类可以有自己新的属性和方法；

3, 子类可以重写父类的方法

##继承的优点

1, 代码复用：子类可以继承父类的属性和方法

2, 更灵活：子类可以追加或修改属性和方法



通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。

###继承的过程，就是从一般到特殊的过程.

例如，有一个Person类, Employee是员工类，Manager是管理者类，Employee员工类可以继承Person类,因为员工也是人, Manager管理者类可以继承Employee员工类, 因为管理者也是员工。再比如有一个Animal动物类, Monkey是猴子类, Dog是狗类, 那么Monkey和Dog都是动物,都可以继承Animal动物类的属性和方法,



###JS实现继承的方式依靠原型链完成

```
function Person() {	    //Person构造函数(Person类)
       this.name = 'Zhang';
}
function Employee() {	    //Employee构造函数(Employee类)
       this.age = 100;
}
Employee.prototype = new Person();  //Employee继承了 Person，通过原型，形成链条

var employee= new Employee();     //创建Employee对象, 得到被继承的属性
alert(employee.age);
alert(employee.name);	

```

```
function Manager() {	//Manager构造函数(Manager类)
       this.sex = '男';
}
Manager.prototype = new Employee();  //Manager类继承Employee类

var manager= new Manager();   //创建manager对象
alert(manager.name);	//继承了 Employee和 Person
alert(manager.age);	
alert(manager.sex);	

以上原型链继承还缺少一环，那就是 Obejct，所有的构造函数都继承自 Obejct。而继承Object是自动完成的，不需要我们手动继承。

//以下四个打印都是true
console.log(manager instanceof Manager);
console.log(manager instanceof Employee);
console.log(manager instanceof Person);
console.log(manager instanceof Object);
```



##原型链的问题

创建子类的实例对象时，无法向父类的构造函数中传递参数 为了解决这个问题，我们采用一种叫借用构造函数的技术，或者称为对象冒充的技术来解决对象冒充: 使用构造函数调用call()或者apply()



```
//父类
function Person(name, age){
	this.name = name;
	this.age = age;
}		
//子类
function Employee(name, age){
	Person.call(this, name, age); //对象冒充
	//Person.apply(this, [name, age]);
}
			
var employee = new Employee("zhangsan", 200);
console.log(employee.age); 
console.log(employee.name);
			
employee.name = "lisi";
console.log(employee.name);

```

```
组合继承: 原型链+借用构造函数(对象冒充)的模式
//父类
function Person(name, age){
     this.name = name;
     this.age = age;
};
Person.prototype.run = function(){ 
     return this.name + this.age;
};
//子类
function Employee(name, age){				
     Person.call(this, name, age);
};
Employee.prototype = new Person(); //原型链继承Person原型中的方法
var employee = new Employee("zhangsan", 100);
var employee2 = new Employee("lisi", 200);
console.log(employee.run());
console.log(employee2.run());

```

