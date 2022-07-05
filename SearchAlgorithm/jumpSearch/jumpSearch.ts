export default function jumpSearch(arr: number[], target: number) {
  const JumpSize = Math.floor(Math.sqrt(arr.length));
  let pos = 0;

  while (arr.length !== 0) {
    if (arr[pos] === target) {
      return pos;
    } else if (arr[pos] < target) {
      pos = pos + JumpSize;
    } else if (arr[pos] > target || !arr[pos]) {
      //run llinear search in thsi segment.
      for (let i = 0; i < JumpSize; i++) {
        if (arr[pos - i] === target) {
          return pos - i;
        }
      }
      return -1;
    }
  }
  return -1;
}

/**test */
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let assertionTest = true;
