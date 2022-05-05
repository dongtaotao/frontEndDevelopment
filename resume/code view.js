code review ================================================
1.代码规范（eslint不能全检查，如变量命名，代码语义）
2.重复代码需要抽离，复用
3.单个函数内容过长，需要拆分
4.算法复杂度是否可用？是否可继续优化
5.是否有安全漏洞
6.扩展性如何？（不用为了扩展而扩展，不封闭即可）
7.是否和现有功能重复了
8.是否有完善的单元测试
9.组件设计是否合理

code review的时机
1.提交PR或者MR时，通过代码diff进行code review
2.每周例行一次集体code review

持续优化
1.每次code review的问题要记录下来
2.归纳整理，形成自己的代码规范体系
3.新加入的成员要提前学习，提前规避


如何学习一门新语言，需要考虑哪些方面
1.它的优势和应用场景
2.语法（常量，变量）
3.内置模块和api
4.常用的第三方框架和库
5。开发环境和调试环境
6.线上环境和发布过程