# tree命令生成项目树形结构

linux和windows都有自带的tree命令

mac则需要安装，才能使用

### 1.tree作用

tree命令以树状图列出目录的内容。

### 2.tree命令的使用格式

```
tree [-option] [dir]
```

备注，tree命令中，dir缺省为当前目录

### 3.tree命令的一些常用选项

| 选项     | 含义                             |
| ------ | ------------------------------ |
| -a     | 显示所有文件和目录                      |
| -d     | 只显示目录名称，不显示文件                  |
| -D     | 列出文件或目录的更改时间                   |
| -L num | 显示num层目录结构，深度大禹num层的目录和文件将不会显示 |

### 4.使用举例

```
tree -d   #只显示目录
tree -L 2   #显示2层内容
tree /home/work  #显示/home/work目录中的内容
```



## windows下的 tree 命令 输出目录树层结构

#### 1.win+r  ，输入cmd ,打开dos命令行

#### 2.cd到你想查看的项目里边

#### 3.键入tree

```
tree
```

#### 4.当项目结构繁多，无法全部显示时，

```
tree | more    //查看全部的结构，每次回车查看更多
```

#### 5.导出生成的文件目录

```
使用tree /f > tree.txt命令，就可以把生成的文件目录树形结构写入到tree.txt文件中了。
tree.txt这个文件名称是可以修改的。
打开对应的文件目录，就可以看到多了一个tree.txt的文件，其中tree文件里面的内容，和屏幕输出的内容是一致的。

也可以直接type tree.txt 在窗口里面直接查看内容
```



### Mac下的 tree 命令 输出目录树层结构

#### 1. mac 下使用 [brew包管理工具](https://link.jianshu.com/?t=http://yijiebuyi.com/so.html?k=brew)安装 tree

```
brew install tree
```

#### 2. 安装成功后，直接在终端使用，使用 --help 查看帮助信息

```
tree --help
```

#### 3. 输出你的树层目录结构

1. cd 目标文件夹路径
2. 然后键入tree，会将该层级下所有文件都遍历了输出，不管层级多深

#### 4. 常用技巧

1.我们可以在目录遍历时使用 -L 参数指定遍历层级

```
tree -L 2
```

2.如果你想把一个目录的结构树导出到文件 Readme.md ,可以这样操作

```
tree -L 2 >README.md //然后我们看下当前目录下的 README.md 文件
```

3.只显示文件夹

```
tree -d 
```

4.显示项目的层级，n表示层级数。例：显示项目三层结构，tree -l 3；

```
tree -L n 
```

5.tree -I pattern 用于过滤不想要显示的文件或者文件夹。比如要过滤项目中的node_modules文件夹；

```
tree -I “node_modules”
```







