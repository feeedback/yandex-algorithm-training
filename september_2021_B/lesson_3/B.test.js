import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './B.js';

test('1', () => {
  assert.deepStrictEqual(fn(['1 2 3 2 3 4']), ['NO', 'NO', 'NO', 'YES', 'YES', 'NO']);
});
