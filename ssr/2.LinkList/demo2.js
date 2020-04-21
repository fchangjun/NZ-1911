class Node {
  constructor(val){
    // console.log('节点构造函数')
    this.init(val)
  }
  init(val){
    this.val = val 
    this.next = null
  }
}

class LinkList {
   constructor(){
    //  console.log('链表构造函数')
    this._length = 0  //链表长度
    this._head = null  //链表起点
   }
  
   //返回值的索引 
   //
   // 链表最后位置添加  
   push(val){
     let node = new Node(val)
    //  console.log('节点',node)
     let current ;
     if(this._head === null){
       this._head = node 
     }else{
      //  console.log(222)
       current = this._head
      //  console.log(current.next)
       while (current.next) {
        //  console.log(current.nex)
         current= current.next 
       }
      //  console.log(222)
       current.next =node 
     }
     //链表长度递增
     this._length ++
  
   }   
  //  链表任意位置添加
  insert(){}
  //删除某一个链表根据值删除某一个链表
  remove(val){
    // 将删除位置之前的 块next 指针指向下一个 
    let current = this._head 
    let preNode = null 
    // console.log('current',this._head)
    if(this._head.val ===val) {
      // 将head next 指向下一个块
      this._head = current.next 
    }else{
      console.log('hehe',current)
      while (current.next&&current.val !== val) {
        // 如果游标小于要删除的块 
        preNode = current  
        current = current.next 
        
      }
      preNode.next  = current.next 
      this._length -- 
      return current.val
    }
  }
  //查看所有的链表数据
  values(){
    // 从头开始链表到链表为空为止循环 
    let current  = this._head
    console.log(current)
    let arr = [] 
    while (current.next) {
      arr.push(current.val)
      current=current.next 
    }
    arr.push(current.val)
    return arr
  }
}
let list = new LinkList() 
// console.log(list)
list.push(1)
list.push(2)
list.push(3)
list.remove(3)
console.log(list.values())
console.log(list._length)