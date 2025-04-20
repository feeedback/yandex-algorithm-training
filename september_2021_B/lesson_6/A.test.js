import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './A.js';

describe('september_2021_B/lesson_6/A', () => {
  test('1', () => {
    assert.strictEqual(
      fn(['5', '10 1 10 3 4', '4', '1 10', '2 9', '3 4', '2 2']),
      '5 2 2 0'
    );
  });
});
