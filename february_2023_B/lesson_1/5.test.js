import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fn from './5.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

describe('february_2023_B/lesson_1/5', () => {
  // В первом тесте имеется по одной дощечке с каждой из 3 различных букв. Ответ 2 достигается на строке "abc"
  test('1', () => {
    assert.strictEqual(
      fn(
        toLines(
          `3
1
1
1
`
        )
      ),
      2
    );
  });

  test('2', () => {
    assert.strictEqual(
      fn(
        toLines(`2
3
4
`)
      ),
      3
    );
  });

  test('my', () => {
    assert.strictEqual(
      fn(
        toLines(`1
99
`)
      ),
      0
    );
  });
});
