import jumpSearch from "./jumpSearch";

test("search correctly with correct position", () => {
  let example = [0, 1, 2, 3, 4, 5];
  for (let i = 0; i < example.length; i++) {
    expect(jumpSearch(example, i)).toBe(i);
  }
});

test("returns -1 for empty arrays", () => {
  let example = [];
  expect(jumpSearch(example, 0)).toBe(-1);
});

test("returns -1 for empty size of 1", () => {
  let example = [1];
  expect(jumpSearch(example, 1)).toBe(0);
});

test("search correctly for non-existent value", () => {
  let example = [0, 1, 2, 3, 4, 5];
  expect(jumpSearch(example, 50)).toBe(-1);
});
