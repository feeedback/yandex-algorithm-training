import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './A.js';

describe('september_2021_B/lesson_2/A', () => {
  test('1', () => {
    assert.strictEqual(fn([1, 7, 9, 0]), 1);
  });

  test('2', () => {
    assert.strictEqual(fn([1, 3, 3, 1, 0]), 2);
  });

  test('My', () => {
    assert.strictEqual(fn([1, 3, 3, 1, 0, 3]), 2);
  });
});
