（万字好文！）你可能需要的数据结构与算法最详细的入门教材了！
https://juejin.cn/post/6903341971008389134#heading-16

// compose聚合函数的顺序是从右到左 from right to left
const compose = function(...funs) {
return funs.reduce((a, d) => {
    return (...args) => {
    return a(b(...args))
    }
})
}

function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

//所以compose(fn1, fn2, fn3) (...args) 相当于 fn1(fn2(fn3(...args)))

// 摘自 https://github.com/reactjs/redux/blob/master/src/compose.js
export default function compose(...funcs) { 
if (funcs.length === 0) {    
    return arg => arg  
}  
if (funcs.length === 1) {
    return funcs[0]  
}  
return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
// 链接：https://juejin.im/post/5e9ab4cef265da47f406f74b

//编写一个方法，求一个字符串的字节长度
function GetBytes(str) {
    var len = str.length
    var bytes = len
    for (var i = 0; i < len; i++) {
        if (str.charCodeAt(i) > 255) {
            bytes++
        }
    }
    return bytes
}
alert(GetBytes('你好，world'))

// 作者：FruitBro
// 链接：https://juejin.im/post/5c84dac0e51d4557a74b8e80
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

function curry(fn, ...args) {
    if(args.length >= fn.length) {
        return fn.apply(null, args);
    }

    return (...args2) => curry(fn, ...args, ...args2);
}

const add = curry(function(a, b, c) {
return a + b + c;
});
add(1, 2, 3);
add(1)(2)(3);
add(1, 2)(3);
add(1)(2, 3);

// 链接：https://juejin.im/post/5e77888ff265da57187c7278

// 十进制转二进制
var divBy2= function(number) {
    var stack = new Stack();
    var yushu;
    var string2 = '';
    while(number > 0) {
        yushu = number % 2;
        stack.push(yushu);
        number = Math.floor(number/2);
    }
    while(!stack.isEmpty()) {
        string2 += stack.pop();
    }
    return string2;
}

已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
function newArr(arr) {
    while(arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    arr = [...new Set(arr)].sort((a, b) => {
        return a-b
    })

    return arr
}

console.log(newArr(arr))


// 红灯3秒亮一次，绿灯1秒亮一次 ，黄灯2秒亮一次，意思就是3秒执行一次red函数，2秒执行一次green函数，1秒执行一次yellow函数，不断交替重复亮灯，意思就是按照这个顺序一直执行这3个函数，这步可以利用递归来实现。

function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

var light = function (timmer, cb) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            cb();
            resolve();
        }, timmer);
    });
};

var step = function () {
    Promise.resolve().then(function () {
        return light(3000, red);
    }).then(function () {
        return light(2000, green);
    }).then(function () {
        return light(1000, yellow);
    }).then(function () {
        step();
    });
}

step();

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
// 扁平化
let flatArr = arr.flat(4)
// 去重
let disArr = Array.from(new Set(flatArr))
// 排序
let result = disArr.sort(function(a, b) {
    return a-b
})
console.log(result)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let arr =[[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
function newArray ( ) {
    while(arr.some(Array.isArray)){
        arr = [].concat(...arr)
    }
    arr = [...new Set(arr)].sort((a,b)=>{
        return a-b
    })
    return arr
}
newArray()
console.log(arr);

var insertion = (arr) => {
    return arr.flat(Infinity).reduce((pre, cur)=> {
        return !pre.include(cur) ? pre.concat(cur) : pre
    },[]).sort((a, b) => a-b)
}

给定两个数组，编写一个函数来计算它们的交集。
示例 1:
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
示例 2:
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
说明:

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

var intersection = function(nums1, nums2) {
    let map1 = new Set(nums1);
    let map2 = new Set(nums2);
    let res = []
    map1.forEach((item) => {
        if(map2.has(item)){
            res.push(item)
        }
    })
    return res
};

用 DFS or BFS 来实现遍历DOM树
/**
 * 从页面根节点开始，遍历页面上所有 DOM 元素，并且返回每个DOM标签的名称和出现次数
 * 分别用「深度优先」和「广度优先」的策略来实现
 * @param {HTMLElement} 页面根节点
 * @return {Object} - 包含页面上所有标签名-该标签出现次数的对象,eg: { div: 10, p: 20, h1: 3 }
 */
  function collectAllElements(e) {
    // your code here...
}
<div id="app">
<div>
    <p >
        <span></span>
        <span></span>
        <span></span>
    </p>
    <p ></p>
    <h1 ></h1>
    <h1 ></h1>
    <input />
</div>
</div>
function collectAllElements(node) {
    let res = {};
    const loop = (node) => {
        if(res[node.tagName.toLowerCase()]) {
          res[node.tagName.toLowerCase()] +=1; 
        } else {
          res[node.tagName.toLowerCase()] = 1;
        }
        const loopChild = () => {
            let length = node.children.length;
            if(length) {
                for(let i=0; i< length;i++) {
                  loop(node.children[i])
                }
            }
        }
        loopChild();
    }
    loop(node);
    return res
}

var nodeObj =collectAllElements(document.getElementById("app"))
// console.log(nodeObj)

var arr=[];
//深度优先
function traversalDFSDOM (rootDom) {
    if(!rootDom)return;
    if(rootDom.children.length==0){
        arr.push(rootDom)//没有孩子节点，表示是个叶子节点，将节点push到数组中
        return;
    }
    arr.push(rootDom)//非孩子节点，在每次遍历它的孩子节点之前先把它push到数组中
    for(var i=0;i<rootDom.children.length;i++){
        traversalDFSDOM(rootDom.children[i])//递归调用
    }

}
traversalDFSDOM(document.getElementById("app"))
console.log(arr)


function jsonp({url, params, callback}) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        window[callback] = function(data) {
            resolve(data);
            document.body.appendChild(script)
        }
        params = {...params, callback};
        let arrs = [];
        for(let key in params) {
          arrs.push(`${key} = ${params[key]}`)
        }
        script.src = `${url}?${arr.join('&')}`
        document.body.appendChild(script)
    })
}

jsonp({
    url: 'http://localhost:3000/say',
    params: { wd: 'Iloveyou' },
      callback: 'show'
    }).then(data => {
    console.log(data)
})

const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        if(timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay) 
    }
}

const throttle = (fn, delay = 50) => {
    let flag = true;
    return (...args) => {
        if(!flag) return;

        flag = false;
        setTimeout(() => {
            fn.apply(this, args);
            flag = true
        },delay)
    }
}

const instanceOf = (L, R) => {
    let L = L.__proto__;
    let R = R.prototype;
    while(true) {
        if(L === null) {
            return false
        }
        if(L === R) {
            return true
        }
        L = L.__proto__;
    }
}

const newOb = () => {
    const obj = {};
    let Con = [].shift.call(arguments);

    obj.__proto__ = Con.prototype;
    let result = Con.apply(obj, arguments);

    return typeof result === 'object' ? result : obj;
}

// Object.create

function create(proto) {
    function F() {}
    F.prototype = proto;
    return new F()
}

二分法
function binarySearch(A,x) {
    var low = 0, high = A.length -1;
    while(low <= high) {
        var mid = Math.floor((low + high) /2);
        if(x === A[mid]) {
            return mid
        }

        if(x < A[mid]) {
            high = mid -1
        } else {
            low = mid +1
        }
    }
    return -1
}

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i< nums.length; i++) {
        let k = target - nums[i];
        if(map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i); 
    }
    return []       
}  