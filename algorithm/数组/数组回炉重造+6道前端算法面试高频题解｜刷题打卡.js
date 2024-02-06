在刷题之前让我们先来一起回顾一下 JavaScript 中数组的基础知识。
数组是一种线性表数据结构，它用一组连续的内存空间，来存储一组具有相同类型的数据。
数组可以根据索引下标随机访问(时间复杂度为 O(1))，这个索引通常来说是数字，用来计算元素之间的存储位置的偏移量。
与其他编程语言不同，JavaScript 中的数组长度可以随时改变，数组中的每个槽位可以储存任意类型的数据，并且其数据在内存中也可以不连续。
上文提到，这个索引通常是数字，也就是说在 JavaScript 中，通过字符串也可以访问对应的元素：
const arr = [0, 1, 2]
arr['1'] // 1
复制代码
其实，JavaScript 中的数组是一种比较特殊的对象，因为在 JavaScript 中，对象的属性名必须是字符串，这些数字索引就被转化成了字符串类型。
创建数组
// 1. 使用 Array 构造函数
let webCanteen = new Array() 
// 初始为 20 的数组
let webCanteen = new Array(20)
// 传入要保存的元素
let webCanteen = new Array('食堂老板', '店小二', '大厨')
// 如果传入了非数值，则会创建一个只包含该特定值的数组
let webCanteen = new Array('前端食堂')
// 省略 new 操作符
let webCanteen = Array(20)

// 2. 使用数组字面量

let webCanteen = ['食堂老板', '店小二', '大厨']
let webCanteen = []
复制代码
ES6 新增了 2 个用于创建数组的静态方法：Array.of、Array.from。
Array.of 用于将一组参数转换为数组实例(不考虑参数数量和类型)，而 Array.from 用于将类数组结构和可遍历对象转换为数组实例(浅拷贝)。
// Array.of 和 Array 构造函数之间的区别在于处理单个数字参数
Array(5)  // [, , , , ,]
Array(1, 2, 3) // [1, 2, 3]

Array.of(5) // [5]
Array.of(1, 2, 3) // [1, 2, 3]
复制代码
// Array.from 拥有 3 个参数
// 1. 类数组对象，必选
// 2. 加工函数，新数组中的每个元素会执行该回调，可选
// 3. this，表示加工函数执行时的 this，可选

const obj = {0: 10, 1: 20, 2: 30, length: 3}
Array.from(obj, function(item) {
    return item * 2
}, obj)
// [20, 40, 60]

// 不指定 this 的话，加工函数可以是一个箭头函数
Array.from(obj, (item) => item * 2)
复制代码
检测数组的六种方法
let arr = []
// 1. instanceof
arr instanceof Array
// 2. constructor
arr.constructor === Array
// 3. Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(arr)
// 4. getPrototypeOf
Object.getPrototypeOf(arr) === Array.prototype
// 5. Object.prototype.toString
Object.prototype.toString.call(arr) === '[object Array]'
// 6. Array.isArray ES6 新增
Array.isArray(arr)
复制代码
注意，前 4 种方法比较渣，丝毫不负责任，比如我们将 arr 的 __proto__ 指向了 Array.prototype 后：
let arr = {
    __proto__: Array.prototype
}
// 1. instanceof
arr instanceof Array // true
// 2. constructor
arr.constructor === Array // true
// 3. Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(arr) // true
// 4. getPrototypeOf
Object.getPrototypeOf(arr) === Array.prototype // true
复制代码
截至 ES10 规范，数组共包含 35 个标准的 API 方法和一个非标准的 API 方法
创建数组：Array.of、Array.from
改变自身(9 种)：pop、push、shift、unshift、reverse、sort、splice、copyWithin、fill
不改变自身(12 种)：concat、join、slice、toString、toLocaleString、valueOf、indexOf、lastIndexOf、未形成标准的 toSource，
以及 ES7 新增的方法 includes，以及 ES10 新增的方法 flat、flatMap
不会改变自身的遍历方法一共有(12 种)： forEach、every、some、filter、map、reduce、reduceRight，以及 ES6 新增的方法 find
findIndex、keys、values、entries。
本文就不给大家一一去介绍这些 API 的用法了，目的是为大家起个头，如果你对数组的 API 还没有烂熟于心的话，可以找个整块的时间统一的进行系统学习。
因为这些 API 正是我们日常开发中的武器库，彻底搞清楚它们会大大提高开发效率，避免在开发中频繁的查阅文档。
我按照如上规律整理了一张表格，方便你总结。

改变自身不改变自身遍历方法(不改变自身)ES5及以前pop、push、shift、unshift、reverse、sort、spliceconcat、join、slice、toString、
toLocaleString、valueOf、indexOf、lastIndexOfforEach、every、some、filter、map、reduce、reduceRightES6+copyWithin、
fillincludes、flat、flatMap、toSourcefind、findIndex、keys、values、entries
共同点
其实数组中的方法有一些共同之处，我们可以将其整理出来，更加方便我们理解和记忆。

插入元素的方法，比如 push、unshift 都返回数组新的长度。
删除元素的方法，比如 pop、shift、splice 都返回删除的元素，或者返回删除的多个元素组成的数组。
部分遍历方法，比如 forEach、every、some、filter、map、find、findIndex，它们都包含 function(value, index, array) {} 和 thisArg 这样两个形参。

定型数组
定型数组（typed array）是 ECMAScript 新增的结构，目的是提升向原生库传输数据的效率。这部分的内容本文不再展开，有兴趣的同学们可以自行学习。
开启刷题

前端食堂的 LeetCode 题解仓库

年初立了一个 flag，上面这个仓库在 2021 年写满 100 道前端面试高频题解，目前进度已经完成了 50%。
如果你也准备刷或者正在刷 LeetCode，不妨加入前端食堂，一起并肩作战，刷个痛快。
回顾了 JavaScript 中数组的基本知识后，马上开启我们愉快的刷题之旅，我整理了 6 道高频的 LeetCode 数组题及题解如下。
01 两数之和
🔗原题链接
1.暴力法
符合第一直觉的暴力法，潜意识里要学会将两数之和转换为两数之差。
然后问题就变得像切菜一样简单了，双层循环找出当前数组中符合条件的两个元素，并将它们的索引下标组合成数组返回即所求。
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j]
            }
        }
    }
}
复制代码

时间复杂度：O(n^2)
空间复杂度：O(1)

写出这种方法是不会让面试官满意的，所以接下来我们要想办法进行优化。
2.借用 Map
算法优化的核心方针基本上都是用空间换时间。
我们可以借用 Map 存储遍历过的元素及其索引，每遍历一个元素时，去 Map 中查看是否存在满足要求的元素。
如果存在的话将其对应的索引从 Map 中取出和当前索引值组合为数组返回即为所求，如果不存在则将当前值作为键，当前索引作为值存入。
题目要求返回的是数组下标，所以 Map 中的键名是数组元素，键值是索引。
const twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
}
复制代码

时间复杂度：O(n)
空间复杂度：O(n)

02 盛水最多的容器
🔗原题链接
虽然是中等难度，但这道题解起来还是比较简单的，老规矩，我们看下符合第一直觉的暴力法：
暴力法
幼儿园数学题：矩形面积 = 长 * 宽
放到我们这道题中，矩形的长和宽就分别对应：

长：两条垂直线的距离
宽：两条垂直线中较短的一条的长度

双重 for 循环遍历所有可能，记录最大值。
const maxArea = function(height) {
    let max = 0 // 最大容纳水量
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            // 当前容纳水量
            let cur = (j - i) * Math.min(height[i], height[j])
            if (cur > max) {
                max = cur
            }
        }
    }
    return max
}
复制代码

时间复杂度：O(n^2)
空间复杂度：O(1)

暴力法时间复杂度 O(n^2) 太高了，我们还是要想办法进行优化。
双指针
我们可以借用双指针来减少搜索空间，转换为双指针的视角后，回顾矩形的面积对应关系如下：
(矩形面积)容纳的水量 = (两条垂直线的距离)指针之间的距离 * (两个指针指向的数字中的较小值)两条垂直线中较短的一条的长度
设置两个指针，分别指向头和尾(i指向头，j指向尾)，不断向中间逼近，在逼近的过程中为了找到更长的垂直线：

如果左边低，将i右移
如果右边低，将j左移

有点贪心思想那味儿了，因为更长的垂直线能组成更大的面积，所以我们放弃了较短的那一条的可能性。
但是这么做，我们有没有更能漏掉一个更大的面积的可能性呢？
先告诉你答案是不会漏掉。
关于该算法的正确性证明已经有很多同学们给出了答案，感兴趣的请戳下面链接。

算法正确性证明

const maxArea = function(height) {  
    let max = 0 // 最大容纳水量
    let left = 0 // 左指针
    let right = height.length - 1 // 右指针
    while (left < right) {
        // 当前容纳水量
        let cur = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(cur, max)
        height[left] < height[right] ? left ++ : right --
    }

    return max
};
复制代码

时间复杂度：O(n)
空间复杂度：O(1)

03 三数之和
🔗原题链接
先明确，题目不仅是要求 a + b + c = 0，而且需要三个元素都不重复。
所以我们可以先将数组从小到大排序，排序后，去除重复项会更加简单。

层循环指针 i 遍历数组，题目要求三数之和为 0，考虑此次循环中的数若大于 0，另外两个数肯定也大于 0，则当前位置下无解。
重，如果当前元素和前一个元素相同时，直接跳过即可。
层循环借助双指针夹逼求解，两个指针收缩时也要去除重复的位置。
数之和为 0 时，将当前三个指针位置的数字推入数组即所求。若当前和小于 0 则将左指针向右移动，若当前和大于 0 则将右指针向左移动。

const threeSum = function(nums) {
    const result = []
    const len = nums.length
    if (len < 3) {
        return result
    }
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let L = i + 1
        let R = len - 1
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                result.push([nums[i], nums[L], nums[R]])
                while(nums[L] === nums[L + 1]){
                    L++
                }
                while(nums[R] === nums[R - 1]){
                    R--
                }
                L++
                R--
            } else if (sum < 0) {
                L++
            } else {
                R--
            }
        }
    }
    return result
}
复制代码

时间复杂度：O(n^2)
空间复杂度：O(1)

04 删除排序数组中的重复项
🔗原题链接
双指针
题目要求原地删除重复出现的元素，不要使用额外的数组空间，返回移除后数组的新长度。
先明确，这道题给我们提供的是排好序的数组，所以重复的元素必然相邻。
所以实际上我们只需要将不重复的元素移到数组的左侧，并返回其对应的长度即可。

借助双指针，i 从索引 0 开始，j 从索引 1 开始。
当前项 nums[j] 与前一位置 nums[j - 1] 相等时，j++ 跳过重复项。
当二者不相等时，意味着不是重复项，此时需要将 i 指针右移， 并将 nums[j] 复制到此时的 nums[i] 位置上，然后将指针 j 右移。
重复上述过程，直到循环完成，最终返回 i + 1，因为题目要求返回长度，i 是索引位置，加 1 即所求。

const removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    let i = 0
    const n = nums.length
    for (let j = 1; j < n; j++) {
        if (nums[j] != nums[j - 1]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};
复制代码

时间复杂度：O(n)
空间复杂度：O(1)

05 加一
🔗原题链接
加一，其实就是小学数学题，很简单，我们逐步来分析。
数字 9 加 1 会进位，其他的数字不会。
所以，情况无非下面这几种：

1 + 1 = 2 末位无进位，则末位加 1 即可。
299 + 1 = 300 末位有进位，首位加 1。
999 + 1 = 1000 末位有进位，最终导致前方多出一位，循环之外单独处理。

const plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i]++
            return digits
        }
    }
    digits.unshift(1)
    return digits
};
复制代码

时间复杂度：O(n)
空间复杂度：O(1)

06 移动零
🔗原题链接
双指针
题目要求将所有 0 移动到数组的末尾，同时还要保持非零元素的相对顺序。
在此基础上附加了两个条件：

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

我们可以借助双指针来进行求解，求解过程如下：

初始化双指针 i 、j 指向数组头部索引 0。
将 i 指针不断向右移动，j 指针负责提供交换的位置，当遇到非 0 数字时，将两个指针位置的数字交换，同时继续向右边移动两个指针。这样交换可以保证题目
要求的非 0 数字相对顺序不变。
当遇到 0 时，向右移动 i 指针，j 指针不动。
循环完成时即可将所有的 0 移动到数组的末尾。

const moveZeroes = function (nums) {
    let i = 0, j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        } else {
            i++;
        }
    }
}
复制代码
时间复杂度: O(n)
空间复杂度: O(1)

作者：童欧巴
链接：https://juejin.cn/post/6937526265201033230