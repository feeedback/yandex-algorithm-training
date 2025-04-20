import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './A.js';

test('1', () => {
  assert.strictEqual(fn([0, 0, 0]), 0);
});
test('2', () => {
  assert.strictEqual(fn([-1, 0, 1]), 3);
});
test('3', () => {
  assert.strictEqual(fn([42, 1, 6]), 6);
});
test('4', () => {
  assert.strictEqual(fn([44, 7, 4]), 1);
});
test('5', () => {
  assert.strictEqual(fn([1, 4, 0]), 3);
});
test('6', () => {
  assert.strictEqual(fn([-3, 2, 4]), 2);
});
