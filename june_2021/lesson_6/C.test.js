import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './C.js';

describe('june_2021/lesson_6/C', () => {
  test('1', () => {
    assert.strictEqual(fn(['2 3 10']), 9);
  });

  test('My. Square', () => {
    assert.strictEqual(fn(['1 1 1']), 1);
    assert.strictEqual(fn(['1 1 2']), 2);
    assert.strictEqual(fn(['1 1 3']), 2);
    assert.strictEqual(fn(['1 1 4']), 2);
    assert.strictEqual(fn(['1 1 5']), 3);
  });
  test('My 1', () => {
    assert.strictEqual(fn(['5 2 1']), 5);
    assert.strictEqual(fn(['2 5 1']), 5);
  });
  test('My 2', () => {
    assert.strictEqual(fn(['5 2 10']), 10);
    assert.strictEqual(fn(['2 5 10']), 10);
  });

  test('bot. 7', () => {
    assert.strictEqual(fn(['5 10 9']), 25);
  });

  test('bot. 11', () => {
    assert.strictEqual(fn(['149 651 741']), 8493);
  });
});
