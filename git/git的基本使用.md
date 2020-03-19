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

git reflog  //打印所有的git操作记录
 
git branch    //查看本地的所有分支

git branch  -a //产看本地和远程的所有分支

git  checkout -b 分支名   //创建并且切换一个分支

git checkout  分支名  //切换一个分支

git merge 分支名(dev)  //在当前分支合并其他分支(dev)  子分支向母分支合并

git  reset --hard  提交id  //版本的滚动 只能是被git管理的

git diff    //查看暂存区和工作区的区别

git clone url  // 将远程的仓库克隆到本地
git push  origin（远程仓库名） master （分支名）
git pull  origin 分支名  （fecth + commit）
git fetch   拉取代码
git remote add origin url  将本地仓库和远程从仓库建立连接

git branch  -D 分支名删除本地分支
```

#### 冲突 
需要的留着 不需要的删除 -> 良好的交流

### git仓库 本地仓库 远程仓库
本地仓库和远程仓库都是仓库 该有的都有 
本地仓库 ：本地分支 （本地工作区  本地暂存区）
远程仓库 ：远程分支  （远程工作区 远程暂存区）

1. 远程仓库的创建 gitee github 自己在服务器上搭建远程仓库
   * 已经存在一个远程仓库了 通过readme文件自动创建的 也可能是别人创建 
   git clone + 地址  将远程仓库克隆到本地
   
   * 没有远程仓库
    1. 本地通过git init 创建一个远程仓库 
    2. git remote add origin + 地址 和远程仓库做关联 

### git的分支

### gitflow git工作流
git 的使用流程 更多是对分支的使用

master 主分支  线上分支 和正在线上运行的代码是一致的
realease 分支  预发布分支 发布前的测试
dev    分支     开发分支 
futrue 分支     个人分支 功能分支
bug    分支     线上代码出现bug的时候来解决bug

#### 角色
主程
1. 和远程仓库过关联
2. 搭建项目框架
3. 上传到远程的dev分支
4. 开发结束之后 将dev分支的代码 合并到master （预上线分支）
普通开发者
1. clone 代码
2. 从dev分支切换出个人分支
3. 在个人分支进行修改
4. 将个人分支合并到dev分支
5. push dev分支  push 之前一定要先更新代码
6. 将个人分支删除调重新创建