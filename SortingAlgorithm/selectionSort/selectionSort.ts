export default function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestPos = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        smallestPos = j;
      }
    }
    arr[smallestPos] = arr[i];
    arr[i] = smallest;
  }
  return arr;
}
