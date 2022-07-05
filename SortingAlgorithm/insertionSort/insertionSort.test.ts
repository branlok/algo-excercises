import insertionSort from "./insertionSort";

test("sorts array of some size", () => {
  expect(insertionSort([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
});

test("sorts array of some size with duplicates", () => {
  expect(insertionSort([5, 2, 3, 1, 1])).toEqual([1, 1, 2, 3, 5]);
});

test("sorts array size of 1", () => {
  expect(insertionSort([1])).toEqual([1]);
});

test("sorts array size of 0", () => {
  expect(insertionSort([])).toEqual([]);
});
