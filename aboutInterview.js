/*
统计字符串中出现次数最多的字符
**/
function strCount(str) {
	var strObj = {};
	for (var i = 0;i < str.length;i++) {
		var curr = str.charAt(i);
		if(strObj[curr]){
			strObj[curr]++;
		}else{
			strObj[curr] = 1;
		}
	}
	var max = 0,maxStr;
	for (var s in strObj) {
		if(strObj[s] > max){
			max = strObj[s];
			maxStr = s;
		}
	}
	maxStrObj = {maxStr:maxStr,max:max};
	console.log(maxStrObj);
	return maxStrObj;
}
//strCount('nujsafhuwerfhg8924fu84fcasiCBSDLKVCBsdiuvsfBLV');//{ maxStr: 'f', max: 5 }


/*
判断变量是否为String类型
**/
function isString(str) {
	return Object.prototype.toString.call(str) === "[object String]";
}
function isArray(str) {
	return Object.prototype.toString.call(str) === "[object Array]";
}
function isObject(str) {
	return Object.prototype.toString.call(str) === "[object Object]";
}
/*
判断变量是何种类型
**/
function typeOfVar(params) {
	var TYPE = Object.prototype.toString.call(params);
	TYPE = TYPE.substring(1,TYPE.length-1).split(' ')[1];
	console.log('TYPE===',TYPE);
}
//typeOfVar('123');//String
//console.log(isString(new String('1'))); //true
//console.log(isArray([1])); //true
//console.log(isObject({a:1})); //true
function forPlusOne(argument) {
	var plus;
	for (var i = 0,j = 0; i < 5 , j < 10; i++,j++) {
		plus = i + j;
		console.log(i,j);
	}
	console.log('plus=',plus); //18
	console.log('i',i,'j',j,'i+j=',i+j); // 10 10 20
}
//forPlusOne();
function forPlusTwo(argument) {
	var plus;
	for (var i = 0,j = 0; i < 5 && j < 10; i++,j++) {
		plus = i + j;
		console.log(i,j);
	}
	console.log('plus=',plus);  //8
	console.log('i',i,'j',j,'i+j=',i+j); //5 5 10
}
//forPlusTwo();
function forPlusThree(argument) {
	var plus;
	for (var i = 0,j = 0; i < 5 || j < 10; i++,j++) {
		plus = i + j;
		console.log(i,j);
	}
	console.log('plus=',plus); //18
	console.log('i',i,'j',j,'i+j=',i+j); //10 10 20
}
//forPlusThree();
/*
	函数功能：求两个数的最大公约数和最小公倍数
	
	reduce定义和用法
	reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

	reduce() 可以作为一个高阶函数，用于函数的 compose。

	注意: reduce() 对于空数组是不会执行回调函数的。
**/
//最大公约数Greatest Common Divisor(GCD)
//最小公倍数Least Common Multiple(LCM)

//函数功能：求N个数字的最大公约数和最小公倍数

/*
	求N个数字的最小公倍数
**/
var getCorrectLCM = function () {
  function gcd(a,b) {
    if (a === 0) return b;
    return gcd(b%a, a);
  }
  return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return a*b / gcd(a,b);}, 1);
};
/*
	求N个数字的最大公约数
**/
function getCorrectGCD() {
    function gcd(a,b) {
    if (a === 0) return b;
    return gcd(b%a, a);
  }
  return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return gcd(a,b);},0);
  }
console.log(getCorrectGCD(24,30,36),getCorrectLCM(24,30,36));
//闭包
var testData = 1;
(function function_name(testData) {
	console.log('argument',testData);
	testData++;
})(23)
console.log('testData===',testData);

//数组去重
function distinctArray(arr){
	if(!arr) return new Error('must have arguments');
	var res = [],obj = {};
	for (var i = 0; i < arr.length; i++) {
		if(!obj[arr[i]]){
			res.push(arr[i]);
			obj[arr[i]] = 1;
		}else{
			obj[arr[i]]++;
		}
	}
	console.log('obj===',obj);//obj=== { '0': 4, '1': 1, '2': 1, '3': 1, '4': 1, '10': 2 }
	return res;
};
console.log('distinct1===',distinctArray([0,10,2,4,3,0,0,0,1,10]));//distinct=== [ 0, 10, 2, 4, 3, 1 ]
/*
利用ES6的set

Set数据结构，它类似于数组，其成员的值都是唯一的。

利用Array.from将Set结构转换成数组
**/

function dedupe(array){
 return Array.from(new Set(array));
}
console.log('distinct2===',dedupe([0,10,2,4,3,0,0,0,1,10])) //distinct=== [ 0, 10, 2, 4, 3, 1 ]

//浅拷贝
function shallowClone(src) {
  var dist = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dist[prop] = src[prop];
    }
  }
  return dist;
}

//深拷贝
function deepCopy(src) {
    var dist = src.constructor === Array?[]:{};
    for (var key in src) {
        dist[key] = typeof src[key] === 'object' ? deepCopy(src[key]) : src[key];
    }
    return dist;
}
//var arr111 = [1,2,3,4,5];
// var arr111 = {1:1,2:2,3:3};
// var arr2222 = deepCopy(arr111);
// arr2222[2] = 22;
var arr111 = 1;
var arr2222 = deepCopy(arr111);
console.log('deepCopy===',arr111,arr2222);//{ '1': 1, '2': 2, '3': 3 } { '1': 1, '2': 22, '3': 3 }


// for (var i = 0; i < 3; i++) {
// 	setTimeout(function(argument) {
// 		console.log('var i===',i);
// 	},1000);
// }
// 3 3 3
// for (let i = 0; i < 3; i++) {
// 	setTimeout(function(argument) {
// 		console.log('let i===',i);
// 	},1000);
// }
//1 2 3
// console.log(1);
// setTimeout(function(argument) {
// 	console.log(2);
// }, 0)
// new Promise(function(resolve,reject) {
// 	console.log(3);
// 	resolve();
// 	reject();
// }).then(function(argument) {
// 	console.log(4);
// },function(argument) {
// 	console.log(5);
// })
// console.log(6);
//1 3 6 4 2
