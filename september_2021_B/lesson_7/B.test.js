import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './B.js';

describe('september_2021_B/lesson_7/B', () => {
  test('1', () => {
    assert.strictEqual(fn(['3', '3 2', '4 2', '5 2']), 2);
  });

  test('2', () => {
    assert.strictEqual(fn(['5', '13 4', '15 1', '11 5', '12 3', '10 3']), 3);
  });
});
