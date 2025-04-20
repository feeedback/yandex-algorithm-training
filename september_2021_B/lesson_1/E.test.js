import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './E.js';

describe('september_2021_B/lesson_1/E', () => {
  test('1', () => {
    assert.strictEqual(fn([5, '1 1']), 0);
  });

  test('2', () => {
    assert.strictEqual(fn([3, '-1 -1']), 1);
  });

  test('3', () => {
    assert.strictEqual(fn([4, '4 4']), 2);
  });

  test('4', () => {
    assert.strictEqual(fn([4, '2 2']), 0);
  });
});
