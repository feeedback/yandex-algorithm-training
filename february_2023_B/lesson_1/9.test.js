import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { multiLineStrToArrStr as toLines } from '../../utils.js';
import fn from './9.js';

describe('february_2023_B/lesson_1/9', () => {
  test('1', () => {
    assert.deepStrictEqual(
      fn(
        toLines(
          `3 3 2
1 2 3
4 5 6
7 8 9
2 2 3 3
1 1 2 3
`
        )
      ),
      [28, 21]
    );
  });
});
