Code Review – 开发前 

需求评审后，在Gitlab上创建issue，用于关联该需求的方案、提交和review记录。
当需求影响范围较大、复杂性较高、或实现方案有争议时，需要进行方案review。
    o开发负责人在issue中初步制定方案，并记录主要问题点
    o指定review成员进行review，共同讨论，形成结论记录到issue中

Code Review – 开发中
1.开发过程中需要review的提交，必须先进行代码提交自查
2.提交信息中需要包含关联issue的ID。
3.对于开发负责人认为需要review的代码，可以通过以下形式进行非正式的codereview：
    与review成员线下讨论
    热聊将commit链接发送给相关成员进行review

Code Review – 提测阶段
在以下情况下需要将需求关联的issue发送给指定review成员进行正式review，完成后在issue中进行标注：
    需求开发完成，提测之前
    提测后bugfix
    生产问题紧急修复
Review成员对重点需求和问题的issue打tag标注，以便后续进行集体codereview。

Code Review – 上线后
代码上线后，需要合并到master分支，并使用SonarQube进行完整的代码检查，记录并对比历史数据，及时作出改进。

对当期开发的重点需求和经典问题进行回顾：
    暂定每1个月组织全组成员对标注的问题进行集体codereview，由开发负责人主持。
    开发负责人对通过review发现的经典问题进行记录（wiki），改进后续开发流程
    对review过程中发现的新问题，提出技术需求，排期修复