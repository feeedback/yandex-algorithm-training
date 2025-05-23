import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './B.js';

describe('september_2021_A/lesson_1/B', () => {
  test('1', () => {
    assert.deepStrictEqual(
      fn(['3', '1 1 4 2 3 0 2 3', '1 1 5 2 2 3 3 0', '0 0 5 1 6 3 1 2']),
      ['YES', 'NO', 'YES']
    );
  });

  test('2 from Bot', () => {
    assert.deepStrictEqual(
      fn(['2', '10 10 12 12 11 14 13 16', '10 10 20 9 19 19 9 20']),
      ['YES', 'YES']
    );
  });

  test('8 from Bot. check self-intersecting', () => {
    assert.deepStrictEqual(
      fn([
        '9',
        '100 100 -100 -100 -1 1 1 -1',
        '100 100 -1 1 1 -1 -100 -100',
        '100 100 -1 1 -100 -100 1 -1',
        '-10 -10 -14 -14 -11 -12 -12 -13',
        '-10 -10 -14 -14 -12 -13 -11 -12',
        '-10 -10  -11 -12 -14 -14 -12 -13',
        '-11 -5 -1 -5 0 0 -10 0',
        '-11 -5 0 0 -1 -5 -10 0',
        '-11 -5 -10 0 -1 -5 0 0',
      ]),
      [
        'YES',
        'YES',
        'YES',
        'NO',
        'NO',
        'NO',
        'YES',
        'YES',
        'YES',
        //
      ]
    );
  });

  test('10 from Bot', () => {
    assert.deepStrictEqual(
      fn([
        '10',
        '0 0 -5 0 -10 0 -7 4',
        '0 0 -5 0 -7 4 -10 0 ',
        '-7 4 0 0 -5 0 -10 0',
        '0 0 10 0 10 0 5 5',
        '0 0 10 0 5 5 10 0',
        '10 0 0 0 10 0 5 5',
        '0 0 10 0 1 1 9 1',
        '0 0 10 0 9 1 1 1',
        '9 1 0 0 10 0 1 1',
        '0 0 5 0 1 1 6 1',
      ]),
      [
        'NO',
        'NO',
        'NO',
        'NO',
        'NO',
        'NO',
        'NO',
        'NO',
        'NO',
        'YES',
        //
      ]
    );
  });
});
