function bubbleSort(arr) {
    // 缓存数组长度
    const len = arr.length
    // 外层循环，n个元素就要循环n次，每次确定的是索引为 len-1-i 这个坑位上的正确元素值
    for(let i = 0; i < len; i++) {
        // 内层循环，逐个对比相邻两个数的大小
        for(let j=0; j<len-1-i; j++) {
            // 如果靠前的数字大于靠后的数字，则交换两者的位置
            if(arr[j] > arr[j+1]) { 
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

function selectSort(arr)  {
    //  缓存数组长度
    const len =  arr.length
    // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
    let  minIndex
    // 遍历数组中的前 n-1  个元素
    for(let i=0; i<len-1; i++)  {
        // 初始化 minIndex  为当前区间第一个元素
        minIndex =  i
        // i、j分别定义当前区间的上下界， i是左边界，j是右边界
        for(let j=i; j< len; j++)  {
            // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为   j
            if(arr[j] < arr[minIndex])  {
                minIndex =  j
            }
        }
        // 如果 minIndex 发生过更新，则将 minIndex  置于当前排序区间的头部
        if(minIndex !== i)  {
            [arr[i], arr[minIndex]] = [arr[minIndex],  arr[i]]
        }
    }
    return  arr
}


// 插入排序
function insertSort(arr)  {
    //  缓存数组长度
    const len =  arr.length
    // temp  用来保存当前插入的新元素
    let  temp
    // i用于标识每次被插入的元素的索引
    for(let i=1;i<len;i++)  {
        // j用于帮助 temp  寻找自己应该有的定位
        let  j=i
        temp =  arr[i]
        // 判断 j 前面一个元素是否比 temp  大
        while(j>0 && arr[j-1]>temp)  {
            // 如果是，则将 j 前面的一个元素后移一位，为  temp  让出位置
            arr[j] =  arr[j-1]
            j--
        }
        // 循环让位，最后得到的 j 就是 temp  的正确索引
        arr[j] =  temp
    }
    return  arr
}

// 快速排序
var quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}; 
