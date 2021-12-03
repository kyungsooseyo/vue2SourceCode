class Observer {
  constructor(value) {
    // 使用defineProperty 重新定义属性
    this.walk(value);
    // console.log(value);
  }
  walk(data) {
    let keys = Object.keys(data); //获取对象key
    keys.forEach((key) => {
      defineReactive(data, key, data[key]);
    });
  }
}
function defineReactive(data, key, value) {
  //~ 如果value还是一个对象，就递归进行劫持
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      // console.log('用户获取值');
      return value;
    },
    set(newVal) {
      // console.log('用户设置值了');
      if (newVal === value) return;
      observe(newVal); // ~如果新的值仍然为对象，则继续进行拦截
      value = newVal;
    },
  });
}
export function observe(data) {
  // 在data中必须return个object才能进行观测
  if (typeof data !== 'object' && data === null) {
    return;
  }
  return new Observer(data);
}
