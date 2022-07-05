export default function mergeSort(arr: number[]) {
  let newArr = [];
  let middle = Math.floor(arr.length / 2);

  if (arr.length === 0) return arr;
  if (arr.length === 1) return arr;

  let leftArr = mergeSort(arr.slice(0, middle));
  let rightArr = mergeSort(arr.slice(middle, arr.length));

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      newArr.push(leftArr.shift());
    } else if (leftArr[0] >= rightArr[0]) {
      newArr.push(rightArr.shift());
    }
  }

  return [...newArr, ...leftArr, ...rightArr];
}
