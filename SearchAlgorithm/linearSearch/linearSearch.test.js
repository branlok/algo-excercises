import linearSearch from "./linearSearch.js";

test("finding correct position", () => {
  const sampleArray = [0, 1, 2, 3, 4, 5];
  for (let i = 0; i < sampleArray.length; i++) {
    expect(linearSearch(sampleArray, i)).toBe(i);
  }
});

test("recongized no match", () => {
  const sampleArray = [0, 1, 2, 3, 4, 5];
  expect(linearSearch(sampleArray, 123)).toBe(-1);
});

test("recognize no match", () => {
  const sampleArray = [0, 1, 2, 3, 4, 5];
  expect(linearSearch(sampleArray, 123)).toBe(-1);
});
