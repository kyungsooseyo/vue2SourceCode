import { initMixin } from './init';

function Vue(options) {
  this._init(options); // 入口方法，做初始化操作
}
// 初始化,给构造函数上的原型扩展方法
initMixin(Vue);
export default Vue;
