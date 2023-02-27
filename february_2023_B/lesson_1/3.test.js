import { test, expect } from '@jest/globals';
import fn from './3.js';

test('1', () => {
  expect(fn(['1', '5', '2', '4 6'])).toStrictEqual([0, 1]);
});

test('1_my', () => {
  expect(fn(['1', '5', '2', '5 6'])).toStrictEqual([0, 1]);
});

test('2', () => {
  expect(fn(['3', '100 1 50', '3', '300 0 75'])).toStrictEqual([3, 0, 2]);
});

test('4', () => {
  expect(fn(['4', '3 3 2 2', '4', '3 3 4 2'])).toStrictEqual([1, 1, 2, 0]);
});
