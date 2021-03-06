import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(
    fn([
      '7',
      '1 5',
      '10 -5',
      '1 10',
      '4 -2',
      '4 3',
      '4 1',
      '4 0', //
    ])
  ).toStrictEqual([
    '1 15',
    '4 2',
    '10 -5', //
  ]);
});

test('2', () => {
  expect(
    fn([
      '5',
      '5 -10000',
      '-5 100000000000',
      '10 2000000000000',
      '-5 -300000000000',
      '0 10000000000000', //
    ])
  ).toStrictEqual([
    '-5 -200000000000',
    '0 10000000000000',
    '5 -10000',
    '10 2000000000000', //
  ]);
});
test('4 BOT', () => {
  expect(
    fn([
      '5',
      '5 -10000',
      '-5 100000000000',
      '10 2000000000000',
      '-5 -300000000000',
      '0 10000000000000', //
    ])
  ).toStrictEqual([
    '-5 -200000000000',
    '0 10000000000000',
    '5 -10000',
    '10 2000000000000', //
  ]);
});
