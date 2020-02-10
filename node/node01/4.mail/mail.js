/*
短信轰炸器 每隔 1s发一条短信
邮箱轰炸器 每隔1s 发一条邮件
通过第三方模块发送邮件 nodemailer
*/
//node_modules/nodemailer/lib/well-know/services.json

  // 引入第三方模块
  const nodemailer = require("nodemailer");
  //创建发送邮件的对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '352186537@qq.com', // 发送方邮箱账号
      pass: 'oayiclnqblmucadi' // 邮箱的授权码
    }
  });
  // 邮件的内容
  let content ={
    from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
    to: "352186537@qq.com", // list of receivers
    subject: "Hello ✔", // Subject line
    
    html: "<b>欢迎光临逆战1911</b>" // html body
  }
 //调用sendMail方法发送 
  transporter.sendMail(content,(err)=>{
    console.log(err)
  });

