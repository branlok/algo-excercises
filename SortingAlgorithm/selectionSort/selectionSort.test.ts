import selectionSort from "./selectionSort";

test("it sorts random number in ascending sequence", () => {
  let sample = [5, 2, 9, 1, 8, 6, 3];
  expect(selectionSort(sample)).toEqual([1, 2, 3, 5, 6, 8, 9]);
});

test("it sorts empty input", () => {
  let sample = [];
  expect(selectionSort(sample)).toEqual([]);
});
