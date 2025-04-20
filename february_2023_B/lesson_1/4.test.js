import { test } from 'node:test';
import assert from 'node:assert/strict';
import fn from './4.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

test('1', () => {
  assert.strictEqual(
    fn(
      toLines(
        `25
2
1
2`
      )
    ), '2 2'
  );
});

test('2', () => {
  assert.strictEqual(
    fn(
      toLines(`25
13
7
1`)
    ), '-1'
  );
});

test('4', () => {
  assert.strictEqual(
    fn(
      toLines(`11
5
3
2`)
    ), '1 1'
  );
});
