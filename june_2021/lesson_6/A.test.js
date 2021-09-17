import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(
    fn([
      '10 10',
      '1 61 126 217 2876 6127 39162 98126 712687 1000000000',
      '100 6127 1 61 200 -10000 1 217 10000 1000000000',
    ])
  ).toStrictEqual(['NO', 'YES', 'YES', 'YES', 'NO', 'NO', 'YES', 'YES', 'NO', 'YES']);
});

test('2', () => {
  expect(fn(['10 10', '-8 -6 -4 -4 -2 -1 0 2 3 3 ', '8 3 -3 -2 2 -1 2 9 -8 0'])).toStrictEqual([
    'NO',
    'YES',
    'NO',
    'YES',
    'YES',
    'YES',
    'YES',
    'NO',
    'YES',
    'YES',
  ]);
});

test('3', () => {
  expect(fn(['10 5', '1 2 3 4 5 6 7 8 9 10', '-2 0 4 9 12'])).toStrictEqual(['NO', 'NO', 'YES', 'YES', 'NO']);
});
