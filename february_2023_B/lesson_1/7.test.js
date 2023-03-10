import { test, expect } from '@jest/globals';
import fn from './7.js';
import { multiLineStrToArrStr as toLines } from '../../utils.js';

test('1', () => {
  expect(
    fn(
      toLines(
        `15:01:00
18:09:45
15:01:40`
      )
    )
  ).toStrictEqual('18:10:05');
});

test('2', () => {
  expect(
    fn(
      toLines(
        `11:37:00
23:51:00
23:59:59`
      )
    )
  ).toStrictEqual('06:02:30');
});

test('9', () => {
  expect(
    fn(
      toLines(
        `21:00:00
22:00:00
06:00:00`
      )
    )
  ).toStrictEqual('02:30:00');
});
