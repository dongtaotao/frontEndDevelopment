字符串常用的十个函数
charAt()   // 返回在指定位置的字符。
concat()   // 连接字符串。
fromCharCode()   // 从字符编码创建一个字符串。
indexOf()  // 检索字符串。
match()   // 找到一个或多个正则表达式的匹配。
replace()   // 替换与正则表达式匹配的子串。
search()   // 检索与正则表达式相匹配的值。
slice()   // 提取字符串的片断，并在新的字符串中返回被提取的部分。
split()   // 把字符串分割为字符串数组。
substr()   // 从起始索引号提取字符串中指定数目的字符。
substring()   // 提取字符串中两个指定的索引号之间的字符。
toLocaleLowerCase()   // 把字符串转换为小写。
toLocaleUpperCase()   // 把字符串转换为大写。
toLowerCase()   // 把字符串转换为小写。
toUpperCase()   // 把字符串转换为大写。
toString()   // 返回字符串。
valueOf()   // 返回某个字符串对象的原始值。

array 方法
https://www.cnblogs.com/lhh520/p/10373802.html 

如何判断一个变量是对象还是数组
function isObjArr(variable){
    if (Object.prototype.toString.call(value) === "[object Array]") {
           console.log('value是数组');
    }else if(Object.prototype.toString.call(value)==='[object Object]'){//这个方法兼容性好一点
        console.log('value是对象');
    }else{
        console.log('value不是数组也不是对象') 
    }
}
 
// 注意:千万不能使用typeof来判断对象和数组，因为这两种类型都会返回"object"。
 