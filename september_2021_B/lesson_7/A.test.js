import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './A.js';

describe('september_2021_B/lesson_7/A', () => {
  test('1', () => {
    assert.strictEqual(fn(['1', '10 20']), 10);
  });

  test('2', () => {
    assert.strictEqual(fn(['1', '10 10']), 0);
  });

  test('3', () => {
    assert.strictEqual(fn(['2', '10 20', '20 40']), 30);
  });

  test('3 my', () => {
    assert.strictEqual(fn(['2', '10 20', '30 40']), 20);
  });
});
