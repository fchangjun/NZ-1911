export default function (context) {
 console.log('中間件',context)
 context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
 console.log(context.userAgent)
 let path = context.route.path 
 if(path=='/users/info'){
  // context.redirect('/')
 }
}