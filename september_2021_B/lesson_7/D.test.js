import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './D.js';

test('// no test?', () => {
  assert.deepStrictEqual(fn(['2 1', '0 1', '0 1']), [2]);
});
