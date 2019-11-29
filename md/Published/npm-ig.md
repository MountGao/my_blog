 ### 由于npm全局模块的存放路径及cache的路径默认是放在C盘下，这样肯定会增加C盘的负担，那么如果需要修改其存放路径应该怎么做呢？

Windows下全局安装的默认路径为`C:\Users\[UserName]\AppData\Roaming\npm`

在DOS窗口中输入`npm config -g` 可以查看npm的全局配置

 #### 1. 在nodejs安装目录（也可以指定其它目录）下创建`node_global`和`node_cache`两个文件夹



#### 2. 打开cmd命令行，设置全局模块的安装路径到`node_global`文件夹，缓存到`node_cache`文件夹，在命令行分别输入：

```
npm config set prefix "D:\Software\nodejs\node_global"
```
```
npm config set cache "D:\Software\nodejs\node_cache"
```

此时可以输入`npm config -g` 可以查看设置是否成功



 #### 3. 由于node全局模块大多数都是可以通过命令行访问的，所以还要把`D:\Software\nodejs\node_global`加入到系统PATH中，方便直接使用命令行运行。 



#### 备注：

一些npm相关命令

1. 查看npm全局配置 `npm config -g`
2. 查看npm全局配置的全部配置 `npm config -g -l`
3. 查看当前目录下npm安装的列表 `npm ls`
4. 查看npm全局安装的列表 `npm ls -g`



#### 参考：

1.  https://www.cnblogs.com/Jimc/p/10194431.html 