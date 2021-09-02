import { test, expect } from '@jest/globals';
import fn from './B.js';

test('1', () => {
  expect(fn(['100 5 6'])).toStrictEqual(0);
});
test('2', () => {
  expect(fn(['10 1 9'])).toStrictEqual(1);
});

test('My', () => {
  expect(fn(['8 7 5'])).toStrictEqual(1);
});

test('My', () => {
  expect(fn(['8 8 1'])).toStrictEqual(0);
});
