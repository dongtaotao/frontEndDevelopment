https://juejin.cn/post/7025626414066073608
相同点
都可以描述一个对象或者函数   
interface
https://www.jb51.net/article/163299.htm
ts的type和interface什么区别
interface User {
    name: string
    age: number
}
interface SetUser {
    (name: string, age: number): void;
}
type

type User = {
    name: string
    age: number
};

type SetUser = (name: string, age: number): void;
都允许拓展（extends）
interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, 
type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。
interface extends interface

interface Name {
    name: string;
}
interface User extends Name {
    age: number;
}
type extends type

type Name = {
    name: string;
}
type User = Name & { age: number };
interface extends type

type Name = {
    name: string;
}
interface User extends Name {
    age: number;
}

type extends interface

interface Name {
    name: string;
}
type User = Name & {
    age: number;
}
不同点
type 可以而 interface 不行
type 可以声明基本类型别名，联合类型，元组等类型
// 基本类型别名
type Name = string
// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}
type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
type 语句中还可以使用 typeof 获取实例的 类型进行赋值

// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
其他骚操作

type StringOrNumber = string | number; 
type Text = string | { text: string }; 
type NameLookup = Dictionary<string, Person>; 
type Callback<T> = (data: T) => void; 
type Pair<T> = [T, T]; 
type Coordinates = Pair<number>; 
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

interface 可以而 type 不行
interface 能够声明合并

interface User {
    name: string
    age: number
}
interface User {
    sex: string
}
/*
User 接口为 {
    name: string
    age: number
    sex: string
}
*/
总结
一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface ,
如果不能就用 type 。其他更多详情参看 官方规范文档

interface 和 type的区别
interface 只能定义对象类型。type声明可以声明任何类型。
interface 能够声明合并，两个相同接口会合并。Type声明合并会报错
type可以类型推导

接口和类型别名的区别
接口只用于类和函数，而类型别名还可以用于基本数据类型、联合类型、元组
接口可以重复定义，并且会自动合并为单个接口，类型别名不能重复定义
接口通过继承的方式进行拓展、类型别名通过&进行拓展

12. TypeScript 中 type 和 interface 的区别?
相同点：
1. 都可以描述 '对象' 或者 '函数' 
2. 都允许拓展(extends)
不同点：
1. type 可以声明基本类型，联合类型，元组
2. type 可以使用 typeof 获取实例的类型进行赋值
3. 多个相同的 interface 声明可以自动合并
使用 interface 描述‘数据结构’，使用 type 描述‘类型关系’

23. declare，declare global是什么？
declare 是用来定义全局变量、全局函数、全局命名空间、js modules、class等 
declare global 为全局对象 window 增加新的属性
declare global { 
   interface Window { 
        csrf: string; 
   }
}
链接：https://juejin.cn/post/6999985372440559624

interface 和 type的区别
interface 只能定义对象类型。type声明可以声明任何类型。
interface 能够声明合并，两个相同接口会合并。Type声明合并会报错
type可以类型推导

「面试题」TypeScript
https://juejin.cn/post/6988763249982308382


TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法
TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译
TypeScript 文件的后缀名 .ts （.ts，.tsx，.dts），JavaScript 文件是 .js
在编写 TypeScript 的文件的时候就会自动编译成 js 文件、

typescript 的数据类型主要有如下：

boolean（布尔类型）
number（数字类型）
string（字符串类型）
array（数组类型）
tuple（元组类型）
enum（枚举类型）
any（任意类型）
null 和 undefined 类型
void 类型
never 类型
object 对象类型

declare，declare global是什么？

declare 是用来定义全局变量、全局函数、全局命名空间、js modules、class等
declare global 为全局对象 window 增加新的属性
declare global { 
   interface Window { 
        csrf: string; 
   }
}

如何使 TypeScript 项目引入并识别编译为 JavaScript 的 npm 库包？

选择安装 ts 版本，npm install @types/包名 --save；
对于没有类型的 js 库，需要编写同名的.d.ts文件
链接：https://juejin.cn/post/6999985372440559624

第三方声明文件 ******** 
2.3.2 自定义声明文件

当在 TypeScript 项目中使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
针对多数第三方库，社区已经帮我们定义好了它们的声明文件，我们可以直接下载下来使用。一般推荐使用 @types 统一管理第三方库的声明文件，@types 的使用方式很简单，
直接用 npm 或 yarn 安装对应的声明模块即可。以 lodash 为例：
链接：https://juejin.cn/post/7058868160706904078


如何在项目中用好 TypeScript   不错
https://juejin.cn/post/7058868160706904078

有了解过泛型吗？什么时候需要用到泛型？
泛型是指在定义函数/接口/类时，不预先指定具体的类型，而是在使用的时候再指定类型限制的一种特性  
当需要定义一个参数类型与返回值类型不确定的函数时

https://juejin.cn/post/7088304364078497800
unknow会对值进行检测，而类型any不会做检测操作，说白了，any类型可以赋值给任何类型，但unknow只能赋值给unknow类型和any类型
unknown 类型只能被赋值给 any 类型和 unknown 类型本身 https://juejin.cn/post/6872111128135073806
unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。
而在对 any 类型的值执行操作之前，我们不必进行任何检查。

tsconfig.json 文件是用于描述将 TypeScript 转为 JavaScript 代码的配置文件。  