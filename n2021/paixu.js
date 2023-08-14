冒泡 
function bubbleSort(arr) { 
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j+1]) {
          const temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }

选择
function selectionSort(arr) {
  const len = arr.length;
  let minIndex;
  let temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { 
        minIndex = j; // 保存最小数的索引
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
插入 
function insertionSort(arr) {
  const len = arr.length;
  let preIndex;
  let current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    // 大于新元素，将该元素移到下一位置
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;  
} 

  快速排序
  // 使用JS API比较多，需要开辟额外的存储空间
function quickSort(arr) {
  if(arr.length == 1) {
    return arr
  }
  const temp = arr[0]; 
  const left = [];
  const right = [];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] <= temp) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([temp], quickSort(right))     
}    