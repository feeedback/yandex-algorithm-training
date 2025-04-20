import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './B.js';

describe('september_2021_B/lesson_3/B', () => {
  test('1', () => {
    assert.deepStrictEqual(fn(['1 2 3 2 3 4']), [
      'NO',
      'NO',
      'NO',
      'YES',
      'YES',
      'NO',
    ]);
  });
});
