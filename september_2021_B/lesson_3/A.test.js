import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './A.js';

test('1', () => {
  assert.strictEqual(fn(['1 3 2', '4 3 2']), 2);
});
