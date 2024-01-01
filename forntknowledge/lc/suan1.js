金3银4必备常用算法知识和力扣原题实战（1.7万字）
https://juejin.cn/post/7219249005904347173  


合并时间
https://juejin.cn/post/7152722756587978760
const arr = [2, 3, 4, 7, 8, 9, 10, 13, 15]

期望结果：["2-4", "7-10", 13, 15]


const merge = (arr) => {
  const lens = arr.length;
  if (lens == 1) return [arr[0]];
  const result = []
  let prev = 0, next = 1;
  while (prev < lens) {
      const diffIndex = next - prev;
      if (arr[prev] + diffIndex === arr[next]) { // 连续
          next++;
      } else { // 不连续
          if (diffIndex === 1) { // 单个
              result.push(arr[prev]);
          } else {
              result.push(`${arr[prev]}-${arr[next - 1]}`)
          }
          prev = next;
          next++;
      }
  }
  return result;
}
const arr = [2, 3, 4, 7, 8, 9, 10, 13, 15]
console.log(merge(arr))


「万变不离其宗」10个高频场景题助力业务开发 🚀🚀🚀
https://juejin.cn/post/7152722756587978760