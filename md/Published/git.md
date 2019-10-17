# git操作

我们先来理解下Git 工作区、暂存区和版本库概念

- **工作区：** 就是你在电脑里能看到的目录。
- **暂存区：** 英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库：** 工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。

## git基本操作

| 命令           | 说明                     |
| -------------- | ------------------------ |
| mkdir dir_name | 创建一个空目录           |
| pwd            | 显示当前目录的路径       |
| ls             | 显示当前目录下的文件列表 |
| cat file_name  | 查看指定文件的内容       |

## git配置

| git命令                                   | 说明               |
| ----------------------------------------- | ------------------ |
| git --version                             | 查看git版本        |
| git config --list                         | 查看已有的配置信息 |
| git config user.name                      | 查看已配置的用户名 |
| git config user.email                     | 查看已配置的邮箱   |
| git config --global user.name "username"  | 配置用户名         |
| git config --global user.email your_email | 配置邮箱（没有双引号）           |

### example:

```
git config --global user.name "username"
git config --global user.email username@username.com
```

- 如果用了 **--global** 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。
- 如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。

## git简单操作

| git命令                              | 说明                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| git clone url                        | 从远程仓库克隆项目到本地                                     |
| git status                           | 查看本地仓库状态                                             |
| git status -s                        | 以精简的方式显示文件状态，A表示新文件第一次被添加进版本管理  M表示红色为修改过未被添加进暂存区的，绿色为已经添加进暂存区的 |
| git add file_name                    | 添加指定文件到暂存区                                         |
| git add .                            | 添加所有文件到暂存区                                         |
| git commit file_name -m your_message | 提交暂存区指定文件到仓库区                                   |
| git commit -m message                | 提交暂存区所有文件到仓库区                                   |
| git pull                             | 从远程仓库拉取代码到本地仓库（更新代码）,并自动合并（相当于git fetch + git merge） |
| git push                             | 往远程仓库推送本地仓库的代码（提交代码）                     |
| git fetch                            | 从远程获取最新版本到本地，不会自动合并                       |

**PS：Git支持多种协议，包括`https`，但通过`ssh`支持的原生`git`协议速度最快。**

## git版本操作

| git命令                    | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| git reset --hard HEAD^     | 将当前版本回退到上一个版本                                   |
| git reset --hard commit_id | 将当前版本回退到指定版本（每一个commit_id对应一个版本）      |
| git checkout --  file_name | 丢弃工作区的修改，恢复暂存区的指定文件到工作区               |
| git checkout .             | 丢弃工作区的修改，恢复暂存区的所有文件到工作区               |
| git log                    | 可以查看提交（commit操作）历史,不能查看已经删除了的commit记录 |
| git reflog                 | 可以查看所有分支的所有操作记录（包括commit和reset的操作），包括已经被删除的commit记录 |
| git remote                 | 查看远程库的信息                                             |
| git remote -v              | 查看远程库的详细信息                                         |
| git rm file_name           | 删除工作区文件，并且将这次删除放入暂存区                     |
| git diff                   | 查看暂存区和工作区的差异                                     |
| git diff file_name         | 查看指定文件暂存区和工作区的差异                             |

## git分支操作

**PS：Git鼓励大量使用分支**

| git命令                                    | 说明                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| git branch                                 | 查看当前项目本地仓库所有分支                                 |
| git branch -r                              | 查看当前项目远程仓库所有分支                                 |
| git branch -a                              | 查看当前项目本地和远程所有分支（包括本地和远程的），红色代表远程分支，绿色的（带*号）代表当前本地分支，其他分支为非当前本地分支。 |
| git branch branch_name                     | 往本地仓库创建新的分支                                       |
| git branch -d branch_name                  | 在本地仓库删除指定的分支                                     |
| git branch -D branch_name                  | 在本地仓库删除指定的分支（强制删除）                         |
| git checkout branch_name                   | 切换当前分支到指定分支                                       |
| git checkout -b branch_name                | 往本地仓库创建新的分支并切换到新的分支                       |
| git merge branch_name                      | 本地仓库指定分支合并到当前所在分支                           |
| git checkout -b my_branch origin/my_branch | 本地创建一个分支并关联到远程的指定分支（相当于git branch branch_name + git checkout branch_name） |
| git push --set-upstream origin test        | 如果远程没有指定的分支就创建分支并关联到本地当前分支，否则直接将远程指定分支和本地当前分支关联起来，之后提交代码直接git push就行。 |
| git push origin branch_name                | 如果远程没有指定的分支就创建分支并向该分支推送本地当前分支的代码，否则直接向远程指定分支推送本地当前分支的代码 |
| git push origin --delete branch_name       | 删除远程指定的分支                                           |
| git push origin -d branch_name             | 删除远程指定的分支                                           |
| git push origin :head/branch_name          | 删除远程指定的分支                                           |
| git branch -m <new-branch-name>            | 重命名本地分支                                               |

## 骚操作

#### 查看某段代码是谁写的

```
git blame <file-name>
```

## 展示忽略的文件

```
git status --ignored
```



## .gitignore忽略规则简单说明

```
#               表示此为注释,将被Git忽略
*.a             表示忽略所有 .a 结尾的文件
!lib.a          表示但lib.a除外
/TODO`           `表示仅仅忽略项目根目录下的 TODO 文件，不包括 subdir``/TODO
build/          表示忽略 build/目录下的所有文件，过滤整个build文件夹；
doc/*.txt       表示会忽略doc``/notes``.txt但不包括 doc``/server/arch``.txt



bin/:           表示忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
/bin``:           表示忽略根目录下的bin文件
/*.c:           表示忽略``cat``.c，不忽略 build``/cat``.c
debug/*.obj:    表示忽略debug``/io``.obj，不忽略 debug``/common/io``.obj和tools``/debug/io``.obj
**``/foo``:         表示忽略``/foo``,a``/foo``,a``/b/foo``等
a/**``/b``:         表示忽略a``/b``, a``/x/b``,a``/x/y/b``等
!``/bin/run``.sh    表示不忽略bin目录下的run.sh文件
*.log:          表示忽略所有 .log 文件
config.php:     表示忽略当前路径的 config.php 文件


/mtk/`           `表示过滤整个文件夹
*.zip           表示过滤所有.zip文件
/mtk/do``.c       表示过滤某个具体文件


被过滤掉的文件就不会出现在git仓库中（gitlab或github）了，当然本地库中还有，只是push的时候不会上传。


需要注意的是，gitignore还可以指定要将哪些文件添加到版本管理中，如下：
!*.zip
!``/mtk/one``.txt


唯一的区别就是规则开头多了一个感叹号，Git会将满足这类规则的文件添加到版本管理中。为什么要有两种规则呢？
想象一个场景：假如我们只需要管理``/mtk/``目录中的one.txt文件，这个目录中的其他文件都不需要管理，那么.gitignore规则应写为：：
/mtk/``*
!``/mtk/one``.txt


假设我们只有过滤规则，而没有添加规则，那么我们就需要把``/mtk/``目录下除了one.txt以外的所有文件都写出来！
注意上面的``/mtk/``*不能写为``/mtk/``，否则父目录被前面的规则排除掉了，one.txt文件虽然加了!过滤规则，也不会生效！


----------------------------------------------------------------------------------
还有一些规则如下：
fd1/*
说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 ``/fd1/` `目录，还是某个子目录 ``/child/fd1/` `目录，都会被忽略；


/fd1/``*
说明：忽略根目录下的 ``/fd1/` `目录的全部内容；


/*
!.gitignore
!``/fw/
/fw/``*
!``/fw/bin/
!``/fw/sf/
说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 ``/fw/bin/` `和 ``/fw/sf/` `目录；注意要先对bin/的父目录使用!规则，使其不被排除。


```



## git常见问题及解决方案

#### 1.Git忽略规则(.gitignore配置）不生效原因和解决

**原因：**是因为在git忽略目录中，新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的，
这时候我们就应该先把本地缓存删除，然后再进行git的push，这样就不会出现忽略的文件了。



**解决方法：**先把本地缓存删除（改变成未被追踪状态），然后再提交：

```
git rm -r --cached .   				//删除本地缓存
git add .              				//添加修改到暂存区
git commit -m 'update .gitignore' 	//提交修改到本地仓库
git pull                			//更新代码先
git push							//向远程仓库提交代码
```

**需要特别注意的是：**

1. .gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore是无效的。
2. 想要 .gitignore起作用，必须要在这些文件不在暂存区中才可以，.gitignore文件只是忽略没有被staged(cached)文件，对于已经被staged文件，加入 .gitignore文件时一定要先从staged移除，才可以忽略。 

#### 2.每次git pull和git push都需要输入用户名密码

**原因**：git clone时连接的是https而不是git@git形式

**解决方法**：git目录下，执行命令:

    git config --global credential.helper store

然后再进行一次git pull，这次输完密码后，之后的git pull就不用输密码了。

## 参考：

1. https://www.cnblogs.com/zhangxiaoliu/p/6008038.html
2. https://segmentfault.com/a/1190000016848840
3. https://www.cnblogs.com/ydxblog/p/7988317.html
4. https://www.cnblogs.com/kevingrace/p/5690241.html
5. https://www.jianshu.com/p/f30221c3e6cc













