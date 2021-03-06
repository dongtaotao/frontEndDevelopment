JS位运算实用价值
https://juejin.cn/post/7025063432156086286

// 使用箭头函数缩减代码
// 处理输入，可以用.map，需要注意其所有参数
// 此外其他迭代方法也需要掌握。
let line = readline().split(' ');
line = line.map((e) => parseInt(e, 10));

// 去重
arr = [...new Set(arr)];
// 升序,排序可以用sort，默认是字典序,并且可以根据需要定制，需要深入掌握
arr.sort((a, b) => a - b);
// 迭代输出
arr.forEach((i) => console.log(i));
// 求最大值，使用扩展运算符...
max = Math.max(...arr);
// 复制数组
arr2 = [...arr1];
arr2 = arr.concat();
arr2 = arr.slice();

// 善用解构
// 变量赋值
const [a, b, c, d, e] = [1, 2, 3, 4, 5]; // a=1,b=2,c=3,d=4,e=5
// 交换变量值
let x = 1, y = 2;
[x, y] = [y, x];
// 题外话：字符串中的字符是无法交换的
let str = 'ab';
[str[0], str[1]] = [str[1], str[0]]; // 无效，"ab"
// 不过可以将字符串拆成字符数组后就可以交换了
str = str.split(''); // ["a","b"]
[str[0], str[1]] = [str[1], str[0]]; // ["b","a"]

// 善用位操作符
// 求数组一半长度
halfLen = a.length >> 1;

// 不过需要注意右移运算符>>优先级别加号+还低，例如
console.log(3 + ((5 - 3) >> 1)); // 2
console.log(3 + ~~((5 - 3) / 2)); // 4

// 因此在于其他操作符号想结合时候可以适当增加括号,例如求中位
mid = left + ((right - left) >> 1);
mid = left + ~~((right - left) / 2);
// 不建议使用mid = (left + right)>>1;，因为加号操作可能造成溢出

// ~~等价于Math.floor(),|0也等价于Math.floor()
halfLen = ~~(a.length / 2);
halfLen = (a.length / 2) | 0;

// 判断奇偶
(evenNum & 1) === 0; // 偶数
(oddNum & 1) === 1; // 奇数

// 善用异或
(5 ^ 5) === 0;
(5 ^ 5 ^ 6 ^ 6 ^ 7) === 7;

// 判断数是否是2的幂次方
num & (num - 1 === 0);

// 翻转数的第K位
num ^= 1 << k;

// 将第K位设为0
num &= ~(1 << k);

// 将第K位设为1
num |= 1 << K;

// 判断第K位是否为0
(num & (1 << k)) === 0;

1. 按位与运算符（&）
&	与	两个位都为1时，结果才为1
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1

2. 按位或运算符（|）
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1

3. 异或运算符（^）两个位相同为0，相异为1
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

4. 取反运算符 (~) 0变1，1变0
~ 1 = 0~ 0 = 1

5. 左移运算符（<<）
定义： 将一个运算对象的各二进制位全部左移若干位，左边的二进制位丢弃，右边补0。 设 a=1010 1110，
a = a<< 2 将a的二进制位左移2位、右补0，即得a=1011 1000。 若左移时舍弃的高位不包含1，则每左移一位，相当于该数乘以2。
6. 右移运算符（>>）
定义： 将一个数的各二进制位全部右移若干位，正数左补0，负数左补1，右边丢弃。 例如：a=a>>2 将a的二进制位右移2位，
左补0 或者 左补1得看被移数是正还是负。 操作数每右移一位，相当于该数除以2。

7. 原码、补码、反码 https://juejin.cn/post/6940945178899251230
上面提到了补码、反码等知识，这里就补充一下。 计算机中的有符号数有三种表示方法，即原码、反码和补码。三种表示方法均有符号位和数值位两部分，符号位都
是用0表示“正”，用1表示“负”，而数值位，三种表示方法各不相同。
（1）原码
原码就是一个数的二进制数。例如：10的原码为0000 1010
（2）反码
正数的反码与原码相同，如：10 反码为 0000 1010
负数的反码为除符号位，按位取反，即0变1，1变0。

例如：-10
原码：1000 1010
反码：1111 0101
复制代码
复制代码
（3）补码
正数的补码与原码相同，如：10 补码为 0000 1010
负数的补码是原码除符号位外的所有位取反即0变1，1变0，然后加1，也就是反码加1。

例如：-10
原码：1000 1010
反码：1111 0101
补码：1111 0110
复制代码

链接：https://juejin.cn/post/7026969424812834830
