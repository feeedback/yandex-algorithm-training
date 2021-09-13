import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(fn([1, 7, 9, 0])).toStrictEqual(1);
});

test('2', () => {
  expect(fn([1, 3, 3, 1, 0])).toStrictEqual(2);
});

test('My', () => {
  expect(fn([1, 3, 3, 1, 0, 3])).toStrictEqual(2);
});
