import { test, expect } from '@jest/globals';
import fn from './6.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

// В первом тесте имеется по одной дощечке с каждой из 3 различных букв. Ответ 2 достигается на строке "abc"
test('1', () => {
  expect(
    fn(
      toLines(
        `10
3
1 3
4 7
3 4
`
      )
    )
  ).toStrictEqual(1);
});

test('2', () => {
  expect(
    fn(
      toLines(`10
4
1 3
4 5
7 8
4 6
`)
    )
  ).toStrictEqual(3);
});
