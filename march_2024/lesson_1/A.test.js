import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fn from './A.js';

describe('march_2024/lesson_1/A', () => {
  test('1', () => {
    assert.strictEqual(fn(['0 7', '12 5']), 25);
  });

  test('2', () => {
    assert.strictEqual(fn(['2 3', '10 3']), 14);
  });

  test('my', () => {
    assert.strictEqual(fn(['-3 3', '1 2']), 10);
  });
});
