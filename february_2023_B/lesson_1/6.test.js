import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fn from './6.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

describe('february_2023_B/lesson_1/6', () => {
  // В первом тесте имеется по одной дощечке с каждой из 3 различных букв. Ответ 2 достигается на строке "abc"
  test('1', () => {
    assert.strictEqual(
      fn(
        toLines(
          `10
3
1 3
4 7
3 4
`
        )
      ), 1
    );
  });

  test('2', () => {
    assert.strictEqual(
      fn(
        toLines(`10
4
1 3
4 5
7 8
4 6
`)
      ), 3
    );
  });
});
