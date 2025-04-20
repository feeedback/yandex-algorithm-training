import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fn from './D.js';

describe('september_2021_B/lesson_7/D', () => {
  test('// no test?', () => {
    assert.deepStrictEqual(fn(['2 1', '0 1', '0 1']), [2]);
  });
});
