import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './C.js';

describe('september_2021_B/lesson_3/C', () => {
  test('1', () => {
    assert.strictEqual(fn(['1 2 2 3 3 3']), '1');
  });

  test('2', () => {
    assert.strictEqual(fn(['4 3 5 2 5 1 3 5']), '4 2 1');
  });
});
