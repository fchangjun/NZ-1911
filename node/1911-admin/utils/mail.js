// 发送邮件的模块

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

  function send(mail,code){
    // 邮件的内容
    let content ={
      from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
      to: `${mail}`, // list of receivers
      subject: "注册验证码", // Subject line
      
      html: `<b>欢迎注册1911聊天室，您的验证码是${code}</b>` // html body
    }

    //调用sendMail方法发送 
    return  new Promise((resolve,reject)=>{
      transporter.sendMail(content,(err,infos)=>{
        console.log(infos)
       if(err){
         reject(err)
       }else{
         resolve('邮件发送成功')
       }
      });

    })
  }
 
  module.exports={send}
