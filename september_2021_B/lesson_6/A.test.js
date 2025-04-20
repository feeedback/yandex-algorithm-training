import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './A.js';

test('1', () => {
  assert.strictEqual(fn(['5', '10 1 10 3 4', '4', '1 10', '2 9', '3 4', '2 2']), '5 2 2 0');
});
