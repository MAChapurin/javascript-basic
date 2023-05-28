function sortArray(array) {
  const arr = array;
  let stopFlag = true;
  while (stopFlag) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i+1] === undefined) {
        stopFlag = false;
        break;
      }
      if (arr[i] > arr[i+1]) {
        const lessEl = arr[i];
        const moreEl = arr[i+1];
        arr[i] = moreEl;
        arr[i+1] = lessEl;
        break;
      }
    }
  }
  
  return arr;
}


const arr = [1, 40, -5, 10, 0, -10, 3]



console.log(sortArray(arr))

