import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fn from './7.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

describe('february_2023_B/lesson_1/7', () => {
  test('1', () => {
    assert.strictEqual(
      fn(
        toLines(
          `15:01:00
18:09:45
15:01:40`
        )
      ),
      '18:10:05'
    );
  });

  test('2', () => {
    assert.strictEqual(
      fn(
        toLines(
          `11:37:00
23:51:00
23:59:59`
        )
      ),
      '06:02:30'
    );
  });

  test('9', () => {
    assert.strictEqual(
      fn(
        toLines(
          `21:00:00
22:00:00
06:00:00`
        )
      ),
      '02:30:00'
    );
  });
});
