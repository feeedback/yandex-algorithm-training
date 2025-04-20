import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './C.js';

test('1', () => {
  assert.strictEqual(fn(['1 2 2003']), 0);
});
test('2', () => {
  assert.strictEqual(fn(['2 29 2008']), 1);
});

test('My', () => {
  assert.strictEqual(fn(['1 1 2008']), 1);
  assert.strictEqual(fn(['19 19 2008']), 1);
});
