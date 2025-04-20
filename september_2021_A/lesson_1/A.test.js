import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './A.js';

describe('september_2021_A/lesson_1/A', () => {
  test('1', () => {
    assert.strictEqual(fn(['1', '1', '2', '2']), 'NO');
  });

  test('2', () => {
    assert.strictEqual(fn([2, -4, 7, 1]), 2);
  });

  test('3', () => {
    assert.strictEqual(fn([35, 14, 11, -3]), 'NO');
  });

  test('my', () => {
    assert.strictEqual(fn([0, 0, 11, -3]), 'INF');
  });
});
