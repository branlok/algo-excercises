//only finds the first instance of such value, which is normal since data should always carry a unique primary key.
export default function linearSearch(arr: Array<number>, targetValue: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      return i;
    }
  }
  return -1;
}
