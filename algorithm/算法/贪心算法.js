贪心算法|找零钱算法 https://juejin.cn/post/6855129005415366670
  已知币种1，2，5，10，买菜的时候给了100，花了65，找回35，如何得到最佳的路径：10 10 10 5

  /*
* 传入已知币种和找零金额，得到最佳找零路径值
*/
function getMinCoin(coins,amount) {
    let total = 0, change = [];
    //保证币种是降序的，找零的时候，先找最大币种
    coins.sort((a,b)=>b-a);
    for(let i=0;i<coins.length;i++) {
      let coin = coins[i];
      // 如果当前币值+total总和小于找零金额，那说明此币种可用
      while(total + coin <= amount) {
        // 保存当前币值
        change.push(coin)
        // 继续累加
        total += coin;
      }
    }
    return change
  }
  
  // 测试
  getMinCoin([2,1,5,10],35) 
  
  // 返回
  // [10, 10, 10, 5]