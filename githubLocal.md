[TOC]

# github本地的使用

### 1.生成ssh-key

```
ssh-keygen -t rsa -C "youremail@example.com"

路径选择 : 使用该命令之后, 会出现提示选择ssh-key生成路径, 这里直接点回车默认即可, 生成的ssh-key在默认路径中;密码确认 : 这里我们不使用密码进行登录, 用密码太麻烦;就一路回车下去
```

### 2.将ssh配置到GitHub中

#####2.1在mac os X 下前往文件夹，/Users/自己电脑用户名/.ssh。

windows应该是（C:\Documents and Settings\Administrator\.ssh （或者 C:\Users\自己电脑用户名\.ssh）中）。

#####2.2然后打开id_rsa.pub，将里面的全部代码复制到github的SSH中。

### 3.验证是否配置成功

```
ssh -T git@github.com
```

### 4.如果未成功

> 这是因为在本地计算机与 GitHub 建立连接的时候，实际上是本机计算机的 ssh-agent 与 **GitHub **服务器进行通信。虽然本地计算机有了私钥，但是 ssh-agent并不知道私钥存储在哪儿。因此，要想正常使用秘钥对，需要先将私钥加入到本地计算机的ssh-agent 中（添加过程中需要输入 passphrase）。
>
> http://blog.csdn.net/medivh_/article/details/54099078
>
> [深入浅出Git权限校验]: http://blog.csdn.net/medivh_/article/details/54099078

##### 4.1需要先将私钥加入到本地计算机的ssh-agent 中

```
eval "$(ssh-agent -s)"
```

##### 4.2添加完成后，就可以查看到当前计算机中存储的密钥。

```
ssh-add -l  
```

##### 4.3再次检测本地计算机与 **GitHub **的连接状态，校验就正常通过了。

```
ssh -T git@github.com
```

