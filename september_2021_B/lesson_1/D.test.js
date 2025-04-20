import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './D.js';

describe('september_2021_B/lesson_1/D', () => {
  test('1', () => {
    assert.strictEqual(fn([4, '1 2 3 4']), 3);
  });

  test('2', () => {
    assert.strictEqual(fn([3, '-1 0 1']), 0);
  });

  test('My', () => {
    assert.strictEqual(fn([2, '10 10']), 10);
  });
  test('My 2', () => {
    assert.strictEqual(fn([4, '0 0 0 10']), 0);
  });
  test('3 from bot', () => {
    assert.strictEqual(fn([5, '-9 -1 8 9 10']), 8);
  });
});
