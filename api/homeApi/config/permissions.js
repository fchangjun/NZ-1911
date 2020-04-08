module.exports={
  admin: [
            { resources:'/admin',name:"管理员操作", permissions: ['get'] },
            { resources:'/goods',name:"商品操作", permissions: ['get'] },
            { resources:'/banner',name:"轮播图操作", permissions: ['get'] },
            { resources:'/kind',name:"商品类别操作", permissions: ['get'] },
            { resources:'/goods',name:"商品操作", permissions: ['get'] },
            { resources:'/upload',name:"文件操作操作", permissions: ['get'] }
          ],
  root: [ 
            { resources:'/admin',name:"管理员操作", permissions: ['get',"post","put","delete"] },
            { resources:'/goods',name:"商品操作", permissions: ['get',"post","put","delete"] },
            { resources:'/banner',name:"轮播图操作", permissions: ['get',"post","put","delete"] },
            { resources:'/kind',name:"商品类别操作", permissions: ['get',"post","put","delete"] },
            { resources:'/goods',name:"商品操作", permissions: ['get',"post","put","delete"] },
            { resources:'/upload',name:"文件操作操作", permissions: ['get',"post","put","delete"] }
        ]
}
