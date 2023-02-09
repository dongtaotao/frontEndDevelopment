「2021」高频前端面试题汇总之手写代码篇 
https://juejin.cn/post/6946136940164939813 

盘点那些 JS 手写题
https://juejin.cn/post/7082027102706335780

1. 手写 Object.create 
function create(obj) {
  function F(){}
  F.prototype = obj;
  return new F();
}

function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
      prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

数组扁平化
function flatten(arr) {
  return arr.reduce(function(prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  },[])
}

let arr = [1, [2, [3, 4]]];
function flatten(arr) { 
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]

function flatten(srr) {
  return srr.flat(Infinity)
}

4. 用Promise实现图片的异步加载
let imageAsync = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = function() {
      resolve(Iamge)
    }
    img.onerror = () => {
      reject('2323')
    }
  })
}

9. 实现双向数据绑定
let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')
// 数据劫持
Object.defineProperty(obj, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('获取数据了')
  },
  set(newVal) {
    console.log('数据更新了')
    input.value = newVal
    span.innerHTML = newVal
  }
})
// 输入监听
input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})

12. 字符串出现的不重复最长长度
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let i = -1
  let res = 0
  let n = s.length
  for (let j = 0; j < n; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]))
    }
    res = Math.max(res, j - i)
    map.set(s[j], j)
  }
  return res
};

14. 实现 jsonp
function assScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  document.body.appendChild(script)
}

addScript("http://xxx.xxx.com/xxx.js?callback=handleRes");

function handleRes(res) {
  console.log(res)
}
// 接口返回的数据格式
handleRes({a: 1, b: 2});

Object.prototype.toString().call('eew')

JS原生API实现
apply()
Function.prototype.myApply=function(context,args) {
  context.fn=this//为context设置函数属性
  let result=context.fn(...args)//调用函数
  delete context.fn//删除context的函数属性
  return result
}
call()
//除了...args
//和apply都一样
Function.prototype.myCall=function(context,...args) {
  context.fn=this
  let result=context.fn(...args)
  delete context.fn
  return result
}

大数相加
function bigAdd(a, b) {
  const aArr = a.split('')
  const bArr = b.split('')

  let flag = 0
  let result = []
  while(aArr.length || bArr.length) {
    const left = aArr.pop() || 0
    const right = bArr.pop() || 0
    const value = Number(left) + Number(right) + flag
    result.unshift(value % 10)
    flag = parseInt(value / 10)
  }
  if (flag) {
    result.unshift(flag)
  }
  return result.join('')
}

6. 十进制转换成任意进制
function tenToOther(num, base) {
  const baseNumber = '0123456789abcdefghijklmnopqrstuvwxyz'
  const result = []
  while (num) {
      const rest = num % base
      num = Math.floor(num / base) 
      result.unshift(baseNumber[rest])
  }
  return result.join('') 
}

//  选择排序
function func(arr){
  for(var i = 0; i <arr.length;i++){
      var mun = i
      for(var j = i; j < arr.length; j++){
          if(arr[j] < arr[mun]){
              mun = j
          }
      }
      var temp = arr[mun]
      arr[mun] = arr[i]
      arr[i] = temp
  }
  return arr
}

插入排序
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let target = arr[j];
    while (j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}
// console.log(insertSort([3, 6, 2, 4, 1]));

// 插入排序
/**
 * 记住你是怎么打牌的就知道插入排序怎么实现了
 * 1. 首先有一个有序的序列，可以认为第一个元素就是已排序的序列
 * 2. 从未排序序列中取一个元素出来，往有序序列中找到合适的位置，如果该位置比元素大，则后移动, 否则继续往前找
 */

 const insertSort = (array) => {
  for (let i = 1, length = array.length; i < length; i++) {
    let j = i - 1
    const curValue = array[ i ]

    while (j >= 0 && array[ j ] > curValue) {
      array[ j + 1 ] = array[ j ]
      j--
    }

    array[ j + 1 ] = curValue
  }

  return array
}

console.log(insertSort([ -1, 10, 10, 2 ])) // [-1, 2, 10, 10]

20. setTimeout模拟setInterval https://juejin.cn/post/7018337760687685669
const simulateSetInterval = (func, timeout) => {
  let timer = null
  const interval = () => {
    timer = setTimeout(() => {
      // timeout时间之后会执行真正的函数func
      func()
      // 同时再次调用interval本身，是不是有点setInterval的感觉啦
      interval()
    }, timeout)
  }
  // 开始执行 
  interval()
  // 返回用于关闭定时器的函数 
  return () => clearTimeout(timer)
}

const cancel = simulateSetInterval(() => {
  console.log(1)
}, 300)

setTimeout(() => {
  cancel()
  console.log('一秒之后关闭定时器')
}, 1000)

setInterval模拟setTimeout
const simulateSetTimeout = (fn, timeout) => {
  let timer = null
  timer = setInterval(() => {
    // 关闭定时器，保证只执行一次fn，也就达到了setTimeout的效果了
    clearInterval(timer)
    fn()
  }, timeout)
  // 返回用于关闭定时器的方法
  return () => clearInterval(timer)
}

const cancel = simulateSetTimeout(() => {
  console.log(1)
}, 1000)

// 一秒后打印出1

26. 版本比较的两种方式 https://juejin.cn/post/7018337760687685669

// 比较版本号

const compareVersion = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')

  const len1 = version1.length
  const len2 = version2.length
  let maxLen = len1
  const fillZero = (array, len) => {
    while (len--) {
      array.push(0)
    }
  }

  if (len1 < len2) {
    fillZero(version1, len2 - len1)
    maxLen = len2
  } else if (len1 > len2) {
    fillZero(version2, len1 - len2)
    maxLen = len1
  }

  for (let i = 0; i < maxLen; i++) {
    const a = parseInt(version1[i])
    const b = parseInt(version2[i])
    if ( a === b) {
      // i++
    } else if (a > b) {
      return 1
    } else {
      return -1
    }
  }

  return 0
}

// 也可以不补零
const compareVersion = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')

  const maxLen = Math.max(version1.length, version2.length)

  for (let i = 0; i < maxLen; i++) {
    const a = parseInt(version1[i]??0)
    const b = parseInt(version2[i]??0)
    if ( a === b) {
      // i++
    } else if (a > b) {
      return 1
    } else {
      return -1
    }
  }

  return 0
}

console.log(compareVersion('1.0', '1.0.0'))

// 扩展1比较多个版本号并排序

const compareMoreVersion = (versions) => {
  return versions.sort((a, b) => compareVersion(a, b))
}
console.log(compareMoreVersion(['1.0', '3.1', '1.01']))

简化版
function deepCopy(obj) {
  var ret = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        ret[key] = deepCopy(obj[key]);
      } else {
        ret[key] = obj[key];
      }    
    }
  }
  return ret;
}

js中数组对象去重的方法
var arr = [{
  key: '01',
  value: '乐乐'
}, {
  key: '02',
  value: '博博'
}, {
  key: '03',
  value: '淘淘'
},{
  key: '04',
  value: '哈哈'
},{
  key: '01',
  value: '乐乐'
}];


//  方法1：利用对象访问属性的方法，判断对象中是否存在key
var result = [];
var obj = {};
for(var i =0; i<arr.length; i++){
  if(!obj[arr[i].key]){
     result.push(arr[i]);
     obj[arr[i].key] = true;
  }
}
console.log(result); // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]

//  方法2：利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
var obj = {};
arr = arr.reduce(function(item, next) {
  obj[next.key] ? '' : obj[next.key] = true && item.push(next);
  return item;
}, []);
console.log(arr); // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]

解析 URL 参数为对象
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
          paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
          paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
        paramsObj[param] = true;
    }
  })
  return paramsObj; 
}


10个常见的前端手写功能，你全都会吗？
https://juejin.cn/post/7031322059414175774

题目描述：给你一个对象，统计一下它的层数  https://juejin.cn/post/7023906112843808804#heading-12
const obj = {
  a: { b: [1] },
  c: { d: { e: { f: 1 } } }
}

console.log(loopGetLevel(obj)) // 4

function loopGetLevel(obj) {
  var res = 1;
  function computedLevel(obj, level) {
      var level = level ? level : 0;
      if (typeof obj === 'object') {
          for (var key in obj) {
              if (typeof obj[key] === 'object') {
                  computedLevel(obj[key], level + 1);
              } else {
                  res = level + 1 > res ? level + 1 : res;
              }
          }
      } else {
          res = level > res ? level : res;
      }
  }
  computedLevel(obj)

  return res
}

对象的扁平化
const obj = {
  a: {
        b: 1,
        c: 2,
        d: {e: 5}
     },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }
 
 flatten(obj) 结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }

const isObject = (val) =>  typeof val === "object" && val !== null

function flatten(obj) {
  if (!isObject(obj)) return
  const res = {}
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`)
        })
      } else {
        for(let key in cur) {
          dfs(cur[key], `${prefix}${prefix ? '.' : ''}${key}`)
        }
      }
    } else {
      res[prefix] = cur
    }
  }
  dfs(obj, '')
  return res
}

// 测试
console.log(flatten(obj))  
