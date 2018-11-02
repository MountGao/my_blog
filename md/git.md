# git操作

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
| git config --global user.email your_email | 配置邮箱           |

### example:

```
git config --global user.name "username"
git config --global user.email username@username.com
```

- 如果用了 **--global** 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。
- 如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。

## git简单操作

| git命令               | 说明                                                         |
| --------------------- | ------------------------------------------------------------ |
| git clone url         | 从远程仓库克隆项目到本地                                     |
| git status            | 查看本地仓库状态                                             |
| git add file_name     | 往本地仓库暂存区添加指定修改文件                             |
| git add .             | 往本地仓库暂存区添加所有修改文件                             |
| git commit -m message | 往本地仓库提交所有暂存区文件                                 |
| git pull              | 从远程仓库拉取代码到本地仓库（更新代码）,并自动合并（相当于git fetch + git merge） |
| git push              | 往远程仓库推送本地仓库的代码（提交代码）                     |
| git fetch             | 从远程获取最新版本到本地，不会自动合并                       |

**PS：Git支持多种协议，包括`https`，但通过`ssh`支持的原生`git`协议速度最快。**

## git版本操作

| git命令                    | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| git reset --hard HEAD^     | 将当前版本回退到上一个版本                                   |
| git reset --hard commit_id | 将当前版本回退到指定版本（每一个commit_id对应一个版本）      |
| git checkout --  file_name | 丢弃工作区的修改                                             |
| git log                    | 可以查看提交（commit操作）历史,不能查看已经删除了的commit记录 |
| git reflog                 | 可以查看所有分支的所有操作记录（包括commit和reset的操作），包括已经被删除的commit记录 |
| git remote                 | 查看远程库的信息                                             |
| git remote -v              | 查看远程库的详细信息                                         |
| git rm file_name           | 删除文件                                                     |
| git diff file_name         | 查看指定文件的修改内容                                       |

## git分支操作

**PS：Git鼓励大量使用分支**

| git命令                                    | 说明                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| git branch                                 | 查看当前项目本地仓库分支                                     |
| git branch -a                              | 查看当前项目所有所有分支（包括本地和远程的），红色代表远程分支，绿色的（带*号）代表当前本地分支，其他分支为非当前本地分支。 |
| git branch branch_name                     | 往本地仓库创建新的分支                                       |
| git branch -d branch_name                  | 在本地仓库删除指定的分支                                     |
| git branch -D branch_name                  | 在本地仓库删除指定的分支（强制删除）                         |
| git checkout branch_name                   | 切换当前分支到指定分支                                       |
| git checkout -b branch_name                | 往本地仓库创建新的分支并切换到新的分支                       |
| git merge branch_name                      | 本地仓库指定分支合并到当前所在分支                           |
| git checkout -b my_branch origin/my_branch | 本地创建一个分支并关联到远程的指定分支（相当于git branch branch_name + git checkout branch_name） |



## git常见问题

1. 把某些目录或文件加入忽略规则，无效。

   **原因：**.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。

   **解决方法：**先把本地缓存删除（改变成未被追踪状态），然后再提交：

   ```
   git rm -r --cached .   				//删除本地缓存
   git add .              				//添加修改到暂存区
   git commit -m 'update .gitignore' 	//提交修改到本地仓库
   git pull                			//更新代码先
   git push							//向远程仓库提交代码
   ```

    **参考：**https://www.cnblogs.com/zhangxiaoliu/p/6008038.html













