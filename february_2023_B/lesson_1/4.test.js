import { test, expect } from '@jest/globals';
import fn from './4.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

test('1', () => {
  expect(
    fn(
      toLines(
        `25
2
1
2`
      )
    )
  ).toStrictEqual('2 2');
});

test('2', () => {
  expect(
    fn(
      toLines(`25
13
7
1`)
    )
  ).toStrictEqual('-1');
});

test('4', () => {
  expect(
    fn(
      toLines(`11
5
3
2`)
    )
  ).toStrictEqual('1 1');
});
