2021前端岗面试整理 https://juejin.cn/post/6991724298197008421#heading-83
将有同样元素的数组进行合并 https://juejin.cn/post/6991724298197008421#heading-83 
// 例如： 
const arr = [
    ['a', 'b', 'c'],
    ['a', 'd'],
    ['d', 'e'],
    ['f', 'g'],
    ['h', 'g'],
    ['i']
]
// 运行后的返回结果是：
[
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h'],
    ['i']
]
// 思路一：
const arr = [['a', 'b', 'c'], ['a', 'd'], ['d', 'e'], ['f', 'g'], ['h', 'g'], ['i']]
function transform(arr){
    let res = []
    arr = arr.map(el => el.sort()).sort()
    const item = arr.reduce((pre, cur) => {
      if (cur.some(el => pre && pre.includes(el))) {
        pre = pre.concat(cur)
      } else {
        res.push(pre)
        pre = cur
      }
      return [...new Set(pre)]
    })
    res.push(item)
    return res;
}
transform(arr)
// console.log(transform(arr));

// 思路二： 

function r (arr) {
  const map = new Map()
  arr.forEach((array, index) => {
    const findAlp = array.find((v) => map.get(v))
    if (findAlp) {
      const set = map.get(findAlp)
      array.forEach((alp) => {
        set.add(alp)
        const findAlp2 = map.get(alp)
        if (findAlp2 && findAlp2 !== set) {
          for(const v of findAlp2.values()){
            set.add(v)
            map.set(v, set)
          }
        }
        map.set(alp, set)
      })
    } else {
      const set = new Set(arr[index])
      array.forEach((alp) => map.set(alp, set))
    }
  })
  const set = new Set()
  const ret = []
  for (const [key, value] of map.entries()) {
    if (set.has(value)) continue
    set.add(value)
    ret.push([...value])
  }
  return ret
}

4.2 手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求直到超过最大次数
https://juejin.cn/post/6844903986210816013#heading-25
function request(url, body, successCallback, errorCallback, maxCount = 3) {
  return fetch(url, body)
           .then(response => successCallback(response))
           .catch(err => {
               if (maxCount <= 0) return errorCallback('请求超时');
               return request(url, body, successCallback, errorCallback, --maxCount);
           });
}

// 调用
request('https://some/path', { method: 'GET', headers: {} }, (response) => {
  console.log(response.json());
}, (err) => console.error(err));


用 reduce 实现 map
function implementMapUsingReduce(list, func) {
  return list.reduce((acc, cur, i) => {
    acc[i] = func(cur);
    return acc;
  }, []);
}

const a = implementMapUsingReduce([1, 2, 3, 4], a => a + 1); // [2,3,4,5]
console.log(a);

const b = implementMapUsingReduce(["a", "b", "c"], a => a + "!"); // ['a!', 'b!', 'c!']
console.log(b);

const list = [{
  id: '1',
  name: 'test1',
  children: [
      {
          id: '11',
          name: 'test11',
          children: [
              {
                  id: '111',
                  name: 'test111'
              },
              {
                  id: '112',
                  name: 'test112'
              }
          ]
      },
      {
          id: '12',
          name: 'test12',
          children: [
              {
                  id: '121',
                  name: 'test121'
              },
              {
                  id: '122',
                  name: 'test122'
              }
          ]
      }
  ]
}];
const id = '112'
const fn = (value) => {
...
}
fn(id, list) // 输出 [1， 11， 112]

function getId(value, id) {
  
  let arr = []
  try {
    function getValue(value) {
      arr.push(value.id);
      if(value.id === id) {
        throw('');
        return;
      }

      if(value.children && value.children.length > 0) {
        value.children.forEach((item, index) => {
          getValue(item, id)
        })
        arr.pop()
      } else {
        arr.pop()
      }
    }
    getValue(value)
  } catch(e) {
    console.log(arr)
    return arr;
  }
}
getId(list.shift(), '112')


获取页面所有的 tagname
function getAllHTMLTags() {
  const tags = [...window.document.querySelectorAll("*")].map(
    dom => dom.tagName
  );
  return [...new Set(tags)];
}

/**
 * 千分位格式化（使用数组）  12,345  数组反转
 * @param n number
 */
 export function format1(n: number): string {
  n = Math.floor(n) // 只考虑整数

  const s = n.toString()
  const arr = s.split('').reverse()
  return arr.reduce((prev, val, index) => {
      if (index % 3 === 0) {
          if (prev) {
              return val + ',' + prev
          } else {
              return val
          }
      } else {
          return val + prev
      }
  }, '')
}


铜三铁四还不抓紧手撕代码!!!
https://juejin.cn/post/7087451381304393764#heading-9
console.log(add(1,2, 3))  //  打印6
console.log(add(1)(2,3))  //  打印6
console.log(add(1)(3)(2)) //  打印6
console.log(add(1,2)(3))  //  打印6

function add() {
  let res = [...arguments];
  function resultFn() {
    res = res.concat([...arguments]);
    return resultFn;
  }
  resultFn.valueOf = function() {
    return res.reduce((a,b) =>a+b);
  }
  return resultFn;
}
console.log(5+add(1,2)(3)(4))
// 输出15 


作者：邹小邹
链接：https://juejin.cn/post/7087451381304393764
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


多层嵌套的对象转换成一级对象 https://juejin.cn/post/7089816646277136421
/*
// 输入：
{
  a: {
    b: {
      c: {
        d: 1,
      },
      e: 2,
    },
    f: [1, 2],
  },
  g: 2,
}
// 输出：
{
  "a.b.c.d": 1,
  "a.b.e": 2,
  "a.f": [1, 2],
  g: 2,
}
*/ 
function flattenObj(obj) {
  // ...
}
参考答案，用递归
function flattenObj(obj) {
  const result = {};
  function dfs(obj, arr) {
    if (Object.prototype.toString.call(obj) !== "[object Object]") {
      result[arr.join(".")] = obj;
    } else {
      for (let p in obj) {
        dfs(obj[p], [...arr, p]);
      }
    }
  }
  dfs(obj, []);
  return result;
}

一级对象转换成多层嵌套对象 https://juejin.cn/post/7089816646277136421
/*
// 输入：
{
  "a.b.c.d": 1,
  "a.b.e": 2,
  "a.f": [1, 2],
  g: 2,
}
// 输出：
{
  a: {
    b: {
      c: {
        d: 1,
      },
      e: 2,
    },
    f: [1, 2],
  },
  g: 2,
}
*/ 
function nestedObj(obj) {
  // ...
}

// 将一级对象转换成多层嵌套对象
function nestedObj(obj) {
  const result = {};
  for (let p in obj) {
    const paths = p.split(".");
    let tmp = result;
    for (let i = 0; i < paths.length; i++) {
      let path = paths[i];
      if (i == paths.length - 1) {
        tmp[path] = obj[p];
        continue;
      }
      if (!tmp.hasOwnProperty(path)) {
        tmp[path] = {};
      }
      tmp = tmp[path];
    }
  }
  return result;
}


汇总区间(双指针) https://juejin.cn/post/7074511045720539173
一、题目描述：
给定一个无重复元素的有序数组，返回恰好覆盖数组中所有数字的最小有序区间范围列表。
输入： [0,1,2,4,5,7]
输出： ["0->2","4->5","7"]
function summaryRanges (nums) {
  let ans = []
  if (nums.length === 0) {
    return ans
  }
  nums.push(2 ** 32)
  let begin = nums[0]
  let end = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      end = nums[i]
      continue
    }
    if (begin !== end) {
      ans.push(begin + '->' + end)
    } else {
      ans.push(begin)
    }
    begin = nums[i]
    end = nums[i]
  }
  return ans
}

一句话算法
https://github.com/pwstrick/daily/blob/master/article/one/one.md

12. 实现一个函数sum函数 https://juejin.cn/post/7020562888657993741
实现一个函数sum函数满足以下规律
sum(1, 2, 3).valueOf() // 6 
sum(2, 3)(2).valueOf() // 7 
sum(1)(2)(3)(4).valueOf() // 10
sum(2)(4, 1)(2).valueOf() // 9

const sum = (...args) => {
  // 声明add函数，其实主要是缓存参数的作用
  // 注意add调用完成还是会返回add函数本身，使其可以链式调用
  const add = (...args2) => {
    args = [ ...args, ...args2 ]
    return add
  }
  // 求和计算
  add.valueOf = () => args.reduce((ret, num) => ret + num, 0)

  return add
}

// 测试
console.log(sum(1, 2, 3).valueOf()) // 6
console.log(sum(2, 3)(2).valueOf()) // 7
console.log(sum(1)(2)(3)(4).valueOf()) // 10
console.log(sum(2)(4, 1)(2).valueOf()) // 9

js连续最多的字符 https://segmentfault.com/a/1190000040827579
JavaScript获取字符串中连续出现次数最多的字符
var str = 'aaaabcc4aa4ddcfceeeeeeeggg';
function getStrMaxCount1(str){
    var resultStr = '';
    var resultCount = 0;
    var i = 0;
    var j = 0;
    while(i < str.length){
        let strStart = str[i];
        // 不相等则说明 strStart 不再连续了
        if(strStart != str[++j]){
            let count = j - i;
            console.log(`字符：${strStart}出现了：${count}次！`);
            if(count > resultCount){
                resultCount = count;
                resultStr = strStart;
            }
            i = j;
        }
    }
    return {
        count: resultCount,
        str: resultStr
    };
}
// {count: 7, str: 'e'}
console.log(getStrMaxCount1(str)); 


多维数组的全排列问题
https://juejin.cn/post/7087760448434470926
[[a,b],[1,2]]=== [a1,a2,b1,b2]
const permutate = (arr) => {
  // res为第一个数组
  let res = arr[0].slice();

  // 从第二个数组开始遍历
  for (let i = 1; i < arr.length; i++) {
      const pre = res.slice();
      res = [];
      pre.forEach(item => {
          arr[i].forEach(item2 => {
              res.push(item + item2);
          })
      })
  }
  return res
}

permutate([['A','B'], ['a','b'], [1, 2]])


将js对象转化为树形结构  https://juejin.cn/post/6946136940164939813
// 转换前：
source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 2,
  name: 'div'
}]
// 转换为: 
tree = [{
id: 1,
pid: 0,
name: 'body',
children: [{
  id: 2,
  pid: 1,
  name: 'title',
  children: [{
    id: 3,
    pid: 1,
    name: 'div'
  }]
}
}]


function jsonToTree(data) {
  // 初始化结果数组，并判断输入数据的格式
  let result = []
  if(!Array.isArray(data)) {
    return result
  }
  // 使用map，将当前对象的id与当前对象对应存储起来
  let map = {};
  data.forEach(item => {
    map[item.id] = item;
  });
  // 
  data.forEach(item => {
    let parent = map[item.pid];
    if(parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
} 
