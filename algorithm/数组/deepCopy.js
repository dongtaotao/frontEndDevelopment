function deepClone(obj, map = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  if (obj == null || typeof obj != 'object') return obj;
  if (map.has(obj)) {
      return map.get(obj);
  }
  let t = new obj.constructor();
  map.set(obj, t);
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          t[key] = deepClone(obj[key], map);
      }
  }
  return t;
}
//测试用例
let obj = {
  a: 1,
  b: {
      c: 2,
      d: 3
  },
  d: new RegExp(/^\s+|\s$/g)
}

let clone_obj = deepClone(obj)
obj.d = /^\s|[0-9]+$/g
console.log(clone_obj)
console.log(obj)

function deepCopy(obj, cache = new WeakMap()) {
  if (!obj instanceof Object) return obj
  // 防止循环引用
  if (cache.get(obj)) return cache.get(obj)
  // 支持函数
  if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments)
    }
  }
  // 支持日期
  if (obj instanceof Date) return new Date(obj)
  // 支持正则对象
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  // 还可以增加其他对象，比如：Map, Set等，根据情况判断增加即可，面试点到为止就可以了

  // 数组是 key 为数字素银的特殊对象
  const res = Array.isArray(obj) ? [] : {}
  // 缓存 copy 的对象，用于处理循环引用的情况
  cache.set(obj, res)

  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Object) {
      res[key] = deepCopy(obj[key], cache)
    } else {
      res[key] = obj[key]
    }
  });
  return res
}

// 测试
const source = {
  name: 'Jack',
  meta: {
    age: 12,
    birth: new Date('1997-10-10'),
    ary: [1, 2, { a: 1 }],
    say() {
      console.log('Hello');
    }
  }
}
source.source = source
const newObj = deepCopy(source)
console.log(newObj.meta.ary[2] === source.meta.ary[2]); // false
console.log(newObj.meta.birth === source.meta.birth); // false
