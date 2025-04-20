import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './9.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

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
    )
    , [28, 21]);
});
