// 1.需求是什么
// 2.需求的展示结果是什么
// 3.分析需求 实现结果进行分步 （先总体实现  在分步实现）
/*
打印目录树
┣━test
┃  ┗━heh.js
┣━dirtree.js
┣━test.js
┣━目录树.js
┗━heh.js
1. 先打印一个文件夹
    a.读取当前文件内容
    b.判断是文件还是文件夹
    c.文件直接打印
    d.文件夹打印并且递归
2. 递归 内部文件夹
*/
const fs=require('fs');
const path=require('path')

function loaddir(tagdir,deep){
let  pre=new Array(deep).join('┃  ')
//随着深度增加 前面的占位符
let infos=fs.readdirSync(tagdir)

let files=[]
let dirs=[]
infos.forEach(item => {
  let tmpdir=path.join(tagdir,item)
  let state=fs.statSync(tmpdir) 
  if(state.isFile()){
    files.push(item)
  }else{
    dirs.push(item)
  } 
});
//文件夹打印并递归
dirs.forEach(item => {
   console.log(`${pre}┣━${item}`) 
   //递归
//    console.log(tagdir)
   let nexttarget=path.join(tagdir,item)
//    console.log(nexttarget)
   let nextdeep=deep+1
   loaddir(nexttarget,nextdeep)
});
//文件打印
let count=files.length-1
files.forEach(item => {
    if(count--){
        console.log(`${pre}┣━${item}`) 
    }else{
        console.log(`${pre}┗━${item}`)  
    }  
 });
}

loaddir(__dirname,1)
//deep
