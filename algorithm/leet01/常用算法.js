// ================插入排序
function insert(ary) {
  let handle = [];
  handle.push(sry[0]);

  for(let i=1;i<ary.length;i++) {
    let A = ary[i];
    for(let j = handle.length -1; j>=0;j-- ) {
      let B = handle[j];
      if(A> B ) {
        handle.splice(j+1,0, A);
        break;
      }

      if(j===0) {
        handle.unshift(A);
      }
    }
  }
  return handle;
}

function maopao(ary) {
  for(let i=0;i<ary.length -1;i++) {
    for(let j = 0; j< ary.length - i-1; j++) {
      if(ary[j] > ary[j+1]) {
        let temp = ary[j];
        ary[j] = ary[j+1];
        ary[j+1] = temp;
      }
    }
  }
  return ary
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return ;
  //取数组最接近中间的数位基准，奇数与偶数取值不同，但不印象，当然，你可以选取第一个，或者最后一个数为基准，这里不作过多描述
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  //左右区间，用于存放排序后的数
  var left = [];
  var right = [];

  console.log('基准为：' + pivot + ' 时');
  for (var i = 0; i < arr.length; i++) {
      console.log('分区操作的第 ' + (i + 1) + ' 次循环：');
      //小于基准，放于左区间，大于基准，放于右区间
      if (arr[i] < pivot) {
          left.push(arr[i]);
          console.log('左边：' + (arr[i]))
      } else {
          right.push(arr[i]);
          console.log('右边：' + (arr[i]))
      }
  }
}

function quickSort(arr) {
  if (arr.length < 2) {
      return arr
  }
  let flag = arr[0]
  let left = []
  let right = []
  // 从第二个元素开始循环
  for (let i = 1; i < arr.length; i ++) {
      if (arr[i] < flag) {
          left.push(arr[i])
      }
      if (arr[i] > flag) {
          right.push(arr[i])
      }
  }
  return quickSort(left).concat([flag], quickSort(right))
}

// 作者：FruitBro
// 链接：https://juejin.im/post/5c84dac0e51d4557a74b8e80
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


//===============动态规划
给定⼀个整数数组 a，实现⼀个函数 countMax(a) ，
计算出从 a 中选择出多个不相邻元素组成最⼤的 和是多少。
var x = [1, 4, 5, 3]
countMax(x) // 7
var y = [3, 12, 6, 2, 4]
countMax(y) // 16

function countMax(arr) {
  const len = arr.length
  const dp = new Array(len).fill(0);
  dp[0] = arr[0]
  dp[1] = arr[1]
  dp[2] = arr[0] + arr[2]
  for (let i = 3; i < len; i++) {
    dp[i] = arr[i] + Math.max(dp[i - 2], dp[i - 3])
  }
  return Math.max(dp[len - 1], dp[len - 2])
}

console.log(countMax2([1, 4, 5, 3]))
console.log(countMax2([3, 12, 6, 2, 4]))

// 作者：BB小天使
// 链接：https://juejin.im/post/5e88458df265da4800039ed5
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//==========有效括号
var isValid = function(s) {
  const mappings = new Map();
  mappings.set("(", ")");
  mappings.set("{", "}");
  mappings.set("[", "]");
  const stack = [];
  for(let i=0; i< s.length; i++) {
    if(mappings.has(s[i])) {
      stack.push(mappings.get(s[i]))
    } else{
      if(stack.pop() !== s[i]) {
        return false
      }
    }
  }
  if(stack.length !== 0) {
    return false
  }
  return true
}

//================
每日一题 - 如何令a == 1 && a == 2 && a == 3 返回true？
let a = {
  value: 1,
  valueOf: function() {
    return this.value ++
  }
}

var tem = 1;
Object.defineProperty(window, 'a', {
  get: function() {
    return this.tem ++
  }
})

//==============
 //map
Array.prototype.map = function(callback){
  let newArr = [];
  for(let i=0;i<this.length;i++) {
    newArr.push(callback && callback(this[i], i, this))
  }
  return newArr
}

// filter
Array.prototype.filter = function(callback) {
  let newArr = [];
  for(let i=0;i<this.length;i++) {
    callback && callback(this[i],i, this) && newArr.push(callback(this[i],i, this))
  }
  return newArr;
}

const map = (arr, callback) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

const filter = (arr, callback) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const reduce = (arr, reduceCallback, init = 0) => {
  if(!Array.isArray(arr)) {
    return;
  }

  let val = init;
  for(let i=0, len = arr.length; i< len; i++) {
    val = reduceCallback(val, arr[i])
  }

  return val;

}

//=========数组反转
实现⼀个函数 reverse(a, n) ，
反转⼀个含有 n 个整数的数组 a（直接在数组a上操作，元素交换次数 尽可能少，不能使⽤js Array 类内置属性和⽅法）。

function reverse(arr) {
  let len = arr.length
  for (let start = 0; start < Math.floor(len / 2); start++) {
    let end = len - start - 1;
    [arr[start], arr[end]] = [arr[end], arr[start]] 
  }
  return arr
}
    //https://juejin.im/post/5e88458df265da4800039ed5 