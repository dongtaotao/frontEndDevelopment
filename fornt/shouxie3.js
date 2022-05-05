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