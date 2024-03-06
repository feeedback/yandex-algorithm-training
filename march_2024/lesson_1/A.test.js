import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(fn(['0 7', '12 5'])).toStrictEqual(25);
});

test('2', () => {
  expect(fn(['2 3', '10 3'])).toStrictEqual(14);
});

test('my', () => {
  expect(fn(['-3 3', '1 2'])).toStrictEqual(10);
});