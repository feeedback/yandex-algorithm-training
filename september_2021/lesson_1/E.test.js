import { test, expect } from '@jest/globals';
import fn from './E.js';

test('1', () => {
  expect(fn([5, '1 1'])).toStrictEqual(0);
});

test('2', () => {
  expect(fn([3, '-1 -1'])).toStrictEqual(1);
});

test('3', () => {
  expect(fn([4, '4 4'])).toStrictEqual(2);
});

test('4', () => {
  expect(fn([4, '2 2'])).toStrictEqual(0);
});
