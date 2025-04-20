import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './A.js';

describe('september_2021_B/lesson_3/A', () => {
  test('1', () => {
    assert.strictEqual(fn(['1 3 2', '4 3 2']), 2);
  });
});
