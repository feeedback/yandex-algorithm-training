import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fn from './C.js';

describe('september_2021_B/lesson_2/C', () => {
  test('1', () => {
    assert.strictEqual(fn(['a']), 0);
  });
  test('2', () => {
    assert.strictEqual(fn(['ab']), 1);
  });
  test('3', () => {
    assert.strictEqual(fn(['cognitive']), 4);
  });
});
