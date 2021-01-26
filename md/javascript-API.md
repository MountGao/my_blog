# 常用JavaScript原生API兼容性



### Symbol (Non-IE)



### Array

| **Feature**                                                  | Chrome | Edge   | Firefox | Internet Explorer | Opera | Safari | WebView Android | Chrome Android | Firefox Android | Opera Android | iOS Safari | Samsung Internet |
| :----------------------------------------------------------- | ------ | ------ | ------- | ----------------- | ----- | ------ | --------------- | -------------- | --------------- | ------------- | ---------- | ---------------- |
| [`copyWithin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) | 45     | 12     | 32      | **No**            | 32    | 9      | 45              | 45             | 32              | 32            | 9          | 5.0              |
| [`entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries) | 38     | 12     | 28      | **No**            | 25    | 8      | 38              | 38             | 28              | 25            | 8          | 3.0              |
| [`every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | 1      | 12     | 1.5     | **9**             | 9.5   | 3      | ≤37             | 18             | 4               | 10.1          | 1          | 1.0              |
| [`fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) | 45     | 12     | 31      | **No**            | 32    | 8      | 45              | 45             | 31              | 32            | 8          | 5.0              |
| [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | 1      | 12     | 1.5     | **9**             | 9.5   | 3      | ≤37             | 18             | 4               | 10.1          | 1          | 1.0              |
| [`find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | 45     | 12     | 25      | **No**            | 32    | 8      | 45              | 45             | 4               | 32            | 8          | 5.0              |
| [`findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) | 45     | 12     | 25      | **No**            | 32    | 8      | 45              | 45             | 4               | 32            | 8          | 5.0              |
| [`flat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) | 69     | **79** | 62      | **No**            | 56    | 12     | 69              | 69             | 62              | 48            | 12         | 10.0             |
| [`flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) | 69     | **79** | 62      | **No**            | 56    | 12     | 69              | 69             | 62              | 48            | 12         | 10.0             |
| [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | 1      | 12     | 1.5     | **9**             | 9.5   | 3      | ≤37             | 18             | 4               | 10.1          | 1          | 1.0              |
| [`from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) | 45     | 12     | 32      | **No**            | 32    | 9      | 45              | 45             | 32              | 32            | 9          | 5.0              |
| [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) | 47     | 14     | 43      | **No**            | 34    | 9      | 47              | 47             | 43              | 34            | 9          | 5.0              |
| [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) | 1      | 12     | 1.5     | **9**             | 9.5   | 3      | ≤37             | 18             | 4               | 10.1          | 1          | 1.0              |
| [`isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | 5      | 12     | 4       | **9**             | 10.5  | 5      | 1               | 18             | 4               | 14            | 5          | 1.0              |
| [`keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) | 38     | 12     | 28      | **No**            | 25    | 8      | 38              | 38             | 28              | 25            | 8          | 3.0              |
| [`lastIndexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | 1      | 12     | 1.5     | **9**             | 9.5   | 3      | ≤37             | 18             | 4               | 10.1          | 1          | 1.0              |
| [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | 1      | 12     | 1.5     | **9**             | 9.5   | 3      | ≤37             | 18             | 4               | 10.1          | 1          | 1.0              |
| [`of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of) | 45     | 12     | 25      | **No**            | 26    | 9      | 39              | 39             | 25              | 26            | 9          | 4.0              |
| [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) | 3      | 12     | 3       | **9**             | 10.5  | 5      | ≤37             | 18             | 4               | 14            | 4          | 1.0              |
| [`reduceRight`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) | 3      | 12     | 3       | **9**             | 10.5  | 5      | ≤37             | 18             | 4               | 14            | 4          | 1.0              |
| [`some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) | 1      | 12     | 1.5     | **9**             | 9.5   | 3      | ≤37             | 18             | 4               | 10.1          | 1          | 1.0              |
| Optional `locales` parameter                                 | 24     | 79     | 52      | **No**            | 15    | 6.1    | ≤37             | 25             | 56              | 14            | 6.1        | 2.0              |
| Optional `options` parameter                                 | 24     | 79     | 52      | **No**            | 15    | 6.1    | ≤37             | 25             | 56              | 14            | 6.1        | 2.0              |
| [`values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values) | 66     | 12     | 60      | **No**            | 53    | 9      | 66              | 66             | 60              | 47            | 9          | 9.0              |

### Array可用API(IE9+)

1. Array.forEach 
2. Array.map
3. Array.every
4. Array.some
5. Array.filter
6. Array.reduce
7. Array.indexOf
8. Array.isArray
9. **Array.from 用扩展运算符来代替**



### String

| **Feature**                                                  | Chrome | Edge   | Firefox | Internet Explorer | Opera  | Safari | WebView Android | Chrome Android | Firefox Android | Opera Android | iOS Safari | Samsung Internet |
| :----------------------------------------------------------- | ------ | ------ | ------- | ----------------- | ------ | ------ | --------------- | -------------- | --------------- | ------------- | ---------- | ---------------- |
| [`codePointAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) | 41     | 12     | 29      | **No**            | 28     | 10     | 41              | 41             | 29              | 28            | 10         | 4.0              |
| [`endsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) | 41     | 12     | 17      | **No**            | 28     | 9      | ≤37             | 36             | 17              | 24            | 9          | 3.0              |
| [`fromCodePoint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint) | 41     | 12     | 29      | **No**            | 28     | 10     | 41              | 41             | 29              | 28            | 10         | 4.0              |
| [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) | 41     | 12     | 40      | **No**            | 28     | 9      | 41              | 41             | 40              | 28            | 9          | 4.0              |
| `localeCompare.locales`                                      | 24     | 12     | 29      | **11**            | 15     | 10     | **No**          | 26             | 56              | **No**        | 10         | 1.5              |
| `localeCompare.options`                                      | 24     | 12     | 29      | **11**            | 15     | 10     | **No**          | 26             | 56              | **No**        | 10         | 1.5              |
| [`matchAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) | 73     | **79** | 67      | **No**            | 60     | 13     | 73              | 73             | 67              | 52            | 13         | **No**           |
| [`normalize`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) | 34     | 12     | 31      | **No**            | 21     | 10     | **No**          | 34             | 31              | 21            | 10         | 2.0              |
| [`padEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) | 57     | 15     | 48      | **No**            | 44     | 10     | 57              | 57             | 48              | 43            | 10         | 7.0              |
| [`padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) | 57     | 15     | 48      | **No**            | 44     | 10     | 57              | 57             | 48              | 43            | 10         | 7.0              |
| [`raw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw) | 41     | 12     | 34      | **No**            | **No** | 10     | **No**          | 41             | 34              | No            | 10         | 4.0              |
| [`repeat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) | 41     | 12     | 24      | **No**            | 28     | 9      | 41              | 36             | 24              | 28            | 9          | 3.0              |
| [`replaceAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) | **85** | **85** | 77      | **No**            | 71     | 13.1   | 85              | 85             | 79              | 60            | 13.4       | **No**           |
| [`startsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) | 41     | 12     | 17      | **No**            | 28     | 9      | ≤37             | 36             | 17              | 24            | 9          | 3.0              |
| [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) | 4      | 12     | 3.5     | **10**            | 10.5   | 5      | ≤37             | 18             | 4               | 11            | 5          | 1.0              |
| [`trimEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)/trimRight | 66     | 12     | 61      | **No**            | 53     | 12     | 66              | 66             | 61              | 47            | 12         | 9.0              |
| [`trimStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)/trimLeft | 66     | 12     | 61      | **No**            | 53     | 12     | 66              | 66             | 61              | 47            | 12         | 9.0              |

### String可用API(IE9+)

1. String.trim



### Number

| **Feature**                                                  | Chrome | Edge | Firefox | Internet Explorer | Opera | Safari | WebView Android | Chrome Android | Firefox Android | Opera Android | iOS Safari | Samsung Internet |
| :----------------------------------------------------------- | ------ | ---- | ------- | ----------------- | ----- | ------ | --------------- | -------------- | --------------- | ------------- | ---------- | ---------------- |
| [`EPSILON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) | 34     | 12   | 25      | **No**            | 21    | 9      | ≤37             | 34             | 25              | 21            | 9          | 2.0              |
| [`MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) | 34     | 12   | 31      | **No**            | 21    | 9      | ≤37             | 34             | 31              | 21            | 9          | 2.0              |
| [`MIN_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) | 34     | 12   | 31      | **No**            | 21    | 9      | ≤37             | 34             | 31              | 21            | 9          | 2.0              |
| [`isFinite`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) | 19     | 12   | 16      | **No**            | 15    | 9      | ≤37             | 25             | 16              | 14            | 9          | 1.5              |
| [`isInteger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) | 34     | 12   | 16      | **No**            | 21    | 9      | ≤37             | 34             | 16              | 21            | 9          | 2.0              |
| [`isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) | 25     | 12   | 15      | **No**            | 15    | 9      | ≤37             | 25             | 15              | 14            | 9          | 1.5              |
| [`isSafeInteger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) | 34     | 12   | 32      | **No**            | 21    | 10     | ≤37             | 34             | 32              | 21            | 10         | 2.0              |
| [`parseFloat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) | 34     | 12   | 25      | **No**            | 21    | 9      | ≤37             | 34             | 25              | 21            | 9          | 2.0              |
| [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) | 34     | 12   | 25      | **No**            | 21    | 9      | ≤37             | 34             | 25              | 21            | 9          | 2.0              |
| `toLocaleString.locales`                                     | 24     | 12   | 29      | **11**            | 15    | 10     | 4.4             | 26             | 56              | 14            | 10         | 1.5              |
| `toLocaleString.options`                                     | 24     | 12   | 29      | **11**            | 15    | 10     | 4.4             | 26             | 56              | 14            | 10         | 1.5              |



### Object

| **Feature**                                                  | Chrome | Edge   | Firefox | Internet Explorer | Opera | Safari | WebView Android | Chrome Android | Firefox Android | Opera Android | iOS Safari | Samsung Internet |
| :----------------------------------------------------------- | ------ | ------ | ------- | ----------------- | ----- | ------ | --------------- | -------------- | --------------- | ------------- | ---------- | ---------------- |
| [`assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) | 45     | 12     | 34      | **No**            | 32    | 9      | 45              | 45             | 34              | 32            | 9          | 5.0              |
| [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) | 1      | 12     | 1       | **8**             | 4     | 1      | 1               | 18             | 4               | 10.1          | 1          | 1.0              |
| [`create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) | 5      | 12     | 4       | **9**             | 11.6  | 5      | 1               | 18             | 4               | 12            | 5          | 1.0              |
| [`defineProperties`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) | 5      | 12     | 4       | **9**             | 11.6  | 5      | 1               | 18             | 4               | 12            | 5          | 1.0              |
| [`defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) | 5      | 12     | 4       | **9**             | 11.6  | 5.1    | 1               | 18             | 4               | 12            | 6          | 1.0              |
| [`entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | 54     | 14     | 47      | **No**            | 41    | 10.1   | 54              | 54             | 47              | 41            | 10.3       | 6.0              |
| [`freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) | 6      | 12     | 4       | **9**             | 12    | 5.1    | 1               | 18             | 4               | 12            | 6          | 1.0              |
| [`fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) | **73** | **79** | 63      | **No**            | 60    | 12.1   | 73              | 73             | 63              | **No**        | 12.2       | **No**           |
| [`getOwnPropertyDescriptor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) | 5      | 12     | 4       | **9**             | 12    | 5      | 1               | 18             | 4               | 12            | 5          | 1.0              |
| [`getOwnPropertyDescriptors`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) | 54     | 15     | 50      | **No**            | 41    | 10     | 54              | 54             | 50              | 41            | 10         | 6.0              |
| [`getOwnPropertyNames`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) | 5      | 12     | 4       | **9**             | 12    | 5      | 1               | 18             | 4               | 12            | 5          | 1.0              |
| [`getOwnPropertySymbols`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) | 38     | 12     | 36      | **No**            | 25    | 9      | 38              | 38             | 36              | 25            | 9          | 3.0              |
| [`getPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) | 5      | 12     | 3.5     | **9**             | 12.1  | 5      | 1               | 18             | 4               | 12.1          | 5          | 1.0              |
| [`is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) | 30     | 12     | 22      | **No**            | 17    | 9      | ≤37             | 30             | 22              | 18            | 9          | 2.0              |
| [`isExtensible`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) | 6      | 12     | 4       | **9**             | 12    | 5.1    | 1               | 18             | 4               | 12            | 6          | 1.0              |
| [`isFrozen`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen) | 6      | 12     | 4       | **9**             | 12    | 5.1    | 1               | 18             | 4               | 12            | 6          | 1.0              |
| [`isPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) | 1      | 12     | 1       | **9**             | 4     | 3      | 1               | 18             | 4               | 10.1          | 1          | 1.0              |
| [`isSealed`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) | 6      | 12     | 4       | **9**             | 12    | 5.1    | 1               | 18             | 4               | 12            | 6          | 1.0              |
| [`keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | 5      | 12     | 4       | **9**             | 12    | 5      | 1               | 18             | 4               | 12            | 5          | 1.0              |
| [`preventExtensions`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) | 6      | 12     | 4       | **9**             | 12    | 5.1    | 1               | 18             | 4               | 12            | 6          | 1.0              |
| ES2015 behavior for non-object argument                      | 44     | 12     | 35      | **11**            | 31    | 9      | 44              | 44             | 35              | 32            | 9          | 4.0              |
| [`seal`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) | 6      | 12     | 4       | **9**             | 12    | 5.1    | 1               | 18             | 4               | 12            | 6          | 1.0              |
| [`setPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) | 34     | 12     | 31      | **11**            | 21    | 9      | 37              | 34             | 31              | 21            | 9          | 2.0              |
| [`values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values) | 54     | 14     | 47      | **No**            | 41    | 10.1   | 54              | 54             | 47              | 41            | 10.3       | 6.0              |

### Object可用API(IE9+)

1. Object.keys
2. Object.create
3. Object.defineProperties
4. Object.defineProperty
5. Object.freeze
6. Object.isFrozen
7. Object.seal
8. Object.isSealed
9. Object.preventExtensions
10. Object.isExtensible
11. **Object.assign 用扩展运算符来代替**



### 常用语法

1. 模板字符串
2. 箭头函数
3. 解构赋值
4. const 、let
5. 函数参数的默认值
6. 扩展运算符，
7. 对象属性的简洁表示法
8. 属性名表达式
9. 链判断运算符

```javascript
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';

const firstName = message?.body?.user?.firstName || 'default';
```

10. for...of循环
11.  async 、await
12.  export、import
13.  
14. 

