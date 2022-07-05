import quickSort from "./quickSort";

test("should sort in ascending sequence", () => {
  expect(quickSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(quickSort([13, 1234, 234, 1, 5, -5])).toEqual([
    -5, 1, 5, 13, 234, 1234,
  ]);
});
