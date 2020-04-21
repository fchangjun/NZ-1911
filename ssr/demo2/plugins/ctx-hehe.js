export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.myHehe = string => console.log('Okay, another function', string)
}
// 挂载高app实例的context上