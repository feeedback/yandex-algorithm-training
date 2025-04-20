import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './G.js';

test('1', () => {
  assert.strictEqual(fn(['10 5 2']), '4');
});
test('2', () => {
  assert.strictEqual(fn(['13 5 3']), '3');
});
test('2', () => {
  assert.strictEqual(fn(['14 5 3']), '4');
});
