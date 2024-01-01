/**
 * XSS(跨站脚本攻击)
 * 原理：页面渲染的数据中包含可运行的脚本
 * 攻击的基本类型：反射型（url参数直接注入）和存储型（存储到DB后读取注入）
 * 注入点：html节点内的内容（TEXT）；html中dom元素的属性；js代码；富文本
 * 
 * 
 * 防御：
 * 1.浏览器自带的防御机制，主要应对反射型攻击（html内容或者属性）
 * http相应头添加x-xss-protection：1
 * 2.对特殊字符做转译：内容注入替换尖括号，属性注入替换单引号或者引号
 * 3.csp（内容安全策略）：用于指定那些内容可以运行
 */