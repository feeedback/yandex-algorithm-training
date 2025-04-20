import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { multiLineStrToArrStr as toLines } from '../../utils.js';
import fn from './4.js';

describe('february_2023_B/lesson_1/4', () => {
  test('1', () => {
    assert.strictEqual(
      fn(
        toLines(
          `25
2
1
2`
        )
      ),
      '2 2'
    );
  });

  test('2', () => {
    assert.strictEqual(
      fn(
        toLines(`25
13
7
1`)
      ),
      '-1'
    );
  });

  test('4', () => {
    assert.strictEqual(
      fn(
        toLines(`11
5
3
2`)
      ),
      '1 1'
    );
  });
});
