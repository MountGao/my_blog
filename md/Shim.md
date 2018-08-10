# Shim & Polyfill

## Shim

> Shim垫片 ,不要与shm混淆，shm是共享内存的缩写 
>
> 在计算机编程中，Shim是一个小型库，它透明地拦截API调用并更改传递的参数，处理操作本身或将操作重定向到其他地方。Shims可用于在较新的环境中支持旧API，或在旧环境中支持新API。Shim还可用于在不同软件平台上运行程序，而不是为它们开发。
>
> 当API的行为发生变化时，通常会出现旧API的填充程序，从而导致依赖于旧功能的旧应用程序的兼容性问题; 在这种情况下，旧的API仍然可以通过较新代码之上的瘦[兼容层](https://en.wikipedia.org/wiki/Compatibility_layer)来支持。用于较新API的填充程序定义为：“填充程序是一种库，它使用该环境的方式将旧API带入旧环境。

Shim 指的是在一个旧的环境中模拟出一个新 API ，而且仅靠旧环境中已有的手段实现，以便所有的浏览器具有相同的行为。主要特征：

- 该 API 存在于现代浏览器中;
- 浏览器有各自的 API 或 可通过别的 API 实现;
- API 的所有方法都被重新实现；
- 拦截 API 调用，并提供自己的实现；
- 是一个优雅降级。

## Polyfill

> 术语polyfill来自于一个家装产品Polyfilla:  Polyfilla是一个英国产品,在美国称之为Spackling Paste(译者注:刮墙的,在中国称为腻子).记住这一点就行:把旧的浏览器想象成为一面有了裂缝的墙.这些[polyfills]会帮助我们把这面墙的裂缝抹平,还我们一个更好的光滑的墙壁(浏览器) 

polyfill 是一段代码(或者插件)，提供了那些开发者们希望浏览器原生提供支持的功能。程序库先检查浏览器是否支持某个API，如果不支持则加载对应的 polyfill。主要特征：

- 是一个浏览器 API 的 Shim;
- 与浏览器有关;
- 没有提供新的API，只是在 API 中实现缺少的功能;
- 以只需要引入 polyfill ，它会静静地工作;

shim 的概念要比 polyfill 更大一些，可以将 polyfill 理解为专门兼容浏览器 API 的 shim 。简单的说，如果浏览器X支持标准规定的功能，那么 polyfill 可以让浏览器 Y 的行为与浏览器 X 一样。

## 参考：

https://en.wikipedia.org/wiki/Shim_(computing)