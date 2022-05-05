
Function.prototype.apply = function(context = window) {
  context.fn = this;
  let result;
  if(arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
}

Function.prototype.myCall = function(content = window) {
  if(typeof this !== 'function') {
    throw new Error('000')
  }
  content.fn = this;
  let args = [...arguments].slice(1);
  let result = content.fn(...args);
  delete context.fn;
  return result;
}

function create() {
  let obj = {};
  let Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  let resule = Con.apply(obj,arguments);
  return typeof resule === 'object' ? resule : obj;
}

// let a =[];
// a.flat(Infinity);
// a instanceof Array;
// a.constructor === Array;
// Object.prototype.toString.call();
// Array.isArray()

function bubbleSort(arr) {
  for(let i = 0;i<arr.length -1;i++) {
    for(let j=0;j<arr.lrngth-1-i; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

function quickSort(arr) {
  if(arr.length <=1) {
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let midItem = arr.splice(mid, 1)[0];
  let left = [];
  let right = [];
  for(let i=0;i<arr.length;i++) {
    if(arr[i]>=midItem) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return quickSort(left).concat([midItem], quickSort(right));
}

//https://leetcode-cn.com/problems/remove-element/

  //给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，
  //返回移除后数组的新长度。
var removeElement = function (nums, val){
  for(let i = 0; i< nums.length; i++) {
    if(nums[i] === val) {
      nums.splice(i, 1);
      i--
    }
  }
  return nums.length;
}

// 验证回文
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  if(s.length < 2) {
    return true;
  }

  let left = 0;
  let right = s.length -1;

  while(left< right) {
    if(s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true
}

//买卖股票==============================
var maxProfix = function(prices) {
  if(prices.length === 0) {
    return 0;
  }

  let minPrice = prices[0],
    maxProfix = 0;
  for(let i=0; i< prices.length;i++ ){
    if(prices[i] < minPrice) {
      minPrice = prices[i]
    } else if(prices[i] - minPrice > maxProfix) {
      maxProfix = prices[i] - minPrice
    }
  }

  return maxProfix;
}

//存在重复元素
var containDuplicate = function(nums) {
  const set = new Set();
  for(let i=0;i<nums.length;i++) {
    if(set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  return false
}
//存在重复元素2
var contains = function(nums, k) {
  const map = new Map();
  for(let i=0;i<nums.length;i++) {
    if(map.has(nums[i]) && (i - map.get(nums[i] <= k))) {
      return true;
    } else {
      map.set(nums[i], i)
    }
  }
}
//两个数组交集
var intersection = function(nums1, nums2) {
  const result = new Set();
  const set = new Set();
  for(num of nums1) {
    if(set.has(num)) {
      result.add(num)
    }
  }
  return Array.from(result)
}

class Stack{
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    this.stack.pop()
  }
  peek() {
    return this.stack[this.stack.length -1]
  }
  getCount() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0
  }
}

function Parent(value) {
  this.val = value
}

Parent.prototype.getValue = function() {
  return this.val
}

function Child(value) {
  Parent.call(this, value)
}

Child.prototype.constructor = Child;
Child.prototype = new Parent();;

class Parent {
  constructor(value) {
    this.val = value;
  } 

  getValue() {
    return this.val;
  }
}

class Child extends Parent{
  constructor(value) {
    super(value);
    this.value = value
  }

}

function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.type = 'text/javascript';
  window[jsonpCallback] = function(data) {
    success && success(data)
  }

  document.body.appendChild(script)
}

function flat(arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? flat(next) : ne)
  }, [])
}

function flat4(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  arr == arr.flat(Infinity)
  return arr;
}

function once(func) {
  var done;
  return function() {
    if(!done) {
      func.apply(null, arguments);
      done = true;
    }
  }
}