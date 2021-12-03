import { observe } from './observer/index';

export function initState(vm) {
  // console.log(vm);
  const opts = vm.$options;
  if (opts.props) {
    initProps(vm);
  }
  if (opts.methods) {
    initMethods(vm);
  }
  if (opts.data) {
    initData(vm);
  }
  if (opts.computed) {
    initComputed(vm);
  }
  if (opts.watch) {
    initWatch(vm);
  }
}
function initProps(vm) {}
function initData(vm) {
  // 初始化data的操作
  let data = vm.$options.data;
  // . vm._data才能在外面的new Vue的过程中拿到data
  vm._data = data = typeof data === 'function' ? data.call(vm) : data;
  // console.log(data);
  // 将对象变成响应式的 ，通过Object.defineProperty进行劫持
  observe(data);
}
function initMethods(vm) {}
function initComputed(vm) {}
function initWatch(vm) {}
