import { test, expect } from '@jest/globals';
import fn from './5.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

// В первом тесте имеется по одной дощечке с каждой из 3 различных букв. Ответ 2 достигается на строке "abc"
test('1', () => {
  expect(
    fn(
      toLines(
        `3
1
1
1
`
      )
    )
  ).toStrictEqual(2);
});

test('2', () => {
  expect(
    fn(
      toLines(`2
3
4
`)
    )
  ).toStrictEqual(3);
});

test('my', () => {
  expect(
    fn(
      toLines(`1
99
`)
    )
  ).toStrictEqual(0);
});
