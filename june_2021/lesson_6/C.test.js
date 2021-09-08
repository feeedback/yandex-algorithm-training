import { test, expect } from '@jest/globals';
import fn from './C.js';

test('1', () => {
  expect(fn(['2 3 10'])).toStrictEqual(9);
});

test('My. Square', () => {
  expect(fn(['1 1 1'])).toStrictEqual(1);
  expect(fn(['1 1 2'])).toStrictEqual(2);
  expect(fn(['1 1 3'])).toStrictEqual(2);
  expect(fn(['1 1 4'])).toStrictEqual(2);
  expect(fn(['1 1 5'])).toStrictEqual(3);
});
test('My 1', () => {
  expect(fn(['5 2 1'])).toStrictEqual(5);
  expect(fn(['2 5 1'])).toStrictEqual(5);
});
test('My 2', () => {
  expect(fn(['5 2 10'])).toStrictEqual(10);
  expect(fn(['2 5 10'])).toStrictEqual(10);
});

test('bot. 7', () => {
  expect(fn(['5 10 9'])).toStrictEqual(25);
});

test('bot. 11', () => {
  expect(fn(['149 651 741'])).toStrictEqual(8493);
});
