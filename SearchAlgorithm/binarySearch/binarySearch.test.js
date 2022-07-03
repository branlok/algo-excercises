import binarySearch from "./binarySearch.js";

test("searchValue searches correct position when found", () => {
  let sampleArray = [0, 1, 2, 3, 4, 5, 6];
  for (let i = 0; i < sampleArray.length; i++) {
    expect(binarySearch(sampleArray, i)).toBe(i);
  }
});

test("Should return -1 for values that doesn't exists in array", () => {
  let sampleArray = [0, 1, 2, 3, 4, 5, 6];
  expect(binarySearch(sampleArray, 10)).toBe(-1);
});
