import { test, expect } from '@jest/globals';
import fn from './C.js';

test('1', () => {
  expect(fn(['1 2 2003'])).toStrictEqual(0);
});
test('2', () => {
  expect(fn(['2 29 2008'])).toStrictEqual(1);
});

test('My', () => {
  expect(fn(['1 1 2008'])).toStrictEqual(1);
  expect(fn(['19 19 2008'])).toStrictEqual(1);
});
