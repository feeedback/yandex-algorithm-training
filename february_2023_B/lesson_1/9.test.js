import { test, expect } from '@jest/globals';
import fn from './9.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

test('1', () => {
  expect(
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
  ).toStrictEqual([28, 21]);
});
