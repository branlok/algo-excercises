import mergeSort from "./mergeSort";

test("it should sort", () => {
  expect(mergeSort([1, 4, 2, 3])).toEqual([1, 2, 3, 4]);
});

test("an array of one item is sorted", () => {
  expect(mergeSort([1])).toEqual([1]);
});

test("an array of zero item is sorted", () => {
  expect(mergeSort([])).toEqual([]);
});
