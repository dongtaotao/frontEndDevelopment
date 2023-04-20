由浅入深，从掌握Promise的基本使用到手写Promise
https://juejin.cn/post/7082311040318488583  
class Promise {
  constructor(executor) {
    // 默认状态是等待态
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];
    let resolve = (data) => {
      if (this.status === 'pending') {
        this.value = data;
        this.status = 'resolved';
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.reason = reason;
        this.status = 'rejected';
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    try { // 执行时可能会发生异常
      executor(resolve, reject);
    } catch (e) {
      reject(e); // promise失败了
    }
  }
  then(onFulFilled, onRejected) {
    if (this.status === 'resolved') {
      onFulFilled(this.value);
    }
    if (this.status === 'rejected') {
      onRejected(this.reason);
    }
    // 当前既没有完成 也没有失败
    if (this.status === 'pending') {
      // 存放成功的回调
      this.onResolvedCallbacks.push(() => {
        onFulFilled(this.value);
      });
      // 存放失败的回调
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
module.exports = Promise;


Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

Promise.prototype.finally = function(callback) {
  return this.then(data => {
    return Promise.resolve(callback()).then(() => data);
  }, err => {
    return Promise.resolve(callback()).then(() => {
      throw err;
    })
  })
}

// Promise.finally = function(callback) {
//   return this.then(data => {
//     return Promise.resolve(callback()).then(() => data)
//   },err => {
//     return Promise.resolve(callback()).then(() =>{
//       throw err
//     })
//   })
// }

10.promiseAll和allSeleted
Promise.all = function(promises) {
    const values = []
    let count = 0
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                count++
                values[index] = res
                if (count === promises.length) {
                    resolve(values)
                }
            }, err => {
                reject(err)
            })
        })
    })
}

Promise.allSettled = function(promises) {
    let count = 0
    let result = []
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                result[index] = {
                    value: res,
                    reason: null,
                }
            }, err => {
                result[index] = {
                    value: null,
                    reason: err,
                }
            }).finally(() => {
                count++
                if (count === promises.length) {
                    resolve(result)
                }
            })
        })
    })
}

Promise.race = function race(promises) {
  return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        Promise.resolve(promise).then(data => {
          resolve(data);
          return;
        }).catch(err => {
          reject(err);
          return;
        })
      })
  })
}
//   https://juejin.cn/post/7023906112843808804

promise.finally

class Promise {
  constructor (fn) {
    // 三个状态
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
      }
    }
    let reject = value => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = value
      }
    }
    // 自动执行函数
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  // then
  then(onFulfilled, onRejected) {
    switch (this.state) {
      case 'fulfilled':
        onFulfilled(this.value)
        break
      case 'rejected':
        onRejected(this.reason)
        break
      default:
    }
  } 
  catch(onRejected) {
    this.then(null, onRejected)
  }
}

Promise.prototype.catch = function(onRejected){
  // catch与then的不同点在于传入的参数不一样，不需要传onResolve
  return this.then(null, onRejected);
}

看了就会，手写Promise原理，最通俗易懂的版本！！！
https://juejin.cn/post/6994594642280857630


Promise.any = function(promiseArr) {
  let index = 0
  return new Promise((resolve, reject) => {
      if (promiseArr.length === 0) return 
      promiseArr.forEach((p, i) => {
          Promise.resolve(p).then(val => {
              resolve(val)
          }, err => {
              index++
              if (index === promiseArr.length) {
                reject(new AggregateError('All promises were rejected'))
              }
          })
      })
  })
}

Promise.resolve = function(value){
  return new Promise((resolve,reject)=>{
    if (value instanceof Promise){
        // 如果value 是promise
        value.then(
            value => {resolve(value)},
            reason => {reject(reason)}
        )
    } else{
        // 如果value不是promise
        resolve(value)
    }
  }
}


async await和promise的区别，作用和使用场景
https://www.cnblogs.com/jxnc/p/15016214.html

如何取消promise
https://www.cnblogs.com/bonly-ge/p/12930910.html

Promise.prototype.catch = function(onRejected){
  return this.then(undefined,onRejected)
}

Promise.prototype.finally = function (onFinally) {
  return this.then(
      () => {
          onFinally();
          return this.value;
      },
      () => {
          onFinally();
          return this.value;
      },
  );
};
Promise.resolve = function (value) {
  // 注意：如果传入的值是 MyPromise 对象则直接返回
  if (value instanceof MyPromise) return value;
  return new Promise(resolve => resolve(value));
};
Promise.reject = function (err) {
  return new Promise((resolve, reject) => reject(err));
};

Promise.all = function (promises) {
  if (!Array.isArray(promises)) throw new Error(`the ${promises} is not a array`);

  return new Promise((resolve, reject) => {
      const result = [];
      const len = promises.length;
      let i = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(
              res => {
                  result[index] = res;
                  i++;
                  if (len === i) {
                      resolve(result);
                  }
              },
              err => {
                  reject(err);
              },
          );
      });
  });
};
Promise.any = function (promises) {
  if (!Array.isArray(promises)) throw new Error(`the ${promises} is not a array`);
  return new Promise((resolve, reject) => {
      const errs = [];
      const len = promises.length;
      promises.forEach(promise => {
          Promise.resolve(promise).then(resolve, err => {
              errs.push(err);
              if (len === errs.length) {
                  reject(errs);
                  // reject(new AggregateError(errs)); 
              }
          });
      });
  });
};

链接：https://juejin.cn/post/7079394322067488776 
 


  