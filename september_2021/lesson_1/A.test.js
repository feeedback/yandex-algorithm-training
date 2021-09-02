import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(fn([0, 0, 0])).toStrictEqual(0);
});
test('2', () => {
  expect(fn([-1, 0, 1])).toStrictEqual(3);
});
test('3', () => {
  expect(fn([42, 1, 6])).toStrictEqual(6);
});
test('4', () => {
  expect(fn([44, 7, 4])).toStrictEqual(1);
});
test('5', () => {
  expect(fn([1, 4, 0])).toStrictEqual(3);
});
test('6', () => {
  expect(fn([-3, 2, 4])).toStrictEqual(2);
});
