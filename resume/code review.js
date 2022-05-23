为什么需要Code Review
什么时候做Code Review
    Committer需要注意什么   Code Reviewer需要看哪方面的内容
  
    为什么需要Code Review
        1.保持项目代码风格的一致性，代码质量提高，项目可维护性提高。
        2.提前发现代码的问题
        3.可以提高committer对于自己代码的要求
        4.可以让开发更加深刻的理解需求
        5.组内知识分享
    什么时候进行Code Review
        开发前
        开发中
        提测前
        上线后
    Committer需要注意什么
        限制每个commit的改动大小和范围
        Commit信息要有意义
    Code Review需要看什么东西
        正确实现了功能或者修复了bug
        确保编码风格一致
        避免非必要的复杂逻辑设计
        避免硬编码
        提高代码复用率
        写上必要的代码注释

🌰Code Review – 开发前 
需求评审后，在Gitlab上创建issue，用于关联该需求的方案、提交和review记录。
当需求影响范围较大、复杂性较高、或实现方案有争议时，需要进行方案review。
    o开发负责人在issue中初步制定方案，并记录主要问题点
    o指定review成员进行review，共同讨论，形成结论记录到issue中

🌰Code Review – 开发中
1.开发过程中需要review的提交，必须先进行代码提交自查
2.提交信息中需要包含关联issue的ID。
3.对于开发负责人认为需要review的代码，可以通过以下形式进行非正式的codereview：
    与review成员线下讨论
    热聊将commit链接发送给相关成员进行review
    或者提交merge request

🌰Code Review – 提测阶段
在以下情况下需要将需求关联的issue发送给指定review成员进行正式review，完成后在issue中进行标注：
    需求开发完成，提测之前
    提测后bugfix
    生产问题紧急修复
  Review成员对重点需求和问题的issue打tag标注，以便后续进行集体codereview。

🌰Code Review – 上线后
代码上线后，需要合并到master分支，并使用SonarQube进行完整的代码检查，记录并对比历史数据，及时作出改进。

对当期开发的重点需求和经典问题进行回顾：
    暂定每1个月组织全组成员对标注的问题进行集体codereview，由开发负责人主持。
    开发负责人对通过review发现的经典问题进行记录（wiki），改进后续开发流程
    对review过程中发现的新问题，提出技术需求，排期修复 

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
1.提交PR或者MR时，通过代码diff进行code review       pull request ---
2.每周例行一次集体code review

持续优化
1.每次code review的问题要记录下来
2.归纳整理，形成自己的代码规范体系
3.新加入的成员要提前学习，提前规避