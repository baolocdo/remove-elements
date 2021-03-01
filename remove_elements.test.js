// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { removeElements } = require('./remove_elements');

test('should return [2] when arr=[1, 2, 3] and elements=[1, 3]', () => {
  expect(removeElements([1, 2, 3], [1, 3])).toEqual([2]);
});

test('should return [2] when arr=[1, 1, 2, 2, 3, 3] and elements=[1, 3]', () => {
  expect(removeElements([1, 1, 2, 2, 3, 3], [1, 3])).toEqual([2, 2]);
});

test('should return [1, 2, 3] when arr=[1, 2, 3] and elements=[]', () => {
  expect(removeElements([1, 2, 3], [])).toEqual([1, 2, 3]);
});

test('should return [2, 3] when arr=[1, 2, 3, 1] and elements=[1]', () => {
  expect(removeElements([1, 2, 3, 1], [1])).toEqual([2, 3]);
});

test('should return [] when arr=[] and elements=[1]', () => {
  expect(removeElements([], [1])).toEqual([]);
});