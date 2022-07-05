export default function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i - j] < arr[i - j - 1]) {
        let temp = arr[i - j - 1];
        arr[i - j - 1] = arr[i - j];
        arr[i - j] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}
