# 使用SSH连接到GitHub

### 背景

> 从**2021年8月13日**开始，在对Git操作进行身份验证时，GitHub.com将不再接受帐户密码，并将要求使用基于令牌的身份验证，[例如个人访问令牌](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git#next-steps-authenticating-with-github-from-git)（对于开发人员）或OAuth或GitHub App安装令牌（对于集成商）适用于GitHub.com上所有经过身份验证的Git操作。您也可以根据需要继续使用SSH密钥。



### 关于SSH协议 

使用SSH协议，你可以连接到远程服务器和服务并进行身份验证。使用SSH密钥，你可以连接到GitHub，而无需在每次访问时都提供用户名和个人访问令牌。

> **在正式开始之前，强烈建议 Windows 用户使用 Git 程序包自带的 git bash 命令行工具进行操作。**



### 1. 检查现有的SSH密钥

1. 打开Git Bash。

2. 输入`ls -al ~/.ssh`以查看是否存在现有的SSH密钥：

   ```shell
   $ ls -al ~/.ssh
   # Lists the files in your .ssh directory, if they exist
   ```

3. 检查目录列表，以查看是否已经有公共SSH密钥。默认情况下，公共密钥的文件名是以下之一：

   - *id_rsa.pub*
   - *id_ecdsa.pub*
   - *id_ed25519.pub*

4. 如果你没有现有的公钥和私钥对，或者不希望使用任何可用于连接到GitHub的对，请**生成一个新的SSH密钥**。

5. 如果你看到列出的现有公共和私有密钥对（例如*id_rsa.pub*和*id_rsa*），你希望将它们用于连接到GitHub，则可以**将SSH密钥添加到ssh-agent**



### 2. 生成新的SSH密钥

1. 打开Git Bash。

2. 复制粘贴以下文本，替换为你的GitHub电子邮件地址。

   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

    **注意：** 如果使用的旧系统不支持Ed25519算法，请使用：

   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

    使用提供的电子邮件作为标签，这将创建一个新的ssh密钥。

   ```shell
   > Generating public/private ed25519 key pair.
   ```

3.  当提示你“输入要在其中保存密钥的文件”时，请按Enter。这接受默认文件位置。

    ```shell
    > Enter a file in which to save the key (/c/Users/you/.ssh/id_ed25519):[Press enter]
    ```

4.  在提示符下，键入一个安全密码。

    ```shell
    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]
    ```

   **不建议设置密码，因为设置了密码，就需要输入密码，在CMD中需要重复输入密码**。

5.  修改安全密码（passphrase）

    ```shell
    sh-keygen -f ~/.ssh/id_ed25519 -p
    ```

   **建议直接回车，重置密码为空，解决重复输入密码的问题**。



### 3. 将SSH密钥添加到ssh-agent(有密码的情况下)

如果安装了[GitHub Desktop](https://desktop.github.com/)，则可以使用它来克隆存储库，而不用处理SSH密钥。

1. 确保ssh-agent正在运行。你可以使用“[使用SSH密钥密码](https://docs.github.com/en/articles/working-with-ssh-key-passphrases)”中的“自动启动ssh-agent”说明，或手动启动它：

   ```shell
   # start the ssh-agent in the background
   $ eval `ssh-agent -s`
   > Agent pid 59566
   ```

2. 将SSH私钥添加到ssh-agent。如果你使用其他名称创建密钥，或者要添加具有其他名称的现有密钥，请使用私有密钥文件的名称替换命令中的*id_ed25519*。

   ```shell
   $ ssh-add ~/.ssh/id_ed25519
   ```

3. 将SSH密钥添加到你的GitHub帐户



### 4. 将SSH密钥添加到你的GitHub帐户

要配置GitHub帐户以使用新的（或现有的）SSH密钥，你还需要将其添加到GitHub帐户中。

1. 将SSH公钥复制到剪贴板。

   如果你的SSH公钥文件的名称与示例代码的名称不同，请修改文件名以匹配你当前的设置。复制密钥时，请勿添加任何换行符或空格。

   ```shell
   $ clip < ~/.ssh/id_ed25519.pub
   # Copies the contents of the id_ed25519.pub file to your clipboard
   ```

   **提示：** 如果`clip`不起作用，则可以找到隐藏的`.ssh`文件夹，在你喜欢的文本编辑器中打开文件，然后将其复制到剪贴板。

2.  登录到你的 GitHub 账号，在任何页面的右上角，点击你的个人资料照片，然后点击**Settings**。

3.  在用户设置边栏中，点击**SSH and GPG keys**。

4.  单击**New SSH key**。

5.  在**Title**字段中，为新密钥添加一个描述性标签。例如，"your_computer_username"。

6.  将你的密钥粘贴到“密钥”字段中。

7. 单击**Add SSH key**。

8. 如果出现确认密码的提示，请确认你的GitHub密码。

9. 添加完成之后会有邮件通知。



### 5. 测试你的SSH连接

1. 打开Git Bash。

2. 输入以下内容：

   ```shell
   $ ssh -T git@github.com
   # Attempts to ssh to GitHub
   ```

   你可能会看到这样的警告：

   ```shell
   > The authenticity of host 'github.com (IP ADDRESS)' can't be established.
   > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
   > Are you sure you want to continue connecting (yes/no)?
   ```

3. 确认你看到的消息中的指纹与[GitHub的RSA公钥指纹](https://docs.github.com/en/github/authenticating-to-github/githubs-ssh-key-fingerprints)匹配。如果是这样，则键入`yes`：

   ```shell
   > Hi username! You've successfully authenticated, but GitHub does not
   > provide shell access.
   ```

4. 验证结果消息包含您的用户名。



### 6. 将远程URL从HTTPS切换到SSH

1. 打开Git Bash。

2. 将当前工作目录更改为本地项目。

3. 列出您现有的仓库信息，以获取要更改的仓库的名称。

   ```shell
   $ git remote -v
   > origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
   > origin  https://github.com/USERNAME/REPOSITORY.git (push)
   ```

4. 使用`git remote set-url`命令将远程URL从HTTPS更改为SSH 。

   ```shell
   $ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
   ```

5. 验证远程URL是否已更改。

   ```shell
   $ git remote -v
   # Verify new remote URL
   > origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
   > origin  git@github.com:USERNAME/REPOSITORY.git (push)
   ```

   

## 参考

1. [https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)
2. [https://docs.github.com/cn/github/authenticating-to-github/about-ssh](https://docs.github.com/cn/github/authenticating-to-github/about-ssh)
3. [https://docs.github.com/cn/github/authenticating-to-github/checking-for-existing-ssh-keys](https://docs.github.com/cn/github/authenticating-to-github/checking-for-existing-ssh-keys)
4. [https://docs.github.com/cn/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/cn/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
5. [https://docs.github.com/cn/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account](https://docs.github.com/cn/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
6. [https://docs.github.com/cn/github/authenticating-to-github/testing-your-ssh-connection](https://docs.github.com/cn/github/authenticating-to-github/testing-your-ssh-connection)
7. [https://docs.github.com/cn/github/authenticating-to-github/working-with-ssh-key-passphrases](https://docs.github.com/cn/github/authenticating-to-github/working-with-ssh-key-passphrases)