export default function quickSort(arr: number[]) {
  let pivotPos = arr.length - 1;
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[pivotPos]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  if (leftArr.length > 1) {
    leftArr = quickSort(leftArr);
  }
  if (rightArr.length > 1) {
    rightArr = quickSort(rightArr);
  }
  console.log([...leftArr, arr[pivotPos], ...rightArr]);
  return [...leftArr, arr[pivotPos], ...rightArr];
}
