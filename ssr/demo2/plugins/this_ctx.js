export default ({ app }, inject) => {
  inject('myTest', string => console.log('实例上下文都可以用!', string))
}