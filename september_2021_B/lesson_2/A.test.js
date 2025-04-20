import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './A.js';

test('1', () => {
  assert.strictEqual(fn([1, 7, 9, 0]), 1);
});

test('2', () => {
  assert.strictEqual(fn([1, 3, 3, 1, 0]), 2);
});

test('My', () => {
  assert.strictEqual(fn([1, 3, 3, 1, 0, 3]), 2);
});
