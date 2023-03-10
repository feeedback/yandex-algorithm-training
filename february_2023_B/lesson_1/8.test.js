import { test, expect } from '@jest/globals';
import fn from './8.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

test('1', () => {
  expect(
    fn(
      toLines(
        `3
1 1
1 10
5 5`
      )
    )
  ).toStrictEqual('1 1 5 10');
});
