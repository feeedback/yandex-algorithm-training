import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './E.js';

test('1', () => {
  assert.strictEqual(fn(['2', '2 1']), 1);
});

test('My', () => {
  assert.strictEqual(fn(['3', '1000 2 5']), 7);
});
