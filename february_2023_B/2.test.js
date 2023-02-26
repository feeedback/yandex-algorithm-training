import { test, expect, describe } from '@jest/globals';
import fn from './2.js';

describe('simplified two chars test', () => {
  test('max at begin', () => {
    expect(fn(['2', 'abbaaba'])).toStrictEqual(5);
  });

  test('max at end', () => {
    expect(fn(['2', 'bbabaa'])).toStrictEqual(5);
  });
});

test('1', () => {
  expect(fn(['2', 'abcaz'])).toStrictEqual(4);
});

test('2', () => {
  expect(fn(['2', 'helto'])).toStrictEqual(3);
});
