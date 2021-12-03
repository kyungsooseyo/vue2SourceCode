import { initState } from './state';

//! vue并不是一个真正的MVVM的框架，因为不MVVM是不能跳过数据去更新视图的，但是vue中提供了$ref这个方法可以直接操作dom
export function initMixin(Vue) {
  // 初始化方法
  Vue.prototype._init = function (options) {
    //~ new出来的实例和vm就是一个东西
    const vm = this;
    vm.$options = options;
    //, 1.初始化状态(将数据做一个初始化的劫持，当我改变数据时应该更新视图)
    // ` vue组件中有很多状态，data，props，watch，computed
    initState(vm);
  };
}
