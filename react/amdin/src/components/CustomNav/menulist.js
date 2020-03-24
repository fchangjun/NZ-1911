export default[
  {
    key:'1',
    title:"首页",
    icon:'home',
    path:'/admin/home'
  },
  {
   key:'2',
   title:'用户管理',
   icon:'user',
   path:'/admin/user',
   children:[
     {
       key:'2-1',
       title:"用户添加",
       path:'/admin/useradd'
      },
     {
      key:'2-2',
      title:"用户列表",
      path:'/admin/userlist'
    }
   ]
  },
  {
    key:'3',
    title:"商品管理",
    icon:'goods',
    path:'/admin/goods'
  },
  {
    key:'8',
    title:"管理员",
    icon:'administrator',
    path:'/admin/administrator'
  },
  {
    key:'9',
    title:"设置",
    icon:'set',
    path:'/admin/set'
  },
]
// 递归测试数据
// export default [
//   {
//     key:'1',
//     title:"首页",
//     path:'/admin/home'
//   },
//   {
//     key:'2',
//     title:'管理员',
//     children:[
//       {
//         key:'2-1',
//         title:'管理员添加',
//         path:'/admin/admin/add'
//       },
//       {
//         key:'2-2',
//         title:'管理员修改',
//         path:'/admin/admin/update',
//         children:[
//           {
//             key:'2-2-1',
//             title:'管理员修改1',
//             path:'/admin/admin/update1'
//           },
//           {
//             key:'2-2-2',
//             title:'管理员修改2',
//             path:'/admin/admin/update1'
//           },
//           {
//             key:'2-2-3',
//             title:'管理员修改3',
//             path:'/admin/admin/update1',
//             children:[
//               {
//                 key:'2-2-3-1',
//                 title:'管理员修改3-1',
//               },
//               {
//                 key:'2-2-3-2',
//                 title:'管理员修改3-2',
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     key:'9',
//     title:"设置",
//     path:'/admin/set'
//   }
// ]