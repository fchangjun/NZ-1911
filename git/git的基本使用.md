### git相关的名词解析
git/svn 团队的代码管理工具 git是分布式 svn集中式
git 里包含本地仓库 和远程仓库
github/gitee  一大波远程仓库的集合体
git远程仓库    团队使用在服务器的仓库
git的本地仓库  本地创建随便使用
gui 可视化工具 gitDesktop sourceTree conrestone vscode 
.git 隐藏文件 表示git的仓库
工作区 可以可到的写代码的地方叫工作区
暂存区 在git的仓库我们是看不到的用来暂时保存呢提交的修改
分支   将用户的提交和修改按照时间形成一条链叫做分支
版本合并
版本冲突
版本提交



### 基本指令
```
git status  // 查看当前仓库分支的一个基本状态

git init    //  在本地初始化一个仓库

git add  <file,dir>  //将工作区的修改提交到暂存区
 
git commit -m '注释'  //将暂存区的修改提交到分支

git log      // 打印提交记录

git log --pretty=oneline  //在一行内打印提交记录
 
git branch    //查看本地的所有分支

git branch  -a //产看本地和远程的所有分支

git  checkout -b 分支名   //创建并且切换一个分支

git checkout  分支名  //切换一个分支

git merge 分支名(dev)  //在当前分支合并其他分支(dev)
```
### git仓库 本地仓库 远程仓库

### git的分支

### gitflow git工作流