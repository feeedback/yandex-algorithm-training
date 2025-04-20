import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fn from './3.js';

describe('february_2023_B/lesson_1/3', () => {
  test('1', () => {
    assert.deepStrictEqual(fn(['1', '5', '2', '4 6']), [0, 1]);
  });

  test('1_my', () => {
    assert.deepStrictEqual(fn(['1', '5', '2', '5 6']), [0, 1]);
  });

  test('2', () => {
    assert.deepStrictEqual(fn(['3', '100 1 50', '3', '300 0 75']), [3, 0, 2]);
  });

  test('4', () => {
    assert.deepStrictEqual(fn(['4', '3 3 2 2', '4', '3 3 4 2']), [1, 1, 2, 0]);
  });
});
