import Heap from "./heapSort";

test("create a heap tree initailized with root null", () => {
  let newHeap = new Heap();
  expect(newHeap).toEqual({ root: null });
});

test("insert first value", () => {
  let newHeap = new Heap();
  expect(newHeap).toEqual({ root: null });
  newHeap.insertValue(5);
  expect(newHeap).toEqual({ root: { value: 5, left: null, right: null } });
  newHeap.insertValue(2);
  newHeap.insertValue(6);
  expect(newHeap).toEqual({
    root: {
      value: 5,
      left: { value: 2, left: null, right: null },
      right: { value: 6, left: null, right: null },
    },
  });
});
