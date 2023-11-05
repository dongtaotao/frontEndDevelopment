tag相关命令
1、在控制台打印出当前仓库的所有标签：git tag

2、搜索符合模式的标签：git tag -l 'v0.0.*'

3、创建附注标签：git tag -a v0.0.1 -m "v0.0.1发布"

4、删除标签：git tag -d v0.0.1

5、查看标签的版本信息：git show v0.0.1

6、指向打v0.0.2标签时的代码状态：git checkout v0.0.2

7、将v0.0.1标签提交到git服务器：git push origin v0.0.1

8、将本地所有标签一次性提交到git服务器：git push origin –tags
————————————————
版权声明：本文为CSDN博主「凯小默」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/kaimo313/article/details/107445076 