import { test, expect } from '@jest/globals';
import fn from './B.js';

test('1', () => {
  expect(fn(['5 5', '1 3 5 7 9', '2 4 8 1 6'])).toStrictEqual([1, 3, 7, 1, 5]);
});

test('2', () => {
  expect(fn(['6 11', '1 1 4 4 8 120', '1 2 3 4 5 6 7 8 63 64 65'])).toStrictEqual([
    1,
    1,
    4,
    4,
    4,
    4,
    8,
    8,
    8,
    8,
    120,
  ]);
});

test('3', () => {
  expect(fn(['10 10', '-5 1 1 3 5 5 8 12 13 16', '0 3 7 -17 23 11 0 11 15 7'])).toStrictEqual([
    1,
    3,
    8,
    -5,
    16,
    12,
    1,
    12,
    16,
    8,
  ]);
});
