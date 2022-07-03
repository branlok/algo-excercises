export default function binarySearch(arr, target) {
  return binarySearchRecursion(arr, target, 0, arr.length);
}

function binarySearchRecursion(arr, target, start, end) {
  let middle = Math.floor((start + end) / 2);
  //base case
  if (start > end) {
    return -1;
  } else if (arr[middle] === target) {
    return middle;
  }
  //recursive reducibles
  if (target < arr[middle]) {
    return binarySearchRecursion(arr, target, start, middle - 1);
  } else if (target > arr[middle]) {
    return binarySearchRecursion(arr, target, middle + 1, end);
  }
  return -1;
}
