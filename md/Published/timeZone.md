# JavaScript-时区

## 简介

> **时区**是地球上的区域使用同一个时间定义。以前，人们通过观察太阳的位置（时角）决定时间，这就使得不同经度的地方的时间有所不同（地方时）。1863年，首次使用时区的概念。时区通过设立一个区域的标准时间部分地解决了这个问题。
>
> 世界各国位于地球不同位置上，因此不同国家，特别是东西跨度大的国家日出、日落时间必定有所偏差。这些偏差就是所谓的**时差**。



**历史**

在农业社会，世界各地一般采用各自的地方时。十九世纪随着长途铁路运输的发展，1870年代加拿大铁路工程师弗莱明首次提出全世界按统一标准划分时区。1883年11月18日，美国铁路部门正式实施五个时区。1884年华盛顿子午线国际会议正式通过采纳这种时区划分，称为世界标准时制度。

**理论时区**

理论时区以被15整除的经线为中心，向东西两侧延伸7.5度，即每15°划分一个时区，这是**理论时区**。理论时区的时间采用其中央经线（或标准经线）的地方时。所以每差一个时区，区时相差一个小时，相差多少个时区，就相差多少个小时。另外，由于东半球时间较快；西半球时间较慢，为了避免日期的紊乱，提出国际换日线的概念。

**法定时区**

为了避开国界线，有的时区的形状并不规则，而且比较大的国家以国家内部行政分界线为时区界线，这是**实际时区**，即**法定时区**。

**协调世界时**

如果时间是以协调世界时（UTC）表示，则在时间后面直接加上一个“Z”（不加空格）。“Z”是协调世界时中0时区的标志。因此，“09:30 UTC”就写作“09:30Z”或是“0930Z”。“14:45:15 UTC”则为“14:45:15Z”或“144515Z”。

UTC时间也被叫做祖鲁时间，因为在北约音标字母中用“Zulu”表示“Z”。

**UTC偏移量**

UTC偏移量用以下形式表示：±[hh]:[mm]、±[hh][mm]、或者±[hh]。如果所在区时比协调世界时早1个小时（例如柏林冬季时间），那么时区标识应为“+01:00”、“+0100”或者直接写作“+01”。这也同上面的“Z”一样直接加在时间后面。

"UTC+8"表示当协调世界时（UTC）时间为凌晨2点的时候，当地的时间为2+8点，即早上10点。

**缩写**

时区通常都用字母缩写形式来表示，例如“EST、WST、CST”等。但是它们并不是ISO 8601标准的一部分，不应单独用它们作为时区的标识。一些缩写可能意义模糊，例如“BST”应当是英国夏令时，但在1968年到1971年间被重命名为“英国标准时”，这只是因为立法者不愿称其为中欧时间。在该法案中还确认英国的标准时间仍然为格林威治标准时。



## 语法

```javascript
Date.prototype.toLocaleString()

dateObj.toLocaleString([locales [, options]])
```

`toLocaleString()` 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， `locales` 和 `options` 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。



**locales** 

可选。缩写语言代码(BCP 47 language tag,例如:cmn-Hans-CN)的字符串或者这些字符串组成的数组.关于参数locales的一般形式和解释请参见[Intl page](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation). 下面的这些Unicode扩展键也是被允许的:

下面这两种扩展的使用方式是language[-scripts][-region]-u-nu-* 和 language[-scripts][-region]-u-ca-* （语言代码，脚本代码，和国家代码）

例如：`zh-u-nu-hanidec`(表示中文十进制数字) 和 `zh-u-ca-chinese`(表示中国日历) ,也可以 nu 和 ca 组合使用 比如 使用 `zh-u-ca-chinese-nu-hanidec` 。

- `nu`

  编号系统. 可能的值包括: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.

- `ca`

  日历. 可能的值包括: `"buddhist"`, `"chinese"`, `"coptic"`, `"ethioaa"`, `"ethiopic"`, `"gregory"`, `"hebrew"`, `"indian"`, `"islamic"`, `"islamicc"`, `"iso8601"`, `"japanese"`, `"persian"`, `"roc"`.



**options**

可选。包含一些或所有的下面属性的类:

- `localeMatcher`

  使用的local的匹配算法. 可能的值有"lookup"和"best fit"; 默认值是 `"best fit"`. 有关此选项的信息, 请参见[Intl page](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).

- `timeZone`

  使用的时区. 这唯一的值实现必须被标准世界时间(UTC)所识别。默认值是运行时的默认时区. [IANA time zone database](https://www.iana.org/time-zones)中的时区名称可能会被识别, 例如`"Asia/Shanghai"`, `"Asia/Kolkata"`, `"America/New_York"`.(中国地区的值为Asia/Shanghai).

- `hour12`

  是否使用12小时时间制(而不是24小时的时间). 可能的值是`true` 或 `false`; 默认值是根据locale来自动决定的(中国地区的默认值为true).

- `formatMatcher`

  format的匹配算法.可能的值有"basic"和"best fit";默认值是"best fit".

  日期时间插件被格式化输出时可以使用的属性集合描述。实现需要支持是以下子集中的其中一个(当weekday,year等这些属性一个也不使用的时候,在cmn-Hans-CN中相当于使用集合year, month, day, hour, minute, second并且它们的值都是numeric)：

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

实现可能支持其他的子集，并通过对所有可用的子集对比找到最匹配的子集。通过 formatMatcher属性可以设置两种算法用于对比和选择子集:  [完全匹配`"basic"算法` ](http://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) 和 一种依赖于“best fit”算法的实现.

- `weekday`

  工作日的展现方式.可能的值有 `"narrow"`, `"short"`, `"long"`.(中国地区的默认值为numeric)

- `era`

  纪元的展现方式. 可能的值有 `"narrow"`, `"short"`, `"long"`.(中国地区的默认值为numeric)

- `year`

  年的展现方式.  可能的值有 `"numeric"`, `"2-digit"`.(中国地区的默认值为numeric)

- `month`

  月的展现方式. 可能的值有 `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"`.(中国地区的默认值为numeric)

- `day`

  日的展现方式.可能的值有 `"numeric"`, `"2-digit"`.(中国地区的默认值为numeric)

- `hour`

  时的展现方式.可能的值有 `"numeric"`, `"2-digit"`.(中国地区的默认值为numeric

- `minute`

  分钟的展现方式.可能的值有 `"numeric"`, `"2-digit"`.(中国地区的默认值为numeric)

- `second`

  秒的展现方式. 可能的值有`"numeric"`, `"2-digit"`.(中国地区的默认值为numeric)

- `timeZoneName`

  时区名称的展现方式.可能的值有 `"short"`, `"long"`.(中国地区的默认值为long)

每个日期时间组件属性的默认值都是[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined),但是若所有的组件属性都是[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined),那么`year`, `month`, `day` ,`hour`, `minute `和 `second`的值就都被认为是"`numeric`".



## 应用场景

- 客户端使用服务器时间

- 展示时区时间

  

## 示例

1、没有参数

```
//没有指定语言环境（locale）时，返回一个使用默认语言环境和格式设置（options）的格式化字符串。
// toLocaleString 不包含参数的返回值取决于实现,
// 默认的区域(locale),和默认的时区(time zone)

const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
date.toLocaleString();
// → 如果是在en-US区域和America/Los_Angeles时区运行返回值为"12/11/2012, 7:00:00 PM"
```

2、使用 `locales` 参数

```
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
//假定本地时区是 America/Los_Angeles(美国太平洋时区)

//en-US(美利坚英语)使用 month-day-year 的顺序展示年月日
date.toLocaleString("en-US");
// → "12/19/2012, 7:00:00 PM"

// en-GB(不列颠英语)使用 day-month-year 顺序展示年月日
date.toLocaleString("en-GB");
// → "20/12/2012 03:00:00"

//当请求一个语言可能不支持，如巴厘(ban)，若有备用的语言印尼语(id)，
//那么将使用印尼语(id)
date.toLocaleString(["ban", "id"]);
// → "20/12/2012 11.00.00"
```

3、使用 `options` 参数

```
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

//请求参数(options)中包含参数星期(weekday)，并且该参数的值为长类型(long)
let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
date.toLocaleString("de-DE", options);
// → "Donnerstag, 20. Dezember 2012"

//一个应用使用 世界标准时间(UTC),并且UTC使用短名字(short)展示
options.timeZone = "UTC";
options.timeZoneName = "short";//若不写这一行那么仍然显示的是世界标准时间；但是GMT三个字母不会显示
date.toLocaleString("en-US", options);
// → "Thursday, December 20, 2012, GMT"

// 使用24小时制
date.toLocaleString("en-US", {hour12: false});
// → "12/19/2012, 19:00:00"

// 格式化：yyyy/MM/dd hh:mm:ss
const formatOptions = {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                hour12: false
            };
date.toLocaleString("zh-CN", formatOptions);
```

4、获取指定时区的时间

```
function getLADate() {

	// 返回的是美国洛杉矶时间，在全球任何一个角落获取的都是同一个洛杉矶时间
    // 假定服务器时间是洛杉矶时间，可以通过此法获取服务器的时间，而无需从服务器获取时间
    return new Date(date.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    
}
```

 此法存在兼容问题，在低版本浏览器，尤其是IE上不支持。如需要兼容IE，这里推荐插件spacetime，[github地址](https://github.com/spencermountain/spacetime )

```
spacetime('2019/05/15', 'America/Los_Angeles')
```



## 性能

当格式化大量日期时，最好创建一个 [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) 对象，然后使用该对象 [`format`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format) 属性提供的方法。

**`Intl.DateTimeFormat`**是根据语言来格式化日期和时间的对象的构造器（新的标准）。

**`Intl.DateTimeFormat`** 也有`locales`和`options`参数，截止本文写作时间其兼容性不太好，尤其是移动端。



## 浏览器兼容性

| 特征                 | Chrome | Firefox | Safari | Edge | IE   |
| -------------------- | ------ | ------- | ------ | ---- | ---- |
| 基础支持             | Y      | Y       | Y      | Y    | Y    |
| locales              | Y      | Y       | 10     | Y    | 11   |
| options              | Y      | Y       | 10     | Y    | 11   |
| `timeZone` option[1] | Y      | Y       | Y      | 14   | N    |

[1] 特指  [IANA time zone](https://www.iana.org/time-zones) names in `timeZone` option



## 参考：

1. [http://www.wanweibaike.com/wiki-%E6%97%B6%E5%8C%BA](http://www.wanweibaike.com/wiki-时区)
2. [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
3. [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

