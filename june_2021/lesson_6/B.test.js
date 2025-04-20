import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './B.js';

describe('june_2021/lesson_6/B', () => {
  test('1', () => {
    assert.deepStrictEqual(
      fn(['5 5', '1 3 5 7 9', '2 4 8 1 6']),
      [1, 3, 7, 1, 5]
    );
  });

  test('2', () => {
    assert.deepStrictEqual(
      fn(['6 11', '1 1 4 4 8 120', '1 2 3 4 5 6 7 8 63 64 65']),
      [1, 1, 4, 4, 4, 4, 8, 8, 8, 8, 120]
    );
  });

  test('3', () => {
    assert.deepStrictEqual(
      fn(['10 10', '-5 1 1 3 5 5 8 12 13 16', '0 3 7 -17 23 11 0 11 15 7']),
      [1, 3, 8, -5, 16, 12, 1, 12, 16, 8]
    );
  });
});
