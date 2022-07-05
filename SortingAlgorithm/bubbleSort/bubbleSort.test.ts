import bubbleSort from "./bubbleSort";

test("does it sort correctly", () => {
  let example = [4, 2, 1, 3, 5];
  expect(bubbleSort(example)).toEqual([1, 2, 3, 4, 5]);
});
