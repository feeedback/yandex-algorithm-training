import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './8.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

test('1', () => {
  assert.strictEqual(
    fn(
      toLines(
        `3
1 1
1 10
5 5`
      )
    )
    , '1 1 5 10')
});
