import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { multiLineStrToArrStr as toLines } from '../../utils.js';
import fn from './8.js';

describe('february_2023_B/lesson_1/8', () => {
  test('1', () => {
    assert.strictEqual(
      fn(
        toLines(
          `3
1 1
1 10
5 5`
        )
      ),
      '1 1 5 10'
    );
  });
});
