import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './B.js';

test('1', () => {
  assert.strictEqual(fn(['100 5 6']), 0);
});
test('2', () => {
  assert.strictEqual(fn(['10 1 9']), 1);
});

test('My', () => {
  assert.strictEqual(fn(['8 7 5']), 1);
});

test('My', () => {
  assert.strictEqual(fn(['8 8 1']), 0);
});
